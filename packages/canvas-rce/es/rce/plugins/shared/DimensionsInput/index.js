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
import { bool, func, number, shape, string, object } from 'prop-types';
import { ScreenReaderContent } from '@instructure/ui-a11y-content';
import { FormFieldGroup } from '@instructure/ui-form-field';
import { IconLockLine, IconWarningSolid } from '@instructure/ui-icons';
import { Flex } from '@instructure/ui-flex';
import { Text } from '@instructure/ui-text';
import { RadioInput, RadioInputGroup } from '@instructure/ui-radio-input';
import formatMessage from '../../../../format-message';
import DimensionInput from './DimensionInput';
export { default as useDimensionsState } from './useDimensionsState';
const errorMessage = message => {
  return /*#__PURE__*/React.createElement(Flex, {
    gap: "xx-small",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(IconWarningSolid, {
    color: "error"
  }), /*#__PURE__*/React.createElement(Text, {
    color: "danger",
    size: "small"
  }, message));
};
const getMessage = (dimensionsState, minWidth, minHeight, minPercentage) => {
  let result = {
    text: formatMessage('Aspect ratio will be preserved'),
    type: 'hint'
  };
  if (dimensionsState.usePercentageUnits) {
    if (!dimensionsState.isNumeric) {
      result = {
        text: formatMessage('Percentage must be a number'),
        type: 'error'
      };
    } else if (!dimensionsState.isAtLeastMinimums) {
      result = {
        text: formatMessage('Percentage must be at least {percentage}%', {
          percentage: minPercentage
        }),
        type: 'error'
      };
    }
  } else if (!dimensionsState.isNumeric) {
    result = {
      text: formatMessage('Width and height must be numbers'),
      type: 'error'
    };
  } else if (!dimensionsState.isAtLeastMinimums) {
    result = {
      text: formatMessage('Pixels must be at least {width} x {height}px', {
        width: minWidth,
        height: minHeight
      }),
      type: 'error'
    };
  }
  return result;
};
export default function DimensionsInput(props) {
  const {
    dimensionsState,
    minHeight,
    minWidth,
    minPercentage,
    hidePercentage,
    dimensionsRef
  } = props;
  const handleDimensionTypeChange = e => {
    dimensionsState.setUsePercentageUnits(e.target.value === 'percentage');
  };
  const message = getMessage(dimensionsState, minWidth, minHeight, minPercentage);
  const secondaryMessage = {
    ...message,
    text: ''
  };
  const displayMessage = message => {
    if (!message) {
      return;
    }
    return /*#__PURE__*/React.createElement("div", {
      "data-testid": "message"
    }, message.type === 'error' ? errorMessage(message.text) : /*#__PURE__*/React.createElement(Text, {
      size: "small"
    }, message.text));
  };
  return /*#__PURE__*/React.createElement(Flex, {
    direction: "column"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    padding: "small"
  }, hidePercentage ? /*#__PURE__*/React.createElement(Text, {
    weight: "bold"
  }, formatMessage('Custom width and height (Pixels)')) : /*#__PURE__*/React.createElement(RadioInputGroup, {
    "data-testid": "dimension-type",
    name: "dimension-type",
    description: formatMessage('Dimension Type'),
    onChange: handleDimensionTypeChange,
    value: dimensionsState.usePercentageUnits ? 'percentage' : 'pixels'
  }, /*#__PURE__*/React.createElement(RadioInput, {
    label: formatMessage('Pixels'),
    value: "pixels"
  }), /*#__PURE__*/React.createElement(RadioInput, {
    label: formatMessage('Percentage'),
    value: "percentage"
  }))), /*#__PURE__*/React.createElement(Flex.Item, {
    padding: "small"
  }, /*#__PURE__*/React.createElement(FormFieldGroup, {
    description: /*#__PURE__*/React.createElement(ScreenReaderContent, null, formatMessage('Dimensions'))
  }, /*#__PURE__*/React.createElement(Flex, {
    alignItems: "start",
    direction: "row",
    "data-testid": "input-number-container"
  }, dimensionsState.usePercentageUnits ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex.Item, {
    shouldShrink: true,
    shouldGrow: true
  }, /*#__PURE__*/React.createElement(DimensionInput, {
    dimensionState: dimensionsState.percentageState,
    label: formatMessage('Percentage'),
    messages: [secondaryMessage],
    dimensionsRef: dimensionsRef
  })), /*#__PURE__*/React.createElement(Flex.Item, {
    padding: "x-small small"
  }, "%")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex.Item, {
    shouldShrink: true
  }, /*#__PURE__*/React.createElement(DimensionInput, {
    dimensionState: dimensionsState.widthState,
    label: formatMessage('Width'),
    minValue: minWidth,
    messages: [secondaryMessage],
    dimensionsRef: dimensionsRef
  })), /*#__PURE__*/React.createElement(Flex.Item, {
    padding: "x-small small"
  }, /*#__PURE__*/React.createElement(IconLockLine, null)), /*#__PURE__*/React.createElement(Flex.Item, {
    shouldShrink: true
  }, /*#__PURE__*/React.createElement(DimensionInput, {
    dimensionState: dimensionsState.heightState,
    label: formatMessage('Height'),
    minValue: minHeight,
    messages: [secondaryMessage]
  }))))), displayMessage(message)));
}
DimensionsInput.propTypes = {
  dimensionsState: shape({
    heightState: shape({
      addOffset: func.isRequired,
      inputValue: string.isRequired,
      setInputValue: func.isRequired
    }).isRequired,
    isNumeric: bool.isRequired,
    usePercentageUnits: bool.isRequired,
    setUsePercentageUnits: func.isRequired,
    widthState: shape({
      addOffset: func.isRequired,
      inputValue: string.isRequired,
      setInputValue: func.isRequired
    }).isRequired,
    percentageState: shape({
      addOffset: func.isRequired,
      inputValue: string.isRequired,
      setInputValue: func.isRequired
    }).isRequired
  }),
  minHeight: number.isRequired,
  minWidth: number.isRequired,
  minPercentage: number.isRequired,
  hidePercentage: bool,
  dimensionsRef: object
};
DimensionsInput.defaultProps = {
  hidePercentage: false
};