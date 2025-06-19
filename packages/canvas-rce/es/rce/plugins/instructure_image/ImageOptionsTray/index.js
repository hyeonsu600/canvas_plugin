/*
 * Copyright (C) 2025 - present Instructure, Inc.
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

import React, { useState, useEffect, useRef } from 'react';
import { bool, func, number, shape, string } from 'prop-types';
import { Button, CloseButton } from '@instructure/ui-buttons';
import { Heading } from '@instructure/ui-heading';
import { Flex } from '@instructure/ui-flex';
import { Tray } from '@instructure/ui-tray';
import { CUSTOM, MIN_HEIGHT, MIN_WIDTH, MIN_PERCENTAGE, scaleToSize } from '../ImageEmbedOptions';
import formatMessage from '../../../../format-message';
import { useDimensionsState } from '../../shared/DimensionsInput';
import ImageOptionsForm from '../../shared/ImageOptionsForm';
import { getTrayHeight, isExternalUrl } from '../../shared/trayUtils';
import validateURL from '../../instructure_links/validateURL';
import UrlPanel from '../../shared/Upload/UrlPanel';
import { instuiPopupMountNodeFn } from '../../../../util/fullscreenHelpers';
export default function ImageOptionsTray(props) {
  const {
    imageOptions,
    onEntered,
    onExited,
    onRequestClose,
    onSave,
    open,
    isIconMaker
  } = props;
  const {
    naturalHeight,
    naturalWidth,
    isLinked
  } = imageOptions;
  const currentHeight = imageOptions.appliedHeight || naturalHeight;
  const currentWidth = imageOptions.appliedWidth || naturalWidth;
  const [url, setUrl] = useState(imageOptions.url);
  const [showUrlField, setShowUrlField] = useState(false);
  const [altText, setAltText] = useState(imageOptions.altText);
  const [isDecorativeImage, setIsDecorativeImage] = useState(imageOptions.isDecorativeImage);
  const [displayAs, setDisplayAs] = useState('embed');
  const [imageSize, setImageSize] = useState(imageOptions.imageSize);
  const [imageHeight, setImageHeight] = useState(currentHeight);
  const [imageWidth, setImageWidth] = useState(currentWidth);
  const dimensionsState = useDimensionsState(imageOptions, {
    minHeight: MIN_HEIGHT,
    minWidth: MIN_WIDTH,
    minPercentage: MIN_PERCENTAGE
  });
  const [altHasError, setAltHasError] = useState(false);
  const [urlHasError, setUrlHasError] = useState(false);
  const [dimensionsHasError, setDimensionsHasError] = useState(false);
  const urlRef = useRef(null);
  const altRef = useRef(null);
  const dimensionsRef = useRef(null);
  useEffect(() => {
    setUrlHasError(showUrlField && url === '');
    setAltHasError(displayAs === 'embed' && !isDecorativeImage && altText === '');
    setDimensionsHasError(imageSize === CUSTOM && !dimensionsState?.isValid);
  }, [isDecorativeImage, altText, url, displayAs, showUrlField, imageSize, dimensionsState?.isValid]);
  function handleUrlChange(newUrl) {
    setUrl(newUrl);
  }
  function handleAltTextChange(event) {
    setAltText(event.target.value);
  }
  function handleIsDecorativeChange(event) {
    setIsDecorativeImage(event.target.checked);
  }
  function handleDisplayAsChange(event) {
    setDisplayAs(event.target.value);
  }
  function handleImageSizeChange(_e, selectedOption) {
    setImageSize(selectedOption.value);
    if (selectedOption.value === CUSTOM) {
      setImageHeight(currentHeight);
      setImageWidth(currentWidth);
    } else {
      const {
        height,
        width
      } = scaleToSize(selectedOption.value, naturalWidth, naturalHeight);
      setImageHeight(height);
      setImageWidth(width);
    }
  }
  function handleSave(event) {
    event.preventDefault();
    if (urlHasError || altHasError || dimensionsHasError) {
      if (altHasError) {
        altRef?.current?.focus();
      }
      if (urlHasError) {
        urlRef?.current?.focus();
      }
      if (dimensionsHasError) {
        dimensionsRef?.current?.focus();
      }
      return;
    }
    const savedAltText = isDecorativeImage ? '' : altText;
    let appliedHeight = imageHeight;
    let appliedWidth = imageWidth;
    if (imageSize === CUSTOM) {
      if (dimensionsState.usePercentageUnits) {
        appliedHeight = `${dimensionsState.percentage}%`;
        appliedWidth = `${dimensionsState.percentage}%`;
      } else {
        appliedHeight = dimensionsState.height;
        appliedWidth = dimensionsState.width;
      }
    }
    onSave({
      url,
      altText: savedAltText,
      appliedHeight,
      appliedWidth,
      displayAs,
      isDecorativeImage
    });
  }
  useEffect(() => {
    if (isIconMaker) {
      setShowUrlField(false);
      return;
    }
    let isValidURL;
    try {
      isValidURL = validateURL(url);
    } catch (error) {
      isValidURL = false;
    } finally {
      setShowUrlField(isValidURL ? isExternalUrl(url) : true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  const messagesForSize = [];
  if (imageSize !== CUSTOM) {
    messagesForSize.push({
      text: formatMessage('{width} x {height}px', {
        height: imageHeight,
        width: imageWidth
      }),
      type: 'hint'
    });
  }
  const trayLabel = isIconMaker ? formatMessage('Icon Options Tray') : formatMessage('Image Options Tray');
  const trayHeading = isIconMaker ? formatMessage('Icon Options') : formatMessage('Image Options');
  return /*#__PURE__*/React.createElement(Tray, {
    "data-mce-component": true,
    label: trayLabel,
    mountNode: instuiPopupMountNodeFn,
    onDismiss: onRequestClose,
    onEntered: onEntered,
    onExited: onExited,
    open: open,
    placement: "end",
    shouldCloseOnDocumentClick: true,
    shouldContainFocus: true,
    shouldReturnFocus: true
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
  }, trayHeading)), /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(CloseButton, {
    color: "primary",
    onClick: onRequestClose,
    screenReaderLabel: formatMessage('Close')
  })))), /*#__PURE__*/React.createElement(Flex.Item, {
    as: "form",
    shouldGrow: true,
    margin: "none",
    shouldShrink: true
  }, /*#__PURE__*/React.createElement(Flex, {
    justifyItems: "space-between",
    direction: "column",
    height: "100%"
  }, /*#__PURE__*/React.createElement(Flex, {
    direction: "column"
  }, showUrlField && /*#__PURE__*/React.createElement(Flex.Item, {
    padding: "small"
  }, /*#__PURE__*/React.createElement(UrlPanel, {
    fileUrl: url,
    urlRef: urlRef,
    setFileUrl: handleUrlChange,
    urlHasError: urlHasError
  })), /*#__PURE__*/React.createElement(ImageOptionsForm, {
    id: "image-options-form",
    imageSize: imageSize,
    displayAs: displayAs,
    isDecorativeImage: isDecorativeImage,
    altText: altText,
    isLinked: isLinked,
    dimensionsState: dimensionsState,
    handleAltTextChange: handleAltTextChange,
    handleIsDecorativeChange: handleIsDecorativeChange,
    handleDisplayAsChange: handleDisplayAsChange,
    handleImageSizeChange: handleImageSizeChange,
    messagesForSize: messagesForSize,
    isIconMaker: isIconMaker,
    altHasError: altHasError,
    altRef: altRef,
    dimensionsRef: dimensionsRef
  })), /*#__PURE__*/React.createElement(Flex.Item, {
    background: "secondary",
    borderWidth: "small none none none",
    padding: "small medium",
    textAlign: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleSave,
    color: "primary"
  }, formatMessage('Done')))))));
}
ImageOptionsTray.propTypes = {
  imageOptions: shape({
    altText: string.isRequired,
    appliedHeight: number,
    appliedWidth: number,
    isDecorativeImage: bool.isRequired,
    isLinked: bool,
    naturalHeight: number.isRequired,
    naturalWidth: number.isRequired
  }).isRequired,
  onEntered: func,
  onExited: func,
  onRequestClose: func.isRequired,
  onSave: func.isRequired,
  open: bool.isRequired,
  isIconMaker: bool
};
ImageOptionsTray.defaultProps = {
  onEntered: null,
  onExited: null,
  isIconMaker: false
};