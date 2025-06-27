/*
 * Copyright (C) 2021 - present Instructure, Inc.
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
import { Header } from './Header';
import { ShapeSection } from './ShapeSection';
import { ColorSection } from './ColorSection';
import { TextSection } from './TextSection';
import { ImageSection } from './ImageSection';
export const CreateIconMakerForm = ({
  settings,
  dispatch,
  editor,
  editing,
  allowNameChange,
  nameRef,
  canvasOrigin
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    settings: settings,
    onChange: dispatch,
    allowNameChange: allowNameChange,
    nameRef: nameRef,
    editing: editing
  }), /*#__PURE__*/React.createElement(ShapeSection, {
    settings: settings,
    onChange: dispatch
  }), /*#__PURE__*/React.createElement(ColorSection, {
    settings: settings,
    onChange: dispatch
  }), /*#__PURE__*/React.createElement(TextSection, {
    settings: settings,
    onChange: dispatch
  }), /*#__PURE__*/React.createElement(ImageSection, {
    editor: editor,
    settings: settings,
    onChange: dispatch,
    editing: editing,
    canvasOrigin: canvasOrigin
  }));
};