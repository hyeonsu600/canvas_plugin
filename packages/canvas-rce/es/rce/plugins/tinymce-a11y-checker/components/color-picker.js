/*
 * Copyright (C) 2018 - present Instructure, Inc.
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
import { ColorWrap, Saturation, Hue, Alpha } from 'react-color/lib/components/common';
import Pointer from './pointer';
import PointerCircle from 'react-color/lib/components/photoshop/PhotoshopPointerCircle';
function ColorPicker(props) {
  return /*#__PURE__*/React.createElement("div", {
    "data-testid": props['data-testid']
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Saturation, Object.assign({
    "data-testid": "a11y-color-picker-saturation"
  }, props, {
    pointer: PointerCircle
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Hue, Object.assign({
    "data-testid": "a11y-color-picker-hue"
  }, props, {
    pointer: Pointer
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Alpha, Object.assign({
    "data-testid": "a11y-color-picker-alpha"
  }, props, {
    pointer: Pointer
  }))));
}
export default ColorWrap(ColorPicker);