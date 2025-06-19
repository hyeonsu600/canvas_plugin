import _pt from "prop-types";
/*
 * Copyright (C) 2022 - present Instructure, Inc.
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
import { Modal } from '@instructure/ui-modal';
import { BaseButton, CloseButton } from '@instructure/ui-buttons';
import { Heading } from '@instructure/ui-heading';
import { Table } from '@instructure/ui-table';
import formatMessage from '../../../../format-message';
import { instuiPopupMountNodeFn } from '../../../../util/fullscreenHelpers';
const renderBody = (headers, rows) => {
  return /*#__PURE__*/React.createElement(Table, {
    caption: formatMessage('Word Count')
  }, /*#__PURE__*/React.createElement(Table.Head, null, /*#__PURE__*/React.createElement(Table.Row, null, headers.map(({
    id,
    getLabel
  }) => /*#__PURE__*/React.createElement(Table.ColHeader, {
    key: id,
    id: id
  }, getLabel())))), /*#__PURE__*/React.createElement(Table.Body, null, rows.map(({
    label,
    documentCount,
    selectionCount
  }) => /*#__PURE__*/React.createElement(Table.Row, {
    key: label
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    key: "label"
  }, label), /*#__PURE__*/React.createElement(Table.Cell, {
    key: "document"
  }, documentCount), /*#__PURE__*/React.createElement(Table.Cell, {
    key: "selection"
  }, selectionCount)))));
};
export const WordCountModal = ({
  headers,
  rows,
  onDismiss
}) => {
  return /*#__PURE__*/React.createElement(Modal, {
    label: formatMessage('Word Count'),
    mountNode: instuiPopupMountNodeFn(),
    open: true,
    "data-mce-component": true
  }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(CloseButton, {
    placement: "end",
    offset: "medium",
    color: "primary",
    onClick: onDismiss,
    screenReaderLabel: formatMessage('Close')
  }), /*#__PURE__*/React.createElement(Heading, null, formatMessage('Word Count'))), /*#__PURE__*/React.createElement(Modal.Body, {
    padding: "x-large"
  }, renderBody(headers, rows)), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(BaseButton, {
    onClick: onDismiss,
    "data-testid": "footer-close-button",
    color: "primary"
  }, formatMessage('Close'))));
};
WordCountModal.propTypes = {
  headers: _pt.array.isRequired,
  rows: _pt.array.isRequired,
  onDismiss: _pt.func.isRequired
};