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

import React, { useEffect } from 'react';
import { Flex } from '@instructure/ui-flex';
import { TextInput } from '@instructure/ui-text-input';
import formatMessage from '../../../../../format-message';
import { TextArea } from '@instructure/ui-text-area';
import { Tooltip } from '@instructure/ui-tooltip';
import { View } from '@instructure/ui-view';
import { IconButton } from '@instructure/ui-buttons';
import { Checkbox } from '@instructure/ui-checkbox';
import { IconQuestionLine } from '@instructure/ui-icons';
import { FormFieldLabel } from '@instructure/ui-form-field';
import { decode } from '../../svg/utils';
import useDebouncedValue from '../../utils/useDebouncedValue';
const getAltTextLabel = () => /*#__PURE__*/React.createElement(Flex, {
  alignItems: "center",
  margin: "0 0 small 0"
}, /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(FormFieldLabel, null, formatMessage('Alt Text'))), /*#__PURE__*/React.createElement(Flex.Item, {
  margin: "0 0 0 xx-small"
}, /*#__PURE__*/React.createElement(Tooltip, {
  on: ['hover', 'focus'],
  placement: "top",
  renderTip: /*#__PURE__*/React.createElement(View, {
    display: "block",
    id: "alt-text-label-tooltip",
    maxWidth: "14rem"
  }, formatMessage('Used by screen readers to describe the content of an image'))
}, /*#__PURE__*/React.createElement(IconButton, {
  renderIcon: IconQuestionLine,
  withBackground: false,
  withBorder: false,
  size: "small",
  screenReaderLabel: formatMessage('Toggle tooltip')
}))));
export const Header = ({
  settings,
  onChange,
  allowNameChange,
  nameRef,
  editing
}) => {
  const originalName = settings.originalName;
  const [name, setName] = useDebouncedValue(settings.name, n => onChange({
    name: n
  }));
  const [alt, setAlt] = useDebouncedValue(settings.alt, a => onChange({
    alt: a
  }));
  useEffect(() => {
    if (!allowNameChange) onChange({
      name: originalName
    });
  }, [allowNameChange, onChange, originalName]);
  return /*#__PURE__*/React.createElement(Flex, {
    direction: "column",
    padding: "small small 0"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    padding: "small"
  }, /*#__PURE__*/React.createElement(TextInput, {
    id: "icon-name",
    "data-testid": "icon-name",
    renderLabel: formatMessage('Name'),
    placeholder: formatMessage('untitled'),
    interaction: allowNameChange ? 'enabled' : 'disabled',
    onChange: setName,
    value: name ? decode(name) : '',
    inputRef: ref => {
      if (nameRef) nameRef.current = ref;
    }
  })), !editing && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex.Item, {
    padding: "small"
  }, getAltTextLabel(), /*#__PURE__*/React.createElement(TextArea, {
    label: "",
    "aria-label": formatMessage('Alt Text'),
    id: "icon-alt-text",
    height: "4rem",
    disabled: settings.isDecorative,
    onChange: setAlt,
    placeholder: formatMessage('(Describe the icon)'),
    resize: "vertical",
    value: alt
  })), /*#__PURE__*/React.createElement(Flex.Item, {
    padding: "small"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: settings.isDecorative,
    label: formatMessage('Decorative Icon'),
    onChange: () => onChange({
      isDecorative: !settings.isDecorative
    })
  }))));
};