import _pt from "prop-types";
// TODO: we get complaints about <Overlay> because it can be either a Modal or a Tray
// and they have different props. I don't have time to fix this the right way now.
/*
 * Copyright (C) 2019 - present Instructure, Inc.
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

import { replaceTags } from '../../helpers/tags';
import React, { createRef } from 'react';
import { Spinner } from '@instructure/ui-spinner';
import { Flex } from '@instructure/ui-flex';
import ToolLaunchIframe from '../util/ToolLaunchIframe';
import processEditorContentItems from '../../lti13-content-items/processEditorContentItems';
import { RceLti11ContentItem } from '../../lti11-content-items/RceLti11ContentItem';
import formatMessage from '../../../../../format-message';
import { instuiPopupMountNodeFn } from '../../../../../util/fullscreenHelpers';
import { ExternalToolDialogTray } from './ExternalToolDialogTray';
import { ExternalToolDialogModal } from './ExternalToolDialogModal';
import { showFlashAlert } from '../../../../../common/FlashAlert';
import { parseUrlOrNull } from '../../../../../util/url-util';
export default class ExternalToolDialog extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false,
      button: null,
      form: EMPTY_FORM,
      iframeLoaded: false
    };
    this.formRef = /*#__PURE__*/createRef();
    this.iframeRef = /*#__PURE__*/createRef();
    this.handleBeforeUnload = ev => ev.returnValue = formatMessage('Changes you made may not be saved.');
    this.handleExternalContentReady = data => {
      const env = this.props.env;

      // a2DataReady listener will insert the data to the editor,
      // So only close the modal is needed, only if assignments_2_student flag is enabled,
      // is readable by current user and it is a student assignment view.
      if (env.isA2StudentView) {
        this.close();
        return;
      }
      const contentItems = data.contentItems;
      if (contentItems.length === 1 && contentItems[0]['@type'] === 'lti_replace') {
        const code = contentItems[0].text;

        // @ts-expect-error
        env.rceWrapper?.setCode(code);
      } else {
        contentItems.forEach(contentData => {
          const code = RceLti11ContentItem.fromJSON({
            ...contentData,
            class: 'lti-embed'
          }, env).codePayload;

          // @ts-expect-error
          env.rceWrapper?.insertCode(code);
        });
      }
      this.close();
    };
    this.handlePostedMessage = ev => {
      // messages from Canvas in the tool launch frame
      if (ev.origin === this.resourceSelectionOrigin) {
        const data = ev.data;
        if (data?.subject === 'LtiDeepLinkingResponse') {
          processEditorContentItems(ev, this.props.env, this);
        } else if (data?.subject === 'externalContentReady') {
          // 'externalContentReady' is EXTERNAL_CONTENT_READY in
          // ui/shared/external-tools/externalContentEvents.ts
          // where events are also described/used
          this.handleExternalContentReady(ev.data);
        }
      } else {
        // messages from the tool
        const data = ev.data;
        if (data?.subject === 'lti.close') {
          this.handleClose();
        }
      }
    };
    this.handleClose = () => {
      const msg = formatMessage('Are you sure you want to cancel? Changes you made may not be saved.');
      if (window.confirm(msg)) {
        this.close();
      }
    };
    this.handleOpen = () => {
      if (this.state.open) this.formRef.current?.submit();
    };
    this.handleRemove = () => {
      this.setState({
        button: null
      });
      this.props.env.editor?.focus();

      // force tinyMCE to redraw sticky toolbar otherwise it never goes away
      window.dispatchEvent(new Event('resize'));
    };
    this.calcIFrameHeight = () => {
      if (this.state.button?.use_tray) {
        return '100%';
      }
      const toolDefinedHeight = this.state.button?.height;
      const iFrameHeight = toolDefinedHeight !== null && toolDefinedHeight !== void 0 ? toolDefinedHeight : Math.max(Math.min(window.innerHeight - 100, 550), 100);
      const modalMaxHeight = '95';
      const modalHeaderHeightWithPadding = '5.5rem';
      const complexHeightWithDVH = `min(${iFrameHeight}px, calc(${modalMaxHeight}dvh - ${modalHeaderHeightWithPadding}))`;
      if (CSS.supports('height', complexHeightWithDVH)) {
        return complexHeightWithDVH;
      } else {
        return `${iFrameHeight}px`;
      }
    };
  }
  open(button) {
    var _env$editorSelection, _env$editorContent;
    const {
      env,
      resourceSelectionUrlOverride
    } = this.props;
    let urlStr = replaceTags(resourceSelectionUrlOverride, 'id', button.id);
    const selection = (_env$editorSelection = env?.editorSelection) !== null && _env$editorSelection !== void 0 ? _env$editorSelection : '';
    const contents = (_env$editorContent = env?.editorContent) !== null && _env$editorContent !== void 0 ? _env$editorContent : '';
    if (urlStr == null) {
      // if we don't have a url on the page, build one using the current context.
      // url should look like: /courses/2/external_tools/15/resource_selection?editor=1

      const contextAssetInfo = env.contextAssetInfo;
      if (contextAssetInfo == null) {
        showFlashAlert({
          message: formatMessage('Unable to determine resource selection url'),
          type: 'error',
          err: undefined
        });
        return;
      }
      const {
        contextType,
        contextId
      } = contextAssetInfo;
      const canvasOrigin = env.canvasOrigin;
      urlStr = `${canvasOrigin}/${contextType}s/${contextId}/external_tools/${encodeURIComponent(button.id)}/resource_selection`;
    }
    this.setState({
      open: true,
      button,
      form: {
        url: urlStr,
        selection,
        contents,
        parent_frame_context: env.containingCanvasLtiToolId
      }
    });
    window.addEventListener('beforeunload', this.handleBeforeUnload);
    window.addEventListener('message', this.handlePostedMessage);
  }
  close() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
    window.removeEventListener('message', this.handlePostedMessage);
    this.setState({
      open: false,
      form: EMPTY_FORM
    });
  }
  get resourceSelectionOrigin() {
    if (this.props.resourceSelectionUrlOverride) {
      const resourceSelectionUrl = parseUrlOrNull(this.props.resourceSelectionUrlOverride);
      if (resourceSelectionUrl != null) {
        return resourceSelectionUrl.origin;
      }
    }
    return this.props.env.canvasOrigin;
  }
  render() {
    var _state$button$title, _state$button$width;
    const state = this.state;
    const props = this.props;
    const label = formatMessage('Embed content from External Tool');
    const Overlay = state.button?.use_tray ? ExternalToolDialogTray : ExternalToolDialogModal;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
      ref: this.formRef,
      method: "POST",
      action: state.form.url,
      target: "external_tool_launch",
      style: {
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "editor",
      value: "1"
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "selection",
      value: state.form.selection
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "editor_contents",
      value: state.form.contents
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "com_instructure_course_canvas_resource_type"
      // @ts-expect-error
      ,
      value: props.env.rceWrapper?.getResourceIdentifiers().resourceType
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "com_instructure_course_canvas_resource_id"
      // @ts-expect-error
      ,
      value: props.env.rceWrapper?.getResourceIdentifiers().resourceId
    }), state.form.parent_frame_context != null && /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "parent_frame_context",
      value: state.form.parent_frame_context
    })), /*#__PURE__*/React.createElement(Overlay, {
      open: state.open,
      mountNode: instuiPopupMountNodeFn(),
      label: label,
      onOpen: this.handleOpen,
      onClose: this.handleRemove,
      onCloseButton: this.handleClose,
      name: (_state$button$title = state.button?.title) !== null && _state$button$title !== void 0 ? _state$button$title : ' '
    }, !state.iframeLoaded && /*#__PURE__*/React.createElement(Flex, {
      alignItems: "center",
      justifyItems: "center"
    }, /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(Spinner, {
      renderTitle: formatMessage('Loading External Tool'),
      size: "large",
      margin: "0 0 0 medium"
    }))), /*#__PURE__*/React.createElement(ToolLaunchIframe, {
      title: label,
      ref: this.iframeRef,
      name: "external_tool_launch",
      src: "",
      id: "external_tool_button_frame",
      style: {
        height: this.calcIFrameHeight(),
        width: state.button?.use_tray ? '100%' : (_state$button$width = state.button?.width) !== null && _state$button$width !== void 0 ? _state$button$width : 800,
        border: '0',
        display: 'block',
        visibility: state.iframeLoaded ? 'visible' : 'hidden'
      },
      allow: props.iframeAllowances,
      onLoad: () => this.setState({
        iframeLoaded: true
      })
    })));
  }
}
ExternalToolDialog.propTypes = {
  iframeAllowances: _pt.string.isRequired,
  resourceSelectionUrlOverride: _pt.oneOfType([_pt.string, _pt.oneOf([null])])
};
ExternalToolDialog.defaultProps = {
  resourceSelectionUrlOverride: undefined
};
const EMPTY_FORM = {
  url: '',
  selection: '',
  contents: '',
  parent_frame_context: null
};