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

import React, { useState } from 'react';
import { Text } from '@instructure/ui-text';
import { View } from '@instructure/ui-view';
import ExpandoText from '../util/ExpandoText';
import formatMessage from '../../../../../format-message';
import { css, StyleSheet } from 'aphrodite';
export default function ExternalToolSelectionItem(props) {
  const [focused, setFocused] = useState(false);
  const {
    title,
    image,
    description,
    onAction
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {
    as: "span",
    withFocusOutline: focused,
    className: css(styles.appButton),
    padding: "xxx-small xxx-small xx-small",
    borderRadius: "medium",
    role: "button",
    position: "relative",
    onClick: () => {
      onAction();
    },
    onKeyDown: e => {
      if (e.keyCode === 13 || e.keyCode === 32) {
        onAction();
      }
    },
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    tabIndex: 0
  }, /*#__PURE__*/React.createElement("span", null, image != null && /*#__PURE__*/React.createElement("img", {
    src: image,
    width: "28",
    height: "28",
    alt: ""
  })), /*#__PURE__*/React.createElement(View, {
    as: "span",
    className: css(styles.appTitle),
    margin: "none none none small"
  }, /*#__PURE__*/React.createElement(Text, {
    "aria-label": formatMessage('Open {title} application', {
      title
    }),
    weight: "bold"
  }, title))), renderDescription(description));
  function renderDescription(desc) {
    if (desc == null || desc === '') return null;
    return /*#__PURE__*/React.createElement(View, {
      as: "span",
      margin: "none none none large",
      display: "block"
    }, /*#__PURE__*/React.createElement(ExpandoText, {
      text: desc,
      title: title
    }));
  }
}
ExternalToolSelectionItem.propTypes = {
  title: _pt.string.isRequired,
  image: _pt.oneOfType([_pt.string, _pt.oneOf([null])]),
  onAction: _pt.func.isRequired,
  description: _pt.oneOfType([_pt.string, _pt.oneOf([null])])
};
export const styles = StyleSheet.create({
  appTitle: {
    verticalAlign: 'middle'
  },
  appButton: {
    cursor: 'pointer'
  }
});