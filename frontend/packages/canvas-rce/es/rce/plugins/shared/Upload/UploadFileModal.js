/*
 * Copyright (C) 2020 - present Instructure, Inc.
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

import React, { Suspense, useState } from 'react';
import { arrayOf, bool, func, number, object, oneOf, oneOfType, string } from 'prop-types';
import { Modal } from '@instructure/ui-modal';
import { Button, CloseButton } from '@instructure/ui-buttons';
import { Heading } from '@instructure/ui-heading';
import { Spinner } from '@instructure/ui-spinner';
import { Tabs } from '@instructure/ui-tabs';
import { ToggleDetails } from '@instructure/ui-toggle-details';
import formatMessage from '../../../../format-message';
import { instuiPopupMountNodeFn } from '../../../../util/fullscreenHelpers';
import RceApiSource from '../../../../rcs/api';
import ImageOptionsForm from '../ImageOptionsForm';
import UsageRightsSelectBox from './UsageRightsSelectBox';
import { View } from '@instructure/ui-view';
import { UploadCanvasPanelIds, CanvasPanelTitles } from '../canvasContentUtils';
const CanvasContentPanel = /*#__PURE__*/React.lazy(() => import('./CanvasContentPanel'));
const ComputerPanel = /*#__PURE__*/React.lazy(() => import('./ComputerPanel'));
const UrlPanel = /*#__PURE__*/React.lazy(() => import('./UrlPanel'));
function shouldBeDisabled({
  fileUrl,
  theFile,
  error
}, selectedPanel, usageRightNotSet) {
  if (error || usageRightNotSet && selectedPanel === 'COMPUTER') {
    return true;
  }
  switch (selectedPanel) {
    case 'COMPUTER':
      return !theFile || theFile.error;
    case 'URL':
      return !fileUrl;
    default:
      if (UploadCanvasPanelIds.includes(selectedPanel)) return !fileUrl;
      return false;
    // When in doubt, don't disable (but we shouldn't get here either)
  }
}
const UploadFileModal = /*#__PURE__*/React.forwardRef(({
  preselectedFile,
  editor,
  contentProps,
  trayProps,
  canvasOrigin,
  onSubmit,
  onDismiss,
  panels,
  label,
  accept,
  modalBodyWidth,
  modalBodyHeight,
  requireA11yAttributes = true,
  forBlockEditorUse = false,
  uploading = false
}, ref) => {
  const [theFile, setFile] = useState(preselectedFile);
  const [error, setError] = useState(null);
  const [fileUrl, setFileUrl] = useState('');
  const [selectedPanel, setSelectedPanel] = useState(panels[0]);
  const [usageRightsState, setUsageRightsState] = React.useState({
    usageRight: 'choose',
    ccLicense: '',
    copyrightHolder: ''
  });

  // Image options props
  const [altText, setAltText] = useState('');
  const [isDecorativeImage, setIsDecorativeImage] = useState(false);
  const [displayAs, setDisplayAs] = useState('embed');
  // even though usage rights might be required by the course, canvas has no place
  // on the user to store it. Only Group and Course.
  const requiresUsageRights = contentProps?.session?.usageRightsRequired && /(?:course|group)/.test(trayProps.contextType);
  function handleAltTextChange(event) {
    setAltText(event.target.value);
  }
  function handleIsDecorativeChange(event) {
    setIsDecorativeImage(event.target.checked);
  }
  function handleDisplayAsChange(event) {
    setDisplayAs(event.target.value);
  }
  const handleRequestTabChange = index => {
    setSelectedPanel(panels[index]);
    setFileUrl('');
  };
  const submitDisabled = shouldBeDisabled({
    fileUrl,
    theFile,
    error
  }, selectedPanel, requiresUsageRights && usageRightsState.usageRight === 'choose');

  // Load the necessary session values, if not already loaded
  const loadSession = contentProps.loadSession;
  React.useEffect(() => {
    loadSession();
  }, [loadSession]);
  const source = trayProps.source || new RceApiSource({
    jwt: trayProps.jwt,
    refreshToken: trayProps.refreshToken,
    host: trayProps.host,
    canvasOrigin
  });
  if (forBlockEditorUse && !['COMPUTER', 'URL'].includes(selectedPanel)) {
    requireA11yAttributes = false;
  }
  return /*#__PURE__*/React.createElement(Modal, {
    "data-mce-component": true,
    as: "form",
    label: label,
    mountNode: instuiPopupMountNodeFn,
    size: "large",
    overflow: "fit",
    onDismiss: onDismiss,
    onSubmit: e => {
      e.preventDefault();
      if (submitDisabled || uploading) {
        return false;
      }
      onSubmit(editor, accept, selectedPanel, {
        fileUrl,
        theFile,
        imageOptions: {
          altText,
          isDecorativeImage,
          displayAs
        },
        usageRights: usageRightsState
      }, contentProps, source, onDismiss);
    },
    open: true,
    shouldCloseOnDocumentClick: false,
    liveRegion: trayProps.liveRegion
  }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(CloseButton, {
    onClick: onDismiss,
    offset: "small",
    placement: "end",
    screenReaderLabel: formatMessage('Close')
  }), /*#__PURE__*/React.createElement(Heading, null, label)), /*#__PURE__*/React.createElement(Modal.Body, {
    ref: ref
  }, /*#__PURE__*/React.createElement(Tabs, {
    onRequestTabChange: (event, {
      index
    }) => handleRequestTabChange(index)
  }, panels.map(panel => {
    switch (panel) {
      case 'COMPUTER':
        return /*#__PURE__*/React.createElement(Tabs.Panel, {
          key: panel,
          renderTitle: function () {
            return formatMessage('Computer');
          },
          isSelected: selectedPanel === 'COMPUTER'
        }, /*#__PURE__*/React.createElement(Suspense, {
          fallback: /*#__PURE__*/React.createElement(Spinner, {
            renderTitle: formatMessage('Loading'),
            size: "large"
          })
        }, /*#__PURE__*/React.createElement(ComputerPanel, {
          theFile: theFile,
          setFile: setFile,
          setError: setError,
          label: label,
          accept: accept,
          bounds: {
            width: modalBodyWidth,
            height: modalBodyHeight
          }
        })));
      case 'URL':
        return /*#__PURE__*/React.createElement(Tabs.Panel, {
          key: panel,
          renderTitle: function () {
            return formatMessage('URL');
          },
          isSelected: selectedPanel === 'URL'
        }, /*#__PURE__*/React.createElement(Suspense, {
          fallback: /*#__PURE__*/React.createElement(Spinner, {
            renderTitle: formatMessage('Loading'),
            size: "large"
          })
        }, /*#__PURE__*/React.createElement(UrlPanel, {
          fileUrl: fileUrl,
          setFileUrl: setFileUrl
        })));
      default:
        if (UploadCanvasPanelIds.includes(panel)) {
          return /*#__PURE__*/React.createElement(Tabs.Panel, {
            key: panel,
            renderTitle: () => CanvasPanelTitles[panel],
            isSelected: selectedPanel === panel
          }, /*#__PURE__*/React.createElement(Suspense, {
            fallback: /*#__PURE__*/React.createElement(Spinner, {
              renderTitle: formatMessage('Loading'),
              size: "large"
            })
          }, /*#__PURE__*/React.createElement(CanvasContentPanel, {
            trayProps: trayProps,
            canvasOrigin: canvasOrigin,
            plugin: panel,
            setFileUrl: setFileUrl
          })));
        }
        return null;
    }
  })),
  // We shouldn't show the accordions until the session data is loaded.
  Object.keys(contentProps.session || {}).length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, selectedPanel === 'COMPUTER' && requiresUsageRights && /*#__PURE__*/React.createElement(View, {
    as: "div",
    role: "group",
    borderColor: "primary",
    borderWidth: "0 0 small 0",
    padding: "medium"
  }, /*#__PURE__*/React.createElement(ToggleDetails, {
    defaultExpanded: true,
    summary: /*#__PURE__*/React.createElement(Heading, {
      level: "h3"
    }, formatMessage('Usage Rights (required)'))
  }, /*#__PURE__*/React.createElement(UsageRightsSelectBox, {
    usageRightsState: usageRightsState,
    setUsageRightsState: setUsageRightsState,
    contextType: trayProps.contextType,
    contextId: trayProps.contextId,
    showMessage: false
  }))), /image/.test(accept) && requireA11yAttributes && /*#__PURE__*/React.createElement(View, {
    as: "div",
    role: "group",
    borderColor: "primary",
    borderWidth: "0 0 small 0",
    padding: "medium"
  }, /*#__PURE__*/React.createElement(ToggleDetails, {
    defaultExpanded: !requiresUsageRights,
    summary: /*#__PURE__*/React.createElement(Heading, {
      level: "h3"
    }, formatMessage('Attributes'))
  }, /*#__PURE__*/React.createElement(ImageOptionsForm, {
    id: "upload-file-form",
    altText: altText,
    isDecorativeImage: isDecorativeImage,
    displayAs: displayAs,
    handleAltTextChange: handleAltTextChange,
    handleIsDecorativeChange: handleIsDecorativeChange,
    handleDisplayAsChange: handleDisplayAsChange,
    hideDimensions: true,
    forBlockEditorUse: forBlockEditorUse
  }))))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onDismiss
  }, formatMessage('Close')), "\xA0", /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    type: "submit",
    disabled: submitDisabled || uploading
  }, uploading ? formatMessage('Submitting...') : formatMessage('Submit'))));
});
UploadFileModal.propTypes = {
  editor: object,
  contentProps: object,
  trayProps: object,
  canvasOrigin: string,
  onSubmit: func,
  onDismiss: func.isRequired,
  panels: arrayOf(oneOf(['COMPUTER', 'URL', ...UploadCanvasPanelIds])),
  label: string.isRequired,
  accept: oneOfType([arrayOf(string), string]),
  modalBodyWidth: number,
  modalBodyHeight: number,
  requireA11yAttributes: bool,
  forBlockEditorUse: bool,
  uploading: bool,
  preselectedFile: object // JS File
};
export default UploadFileModal;