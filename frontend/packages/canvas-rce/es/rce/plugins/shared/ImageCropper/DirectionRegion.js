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
import { ScreenReaderContent } from '@instructure/ui-a11y-content';
import formatMessage from '../../../../format-message';
export let Direction;
(function (Direction) {
  Direction[Direction["LEFT"] = 37] = "LEFT";
  Direction[Direction["UP"] = 38] = "UP";
  Direction[Direction["RIGHT"] = 39] = "RIGHT";
  Direction[Direction["DOWN"] = 40] = "DOWN";
  Direction[Direction["NONE"] = 0] = "NONE";
})(Direction || (Direction = {}));
const directionToWord = direction => {
  switch (direction) {
    case Direction.LEFT:
      return formatMessage('Left');
    case Direction.UP:
      return formatMessage('Up');
    case Direction.RIGHT:
      return formatMessage('Right');
    case Direction.DOWN:
      return formatMessage('Down');
    case Direction.NONE:
      return null;
  }
};
export const DirectionRegion = ({
  direction
}) => {
  const directionWord = directionToWord(direction);
  const directionMessage = directionWord ? formatMessage('Moving image to crop {directionWord}', {
    directionWord
  }) : '';
  return /*#__PURE__*/React.createElement(ScreenReaderContent, {
    "aria-live": "assertive",
    "aria-relevant": "all"
  }, directionMessage);
};
DirectionRegion.propTypes = {
  direction: _pt.oneOf([37, 38, 39, 40, 0]).isRequired
};