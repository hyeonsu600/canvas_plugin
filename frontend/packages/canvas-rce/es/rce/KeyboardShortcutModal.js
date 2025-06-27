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

import React from 'react';
import { bool, func } from 'prop-types';
import { Heading } from '@instructure/ui-heading';
import { Text } from '@instructure/ui-text';
import { Table } from '@instructure/ui-table';
import { Modal } from '@instructure/ui-modal';
import { CloseButton } from '@instructure/ui-buttons';
import { View } from '@instructure/ui-view';
import formatMessage from '../format-message';
import { determineOSDependentKey } from './userOS';
import { instuiPopupMountNodeFn } from '../util/fullscreenHelpers';
import { ScreenReaderContent } from '@instructure/ui-a11y-content';
export default function KeyboardShortcutModal(props) {
  const OSKey = determineOSDependentKey();
  return /*#__PURE__*/React.createElement(Modal, {
    "data-testid": "RCE_KeyboardShortcutModal",
    "data-mce-component": true,
    label: formatMessage('Keyboard Shortcuts'),
    mountNode: instuiPopupMountNodeFn,
    open: props.open,
    shouldCloseOnDocumentClick: true,
    shouldReturnFocus: true,
    size: "auto",
    onClose: props.onClose,
    onExited: props.onExited,
    onDismiss: props.onDismiss
  }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(CloseButton, {
    placement: "end",
    offset: "medium",
    color: "primary",
    onClick: props.onDismiss,
    screenReaderLabel: formatMessage('Close')
  }), /*#__PURE__*/React.createElement(Heading, null, formatMessage('Keyboard Shortcuts'))), /*#__PURE__*/React.createElement(Modal.Body, null, /*#__PURE__*/React.createElement(View, {
    as: "div",
    padding: "x-small xx-large large x-large"
  }, /*#__PURE__*/React.createElement(Table, {
    margin: "small",
    caption: formatMessage('Keyboard Shortcuts')
  }, /*#__PURE__*/React.createElement(Table.Head, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.ColHeader, {
    id: "shortcut_header"
  }, /*#__PURE__*/React.createElement(ScreenReaderContent, null, formatMessage('Shortcut'))), /*#__PURE__*/React.createElement(Table.ColHeader, {
    id: "description_header"
  }, /*#__PURE__*/React.createElement(ScreenReaderContent, null, formatMessage('Description'))))), /*#__PURE__*/React.createElement(Table.Body, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Text, {
    weight: "bold"
  }, OSKey, "+F8")), /*#__PURE__*/React.createElement(Table.Cell, null, formatMessage('Open this keyboard shortcuts dialog'))), /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Text, {
    weight: "bold"
  }, formatMessage('SHIFT+Arrows'))), /*#__PURE__*/React.createElement(Table.Cell, null, formatMessage('Highlight an element to activate the element options toolbar'))), /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Text, {
    weight: "bold"
  }, "CTRL+F9")), /*#__PURE__*/React.createElement(Table.Cell, null, formatMessage('Focus element options toolbar'))), /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Text, {
    weight: "bold"
  }, OSKey, "+F9")), /*#__PURE__*/React.createElement(Table.Cell, null, formatMessage("Go to the editor's menubar"))), /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Text, {
    weight: "bold"
  }, OSKey, "+F10")), /*#__PURE__*/React.createElement(Table.Cell, null, formatMessage("Go to the editor's toolbar"))), /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Text, {
    weight: "bold"
  }, "ESC")), /*#__PURE__*/React.createElement(Table.Cell, null, formatMessage('Close a menu or dialog. Also returns you to the editor area'))), /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Text, {
    weight: "bold"
  }, formatMessage('TAB/Arrows'))), /*#__PURE__*/React.createElement(Table.Cell, null, formatMessage('Navigate through the menu or toolbar'))))), /*#__PURE__*/React.createElement(View, {
    as: "p",
    padding: "large 0 0 0",
    margin: "0 0 0 small"
  }, formatMessage('Other editor shortcuts may be found at'), ' ', /*#__PURE__*/React.createElement("a", {
    href: "https://www.tiny.cloud/docs/advanced/keyboard-shortcuts/",
    target: "rcekbshortcut"
  }, "https://www.tiny.cloud/docs/advanced/keyboard-shortcuts/")))));
}
KeyboardShortcutModal.propTypes = {
  open: bool.isRequired,
  onClose: func,
  onDismiss: func.isRequired,
  onExited: func
};