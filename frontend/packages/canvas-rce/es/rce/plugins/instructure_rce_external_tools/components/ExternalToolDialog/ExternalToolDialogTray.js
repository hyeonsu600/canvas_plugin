import _pt from "prop-types";
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
import { Tray } from '@instructure/ui-tray';
import { View } from '@instructure/ui-view';
import { Flex } from '@instructure/ui-flex';
import { Heading } from '@instructure/ui-heading';
import { CloseButton } from '@instructure/ui-buttons';
import formatMessage from '../../../../../format-message';
export function ExternalToolDialogTray(props) {
  const {
    label,
    onCloseButton,
    name,
    children,
    ...extraProps
  } = props;
  const padding = '0';
  return /*#__PURE__*/React.createElement(Tray, Object.assign({
    label: label,
    onDismiss: onCloseButton,
    placement: "end",
    size: "regular"
  }, extraProps), /*#__PURE__*/React.createElement(View, {
    as: "div",
    padding: padding,
    position: "absolute",
    insetBlockStart: "0",
    insetBlockEnd: "0",
    insetInlineStart: "0",
    insetInlineEnd: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Flex, {
    as: "div",
    padding: "small"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    shouldGrow: true
  }, /*#__PURE__*/React.createElement(Heading, null, name)), /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(CloseButton, {
    onClick: onCloseButton,
    size: "small",
    screenReaderLabel: formatMessage('Close')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(View, {
    as: "div",
    width: "100%",
    height: "100%"
  }, children)))));
}
ExternalToolDialogTray.propTypes = {
  onCloseButton: _pt.func,
  name: _pt.string.isRequired
};