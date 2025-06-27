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
import React, { useState, useEffect } from 'react';
import { arrayOf, bool, func, number, shape, string } from 'prop-types';
import { Button, CloseButton, IconButton } from '@instructure/ui-buttons';
import { Heading } from '@instructure/ui-heading';
import { RadioInput, RadioInputGroup } from '@instructure/ui-radio-input';
import { SimpleSelect } from '@instructure/ui-simple-select';
import { TextArea } from '@instructure/ui-text-area';
import { Text } from '@instructure/ui-text';
import { IconQuestionLine } from '@instructure/ui-icons';
import { Flex } from '@instructure/ui-flex';
import { FormFieldGroup } from '@instructure/ui-form-field';
import { View } from '@instructure/ui-view';
import { Spinner } from '@instructure/ui-spinner';
import { Tooltip } from '@instructure/ui-tooltip';
import { Tray } from '@instructure/ui-tray';
import { StoreProvider } from '../../shared/StoreContext';
import { ClosedCaptionPanel } from '@instructure/canvas-media';
import { CUSTOM, MIN_WIDTH_VIDEO, MIN_PERCENTAGE, videoSizes, studioPlayerSizes, labelForImageSize, scaleVideoSize, scaleToSize, MIN_WIDTH_STUDIO_PLAYER, MIN_HEIGHT_STUDIO_PLAYER } from '../../instructure_image/ImageEmbedOptions';
import Bridge from '../../../../bridge';
import RceApiSource from '../../../../rcs/api';
import formatMessage from '../../../../format-message';
import DimensionsInput, { useDimensionsState } from '../../shared/DimensionsInput';
import { getTrayHeight } from '../../shared/trayUtils';
import { instuiPopupMountNodeFn } from '../../../../util/fullscreenHelpers';
import { parsedStudioOptionsPropType } from '../../shared/StudioLtiSupportUtils';
import RCEGlobals from '../../../../rce/RCEGlobals';
const getLiveRegion = () => document.getElementById('flash_screenreader_holder');
export default function VideoOptionsTray({
  videoOptions,
  onRequestClose,
  onSave,
  open,
  trayProps,
  requestSubtitlesFromIframe = () => {},
  onEntered = null,
  onExited = null,
  id = 'video-options-tray',
  studioOptions = null,
  forBlockEditorUse = false
}) {
  const isConsolidatedMediaPlayer = RCEGlobals.getFeatures()?.consolidated_media_player;
  const {
    naturalHeight,
    naturalWidth
  } = videoOptions;
  const currentHeight = videoOptions.appliedHeight || naturalHeight;
  const currentWidth = videoOptions.appliedWidth || naturalWidth;
  const [titleText, setTitleText] = useState(videoOptions.titleText);
  const [displayAs, setDisplayAs] = useState('embed');
  const [videoSize, setVideoSize] = useState(videoOptions.videoSize);
  const [videoHeight, setVideoHeight] = useState(currentHeight);
  const [videoWidth, setVideoWidth] = useState(currentWidth);
  const [subtitles, setSubtitles] = useState(videoOptions.tracks || []);
  const [minWidth] = useState(isConsolidatedMediaPlayer ? MIN_WIDTH_STUDIO_PLAYER : MIN_WIDTH_VIDEO);
  const [minHeight] = useState(isConsolidatedMediaPlayer ? MIN_HEIGHT_STUDIO_PLAYER : Math.round(videoHeight / videoWidth * MIN_WIDTH_VIDEO));
  const [minPercentage] = useState(MIN_PERCENTAGE);
  const [editLocked, setEditLocked] = useState(null);
  const [loading, setLoading] = useState(true);
  const isStudio = !!studioOptions;
  const showDisplayOptions = (!isStudio || studioOptions.convertibleToLink) && !forBlockEditorUse;
  const showSizeControls = (!isStudio || studioOptions.resizable) && !forBlockEditorUse;
  const dimensionsState = useDimensionsState(videoOptions, {
    minHeight,
    minWidth,
    minPercentage
  });
  const api = new RceApiSource(trayProps);
  const videoSizeOptions = isConsolidatedMediaPlayer ? studioPlayerSizes : videoSizes;
  useEffect(() => {
    if (videoOptions.attachmentId) {
      api.getFile(videoOptions.attachmentId, {
        include: ['blueprint_course_status']
      }).then(response => {
        setEditLocked(response?.restricted_by_master_course && response?.is_master_course_child_content);
        setLoading(false);
      }).catch(_error => {
        setLoading(false);
      });
    }
  }, [videoOptions.attachmentId]);
  useEffect(() => {
    if (subtitles.length === 0) requestSubtitlesFromIframe(setSubtitles);
  }, []);
  function handleTitleTextChange(event) {
    setTitleText(event.target.value);
  }
  function handleDisplayAsChange(event) {
    event.target.focus();
    setDisplayAs(event.target.value);
  }
  function handleVideoSizeChange(_event, selectedOption) {
    setVideoSize(selectedOption.value);
    if (selectedOption.value === CUSTOM) {
      setVideoHeight(currentHeight);
      setVideoWidth(currentWidth);
    } else {
      const {
        height,
        width
      } = isConsolidatedMediaPlayer ? scaleVideoSize(selectedOption.value, naturalWidth, naturalHeight) : scaleToSize(selectedOption.value, naturalWidth, naturalHeight);
      setVideoHeight(height);
      setVideoWidth(width);
    }
  }
  function handleUpdateSubtitles(new_subtitles) {
    setSubtitles(new_subtitles);
  }
  function handleSave(event, updateMediaObject) {
    event.preventDefault();
    let appliedHeight = videoHeight;
    let appliedWidth = videoWidth;
    if (videoSize === CUSTOM) {
      appliedHeight = dimensionsState.height;
      appliedWidth = dimensionsState.width;
    }
    onSave({
      media_object_id: videoOptions.id,
      attachment_id: videoOptions.attachmentId,
      titleText,
      appliedHeight,
      appliedWidth,
      displayAs,
      subtitles,
      updateMediaObject,
      editLocked
    });
  }
  const tooltipText = formatMessage('Used by screen readers to describe the video');
  const textAreaLabel = /*#__PURE__*/React.createElement(Flex, {
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Flex.Item, null, formatMessage('Title')), /*#__PURE__*/React.createElement(Flex.Item, {
    margin: "0 0 0 xx-small"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    on: ['hover', 'focus'],
    placement: "top",
    renderTip: /*#__PURE__*/React.createElement(View, {
      display: "block",
      id: "alt-text-label-tooltip",
      maxWidth: "14rem"
    }, tooltipText)
  }, /*#__PURE__*/React.createElement(IconButton, {
    renderIcon: IconQuestionLine,
    size: "small",
    screenReaderLabel: tooltipText,
    withBackground: false,
    withBorder: false
  }))));
  const messagesForSize = [];
  if (videoSize !== CUSTOM) {
    messagesForSize.push({
      text: formatMessage('{width} x {height}px', {
        height: videoHeight,
        width: videoWidth
      }),
      type: 'hint'
    });
  }
  const saveDisabled = displayAs === 'embed' && (titleText === '' || videoSize === CUSTOM && !dimensionsState.isValid);
  return /*#__PURE__*/React.createElement(StoreProvider, trayProps, contentProps => /*#__PURE__*/React.createElement(Tray, {
    key: "video-options-tray",
    "data-mce-component": true,
    label: isStudio ? formatMessage('Studio Media Options Tray') : formatMessage('Video Options Tray'),
    mountNode: instuiPopupMountNodeFn,
    onDismiss: onRequestClose,
    onEntered: onEntered,
    onExited: onExited,
    open: open,
    placement: "end",
    shouldCloseOnDocumentClick: true,
    shouldContainFocus: true,
    shouldReturnFocus: true,
    size: "regular"
  }, /*#__PURE__*/React.createElement(Flex, {
    direction: "column",
    height: getTrayHeight()
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    as: "header",
    padding: "medium"
  }, /*#__PURE__*/React.createElement(Flex, {
    direction: "row"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    shouldGrow: true,
    shouldShrink: true
  }, /*#__PURE__*/React.createElement(Heading, {
    as: "h2"
  }, isStudio ? formatMessage('Studio Media Options') : formatMessage('Video Options'))), /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(CloseButton, {
    color: "primary",
    onClick: onRequestClose,
    screenReaderLabel: formatMessage('Close')
  })))), loading && videoOptions.attachmentId ? /*#__PURE__*/React.createElement(Flex.Item, {
    textAlign: "center",
    margin: "xx-large",
    padding: "xx-large"
  }, /*#__PURE__*/React.createElement(Spinner, {
    renderTitle: formatMessage('Loading')
  })) : /*#__PURE__*/React.createElement(Flex.Item, {
    as: "form",
    shouldGrow: true,
    margin: "none",
    shouldShrink: true
  }, /*#__PURE__*/React.createElement(Flex, {
    justifyItems: "space-between",
    direction: "column",
    height: "100%"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    shouldGrow: true,
    padding: "small",
    shouldShrink: true
  }, /*#__PURE__*/React.createElement(Flex, {
    direction: "column"
  }, !editLocked && /*#__PURE__*/React.createElement(Flex.Item, {
    padding: "small"
  }, isStudio ? /*#__PURE__*/React.createElement(Flex, {
    direction: "column"
  }, /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(Text, {
    weight: "bold"
  }, formatMessage('Media Title'))), /*#__PURE__*/React.createElement(Flex.Item, {
    padding: "small none none small"
  }, titleText)) : /*#__PURE__*/React.createElement(TextArea, {
    "aria-describedby": "alt-text-label-tooltip",
    disabled: displayAs === 'link',
    height: "4rem",
    label: textAreaLabel,
    onChange: handleTitleTextChange,
    placeholder: formatMessage('(Describe the video)'),
    resize: "vertical",
    value: titleText
  })), showDisplayOptions && /*#__PURE__*/React.createElement(Flex.Item, {
    margin: "small none none none",
    padding: "small"
  }, /*#__PURE__*/React.createElement(RadioInputGroup, {
    description: formatMessage('Display Options'),
    name: "display-video-as",
    onChange: handleDisplayAsChange,
    value: displayAs
  }, /*#__PURE__*/React.createElement(RadioInput, {
    label: formatMessage('Embed Video'),
    value: "embed"
  }), /*#__PURE__*/React.createElement(RadioInput, {
    label: formatMessage('Display Text Link (Opens in a new tab)'),
    value: "link"
  }))), showSizeControls && /*#__PURE__*/React.createElement(Flex.Item, {
    margin: "small none xx-small none"
  }, /*#__PURE__*/React.createElement(View, {
    as: "div",
    padding: "small small xx-small small"
  }, /*#__PURE__*/React.createElement(SimpleSelect, {
    id: `${id}-size`,
    mountNode: instuiPopupMountNodeFn,
    disabled: displayAs !== 'embed',
    renderLabel: formatMessage('Size'),
    messages: messagesForSize,
    assistiveText: formatMessage('Use arrow keys to navigate options.'),
    onChange: handleVideoSizeChange,
    value: videoSize
  }, videoSizeOptions.map(size => /*#__PURE__*/React.createElement(SimpleSelect.Option, {
    id: `${id}-size-${size}`,
    key: size,
    value: size
  }, labelForImageSize(size))))), videoSize === CUSTOM && /*#__PURE__*/React.createElement(View, {
    as: "div",
    padding: "xx-small small"
  }, /*#__PURE__*/React.createElement(DimensionsInput, {
    dimensionsState: dimensionsState,
    disabled: displayAs !== 'embed',
    minHeight: minHeight,
    minWidth: minWidth,
    minPercentage: minPercentage,
    hidePercentage: true
  }))), !isStudio && !editLocked && /*#__PURE__*/React.createElement(Flex.Item, {
    padding: "small"
  }, /*#__PURE__*/React.createElement(FormFieldGroup, {
    description: formatMessage('Closed Captions/Subtitles')
  }, /*#__PURE__*/React.createElement(ClosedCaptionPanel, {
    subtitles: subtitles.map(st => ({
      locale: st.locale,
      inherited: st.inherited,
      file: {
        name: st.language || st.locale
      } // this is an artifact of ClosedCaptionCreatorRow's inards
    })),
    uploadMediaTranslations: Bridge.uploadMediaTranslations,
    userLocale: Bridge.userLocale,
    updateSubtitles: handleUpdateSubtitles,
    liveRegion: getLiveRegion,
    mountNode: instuiPopupMountNodeFn
  }))))), /*#__PURE__*/React.createElement(Flex.Item, {
    background: "secondary",
    borderWidth: "small none none none",
    padding: "small medium",
    textAlign: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: saveDisabled,
    onClick: event => handleSave(event, contentProps.updateMediaObject),
    color: "primary"
  }, formatMessage('Done'))))))));
}
VideoOptionsTray.propTypes = {
  videoOptions: shape({
    titleText: string,
    appliedHeight: number,
    appliedWidth: number,
    naturalHeight: number.isRequired,
    naturalWidth: number.isRequired,
    tracks: arrayOf(shape({
      locale: string.isRequired,
      inherited: bool
    }))
  }).isRequired,
  onEntered: func,
  onExited: func,
  onRequestClose: func.isRequired,
  onSave: func.isRequired,
  open: bool.isRequired,
  trayProps: shape({
    host: string.isRequired,
    jwt: string.isRequired
  }),
  id: string,
  studioOptions: parsedStudioOptionsPropType,
  requestSubtitlesFromIframe: func
};