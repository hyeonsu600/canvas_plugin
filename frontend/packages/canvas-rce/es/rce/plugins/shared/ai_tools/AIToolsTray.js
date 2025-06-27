import _pt from "prop-types";
/*
 * Copyright (C) 2024 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import formatMessage from '../../../../format-message';
import { Button, CloseButton, CondensedButton, IconButton } from '@instructure/ui-buttons';
import { Flex } from '@instructure/ui-flex';
import { Heading } from '@instructure/ui-heading';
import { Tray } from '@instructure/ui-tray';
import { SVGIcon } from '@instructure/ui-svg-images';
import { SimpleSelect } from '@instructure/ui-simple-select';
import { ScreenReaderContent } from '@instructure/ui-a11y-content';
import { Spinner } from '@instructure/ui-spinner';
import { TextArea } from '@instructure/ui-text-area';
import { TruncateText } from '@instructure/ui-truncate-text';
import { View } from '@instructure/ui-view';
import { uid } from '@instructure/uid';
import { showFlashAlert } from '../../../../common/FlashAlert';
import doFetchApi from '../do-fetch-api-effect';
import { AIWandSVG, AIAvatarSVG, InsertSVG, CopySVG, RefreshSVG, DislikeSVG } from './aiicons';
import { AIResponseModal } from './AIResponseModal';
const msgid = () => uid('msg', 3);
const modifyAllTaskMessage = formatMessage('Hello. Please describe the modifications you would like to make to your composition.');
const modifySelectionTaskMessage = formatMessage('Hello. Please describe the modifications you would like to make to your selection.');
const generateTaskMessage = formatMessage('Please decribe what you would like to compose.');
export const AIToolsTray = ({
  open,
  container,
  mountNode,
  contextId,
  contextType,
  currentContent,
  onClose,
  onInsertContent,
  onReplaceContent
}) => {
  const [trayRef, setTrayRef] = useState(null);
  const [containerStyle] = useState(() => {
    if (container) {
      return {
        width: container.style.width,
        boxSizing: container.style.boxSizing,
        transition: container.style.transition
      };
    }
    return {};
  });
  const [isOpen, setIsOpen] = useState(open);
  const [task, setTask] = useState(() => {
    return currentContent.content.trim().length > 0 ? 'modify' : 'generate';
  });
  const [userPrompt, setUserPrompt] = useState('');
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const [responseHtml, setResponseHtml] = useState('');
  const chatContainerRef = useRef(null);
  const getModifyTaskMessage = useCallback(() => {
    return currentContent.type === 'selection' ? modifySelectionTaskMessage : modifyAllTaskMessage;
  }, [currentContent.type]);
  const initChatMessages = useCallback(() => {
    return [task === 'modify' ? {
      id: msgid(),
      type: 'message',
      message: getModifyTaskMessage()
    } : {
      id: msgid(),
      type: 'message',
      message: generateTaskMessage
    }];
  }, [getModifyTaskMessage, task]);
  const chatMessagesRef = useRef(initChatMessages());
  const reset = useCallback(() => {
    chatMessagesRef.current = initChatMessages();
    setWaitingForResponse(false);
    setUserPrompt('');
  }, [initChatMessages]);
  useLayoutEffect(() => {
    const lastbox = chatContainerRef.current?.querySelector('.ai-chat-box:last-child');
    lastbox?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }, [trayRef, chatMessagesRef.current.length]);
  useEffect(() => {
    setTask(currentContent.content.trim().length > 0 ? 'modify' : 'generate');
  }, [currentContent.content]);
  useEffect(() => {
    if (open !== isOpen) {
      setIsOpen(open);
      reset();
    }
  }, [isOpen, open, reset]);
  useEffect(() => {
    const shrinking_selector = '#content'; // '.block-editor-editor'

    if (open && trayRef) {
      const ed = document.querySelector(shrinking_selector);
      if (!ed) return;
      const edstyle = window.getComputedStyle(ed);
      const ed_rect = ed.getBoundingClientRect();
      const padding = parseInt(edstyle.paddingRight, 10);
      const tray_left = window.innerWidth - trayRef.offsetWidth;
      if (ed_rect.right > tray_left) {
        ed.style.boxSizing = 'border-box';
        ed.style.width = `${ed_rect.width - (ed_rect.right - tray_left - padding)}px`;
      }
    } else {
      const ed = document.querySelector(shrinking_selector);
      if (!ed) return;
      ed.style.boxSizing = containerStyle.boxSizing || '';
      ed.style.width = containerStyle.width || '';
      ed.style.transition = containerStyle.transition || '';
    }
  }, [containerStyle, open, trayRef]);
  const getResponse = useCallback(prompt => {
    setWaitingForResponse(true);

    // the .finally triggered the error even though there is a .catch

    doFetchApi({
      path: '/api/v1/rich_content/generate',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        // context_id: contextId,
        // context_type: contextType,
        course_id: contextId,
        prompt,
        current_copy: task === 'modify' ? currentContent : undefined,
        type_of_request: task
      })
    }).then(result => {
      const {
        json
      } = result;
      if (json.error) {
        chatMessagesRef.current.push({
          id: msgid(),
          type: 'error',
          message: formatMessage(json.error)
        });
      } else {
        chatMessagesRef.current.push({
          id: msgid(),
          type: 'response',
          message: json.content
        });
      }
    }).catch(async err => {
      const err_result = await err.response.json();
      const msg = err_result.error || formatMessage('An error occurred processing your request');
      chatMessagesRef.current.push({
        id: msgid(),
        type: 'error',
        message: msg
      });
    }).finally(() => {
      setWaitingForResponse(false);
    });
  }, [contextId, currentContent, task]);
  const handleCloseTray = useCallback(() => {
    onClose();
    chatMessagesRef.current.push({
      id: msgid(),
      type: 'message',
      message: task === 'modify' ? getModifyTaskMessage() : generateTaskMessage
    });
    setUserPrompt('');
  }, [getModifyTaskMessage, onClose, task]);
  const handleChangeTask = useCallback((event, data) => {
    setTask(data.value);
    setWaitingForResponse(false);
    chatMessagesRef.current.push({
      id: msgid(),
      type: 'message',
      message: data.value === 'modify' ? getModifyTaskMessage() : generateTaskMessage
    });
  }, [getModifyTaskMessage]);
  const handlePromptChange = useCallback(e => {
    setUserPrompt(e.target.value);
  }, []);
  const handleSubmitPrompt = useCallback(() => {
    chatMessagesRef.current.push({
      id: msgid(),
      type: 'user',
      message: userPrompt.trim()
    });
    getResponse(userPrompt);
    setUserPrompt('');
  }, [getResponse, userPrompt]);
  const handleInsertResponse = useCallback(responseText => {
    onInsertContent(responseText);
  }, [onInsertContent]);
  const handleCopyResponse = useCallback(async responseText => {
    try {
      if (ClipboardItem.supports('text/html')) {
        const htmlBlob = new Blob([responseText], {
          type: 'text/html'
        });
        await navigator.clipboard.write([new ClipboardItem({
          'text/html': htmlBlob
        })]);
      } else {
        const div = document.createElement('div');
        div.innerHTML = responseText;
        await navigator.clipboard.writeText(div.textContent || '');
      }
      showFlashAlert({
        message: formatMessage('Response copied to clipboard'),
        type: 'success',
        err: undefined
      });
    } catch (err) {
      showFlashAlert({
        message: formatMessage('Failed to copy response'),
        type: 'error',
        err: undefined
      });
    }
  }, []);
  const handleRefreshResponse = useCallback(() => {
    getResponse(userPrompt);
  }, [getResponse, userPrompt]);
  const handleDislikeResponse = useCallback(() => {
    console.log('dislike response'); // TODO: what?
  }, []);
  const handleShowWholeResponse = useCallback(event => {
    const msgId = event.target.dataset.messageId;
    const message = chatMessagesRef.current.find(msg => msg.id === msgId);
    if (message) {
      setResponseHtml(message.message);
    }
  }, []);
  const handleCloseResponseModal = useCallback(() => {
    setResponseHtml('');
  }, []);
  const handleInsertFromModal = useCallback(() => {
    handleInsertResponse(responseHtml);
    handleCloseResponseModal();
  }, [handleCloseResponseModal, handleInsertResponse, responseHtml]);
  const handleReplaceFromModal = useCallback(() => {
    onReplaceContent(responseHtml);
    handleCloseResponseModal();
  }, [handleCloseResponseModal, onReplaceContent, responseHtml]);
  const sharkfin = () => {
    return /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "0,14 0,0 14,14",
      fill: "none",
      stroke: "#ccc",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "0,14 14,14",
      stroke: "white",
      strokeWidth: "2"
    }));
  };
  const renderResponse = msgId => {
    const message = chatMessagesRef.current.find(msg => msg.id === msgId);
    if (!message) {
      return /*#__PURE__*/React.createElement("span", null, formatMessage("I'm sorry, but I cannot find the AI's answer"));
    }
    const div = document.createElement('div');
    div.innerHTML = message.message;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(TruncateText, {
      maxLines: 3
    }, div.textContent), /*#__PURE__*/React.createElement("span", {
      style: {
        alignSelf: 'end'
      }
    }, /*#__PURE__*/React.createElement(CondensedButton, {
      onClick: handleShowWholeResponse,
      "data-message-id": msgId
    }, formatMessage('Show all'))));
  };

  // TODO: should the response box get truncated?
  const renderChatBox = (message, key) => {
    return /*#__PURE__*/React.createElement("div", {
      id: message.id,
      className: "ai-chat-box",
      key: key,
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        rowGap: '4px'
      }
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      src: AIAvatarSVG,
      size: "small"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '.5rem',
        border: '1px solid #ccc',
        borderRadius: '.5rem',
        position: 'relative'
      }
    }, message.type === 'waiting' && /*#__PURE__*/React.createElement(Spinner, {
      renderTitle: message.message,
      size: "x-small"
    }), (message.type === 'message' || message.type === 'user') && message.message, message.type === 'response' && renderResponse(message.id), message.type === 'error' && /*#__PURE__*/React.createElement("span", null, message.message), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '-18px',
        // Adjust this value to position the sharkfin
        left: '40px' // Adjust this value to align the sharkfin horizontally
      }
    }, sharkfin())), message.type === 'response' ?
    /*#__PURE__*/
    /* TODO: why is it to wide w/o maxWidth? */
    React.createElement("div", {
      style: {
        display: 'flex',
        gap: '8px',
        justifyContent: 'end',
        maxWidth: '95%',
        margin: '5px 0'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      screenReaderLabel: formatMessage('Insert'),
      withBackground: false,
      withBorder: false,
      onClick: handleInsertResponse.bind(null, message.message)
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      src: InsertSVG,
      size: "x-small"
    })), /*#__PURE__*/React.createElement(IconButton, {
      screenReaderLabel: formatMessage('Copy'),
      withBackground: false,
      withBorder: false,
      onClick: handleCopyResponse.bind(null, message.message)
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      src: CopySVG,
      size: "x-small"
    })), /*#__PURE__*/React.createElement(IconButton, {
      screenReaderLabel: formatMessage('Retry'),
      withBackground: false,
      withBorder: false,
      onClick: handleRefreshResponse
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      src: RefreshSVG,
      size: "x-small"
    })), /*#__PURE__*/React.createElement(IconButton, {
      screenReaderLabel: formatMessage('Dislike'),
      withBackground: false,
      withBorder: false,
      onClick: handleDislikeResponse
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      src: DislikeSVG,
      size: "x-small"
    }))) : null);
  };
  const renderChatMessages = () => {
    const messages = chatMessagesRef.current.map(message => {
      return renderChatBox(message, message.id);
    });
    if (waitingForResponse) {
      messages.push(renderChatBox({
        id: msgid(),
        type: 'waiting',
        message: formatMessage('Waiting for response')
      }, 'ai-waiting-message'));
    }
    return messages;
  };
  return /*#__PURE__*/React.createElement(Tray, {
    contentRef: el => setTrayRef(el),
    label: "AIToolsTray",
    mountNode: mountNode,
    open: open,
    placement: "end",
    size: "small",
    onClose: handleCloseTray
  }, /*#__PURE__*/React.createElement(View, {
    as: "div",
    padding: "small",
    position: "relative",
    height: "100vh",
    overflowY: "hidden"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      height: '100%',
      minHeight: '1px',
      maxHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(Flex, {
    margin: "0 0 medium",
    gap: "small"
  }, /*#__PURE__*/React.createElement(CloseButton, {
    placement: "end",
    onClick: handleCloseTray,
    screenReaderLabel: "Close"
  }), /*#__PURE__*/React.createElement(SVGIcon, {
    src: AIWandSVG,
    size: "x-small"
  }), /*#__PURE__*/React.createElement(Heading, {
    level: "h3"
  }, formatMessage('Writing Assistant'))), /*#__PURE__*/React.createElement(SimpleSelect, {
    renderLabel: formatMessage('What would you like to do?'),
    value: task,
    onChange: handleChangeTask
  }, /*#__PURE__*/React.createElement(SimpleSelect.Option, {
    id: "modify",
    value: "modify",
    isDisabled: currentContent.content.trim().length === 0
  }, formatMessage('Modify')), /*#__PURE__*/React.createElement(SimpleSelect.Option, {
    id: "generate",
    value: "generate"
  }, formatMessage('Compose'))), /*#__PURE__*/React.createElement("div", {
    style: {
      flexGrow: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: chatContainerRef,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      justifyContent: 'end',
      minHeight: '100%'
    }
  }, renderChatMessages())), /*#__PURE__*/React.createElement(View, {
    as: "div",
    padding: "small 0 0 0",
    borderWidth: "small 0 0 0"
  }, /*#__PURE__*/React.createElement(TextArea, {
    id: "ai-prompt",
    label: /*#__PURE__*/React.createElement(ScreenReaderContent, null, formatMessage('Enter text')),
    resize: "vertical",
    value: userPrompt,
    onChange: handlePromptChange
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleSubmitPrompt,
    interaction: waitingForResponse || !userPrompt.trim() ? 'disabled' : 'enabled'
  }, formatMessage('Submit')))), responseHtml && /*#__PURE__*/React.createElement(AIResponseModal, {
    open: true,
    onClose: handleCloseResponseModal,
    html: responseHtml,
    onInsert: handleInsertFromModal,
    onReplace: handleReplaceFromModal
  })));
};
AIToolsTray.propTypes = {
  open: _pt.bool.isRequired,
  contextId: _pt.string.isRequired,
  contextType: _pt.string.isRequired,
  currentContent: _pt.shape({
    type: _pt.oneOf(['selection', 'full']).isRequired,
    content: _pt.string.isRequired
  }).isRequired,
  onClose: _pt.func.isRequired,
  onInsertContent: _pt.func.isRequired,
  onReplaceContent: _pt.func.isRequired
};