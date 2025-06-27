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

import React from 'react';
import formatMessage from '../../../../format-message';
import { Button, CloseButton } from '@instructure/ui-buttons';
import { Heading } from '@instructure/ui-heading';
import { Modal } from '@instructure/ui-modal';
const AIResponseModal = ({
  open,
  html,
  onClose,
  onInsert,
  onReplace
}) => {
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onDismiss: onClose,
    size: "medium",
    label: formatMessage('AI Response')
  }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(CloseButton, {
    onClick: onClose,
    placement: "end",
    offset: "medium",
    screenReaderLabel: formatMessage('Close')
  }), /*#__PURE__*/React.createElement(Heading, {
    level: "h3"
  }, "AI Response")), /*#__PURE__*/React.createElement(Modal.Body, null, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  })), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose,
    margin: "medium 0 0 0"
  }, formatMessage('Close')), /*#__PURE__*/React.createElement(Button, {
    onClick: onReplace,
    margin: "medium 0 0 medium"
  }, formatMessage('Replace')), /*#__PURE__*/React.createElement(Button, {
    onClick: onInsert,
    color: "primary",
    margin: "medium 0 0 medium"
  }, formatMessage('Insert'))));
};
AIResponseModal.propTypes = {
  open: _pt.bool.isRequired,
  html: _pt.string.isRequired,
  onClose: _pt.func.isRequired,
  onInsert: _pt.func.isRequired,
  onReplace: _pt.func.isRequired
};
export { AIResponseModal };