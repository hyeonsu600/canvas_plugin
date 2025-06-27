/*
 * Copyright (C) 2023 - present Instructure, Inc.
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

import { performTextEditActionOnTextarea } from '../../../../util/textarea-editing-util';

/**
 * Inserts text into a textarea for editing LaTeX, handling selection and focus management.
 *
 * Ultimately, this should be refactored out into a React component.
 *
 * @param textarea
 * @param insertionText
 */
export function insertTextIntoLatexTextarea(textarea, insertionText) {
  var _textarea$value, _textarea$selectionSt, _textarea$selectionEn;
  const currentText = (_textarea$value = textarea?.value) !== null && _textarea$value !== void 0 ? _textarea$value : '';
  const selStart = (_textarea$selectionSt = textarea?.selectionStart) !== null && _textarea$selectionSt !== void 0 ? _textarea$selectionSt : currentText.length;
  const selEnd = (_textarea$selectionEn = textarea?.selectionEnd) !== null && _textarea$selectionEn !== void 0 ? _textarea$selectionEn : selStart;
  textarea.focus();
  planInsertTextIntoLatexTextarea({
    insertionText,
    currentText,
    selStart,
    selEnd
  }).forEach(action => performTextEditActionOnTextarea(textarea, action));
}
export function planInsertTextIntoLatexTextarea(args) {
  const {
    insertionText
  } = args;
  const {
    currentText,
    selStart,
    selEnd
  } = args;
  const selectedText = currentText.substring(selStart, selEnd);

  // Look for parameters ([] or {}) in the command text, because we'll want to wrap the current selection in the
  // command in that case
  const singleParamParts = insertionText.match(
  // Match both [] and {}
  /^(.*?\{)\s*(}.*)$|^(.*?\[)\s*(].*)$/);
  const doubleParamParts = insertionText.match(
  // Match two sets of [] and/or {}
  /^(?:(.*?\{)\s*(}.*?)|(.*?\[)\s*(].*?))(?:(.*?\{)\s*(}.*?)|(.*?\[)\s*(].*))$/
  //   1         2      3         4         5         6      7         8
  );
  if (doubleParamParts) {
    var _ref, _m$, _ref2, _m$2, _ref3, _m$3, _ref4, _m$4;
    const m = doubleParamParts;
    const before = (_ref = (_m$ = m[1]) !== null && _m$ !== void 0 ? _m$ : m[3]) !== null && _ref !== void 0 ? _ref : '';
    const middle = ((_ref2 = (_m$2 = m[2]) !== null && _m$2 !== void 0 ? _m$2 : m[4]) !== null && _ref2 !== void 0 ? _ref2 : '') + ((_ref3 = (_m$3 = m[5]) !== null && _m$3 !== void 0 ? _m$3 : m[7]) !== null && _ref3 !== void 0 ? _ref3 : '');
    const after = (_ref4 = (_m$4 = m[6]) !== null && _m$4 !== void 0 ? _m$4 : m[8]) !== null && _ref4 !== void 0 ? _ref4 : '';
    if (selectedText.length) {
      // When there is a selection with a double-parameter command, the selection should fill the first parameter
      // and the cursor should be be placed in the second parameter
      return [{
        action: 'insert',
        text: before + selectedText + middle
      }, {
        action: 'wrapSelection',
        before: '',
        after
      }];
    } else {
      return [{
        action: 'wrapSelection',
        before,
        after: middle + after
      }];
    }
  } else if (singleParamParts) {
    var _singleParamParts$, _singleParamParts$2;
    const before = (_singleParamParts$ = singleParamParts[1]) !== null && _singleParamParts$ !== void 0 ? _singleParamParts$ : singleParamParts[3];
    const after = (_singleParamParts$2 = singleParamParts[2]) !== null && _singleParamParts$2 !== void 0 ? _singleParamParts$2 : singleParamParts[4];
    if (selectedText.length) {
      // When there is a selection and only a single parameter, the selection should be used as the parameter
      // and the cursor placed at the end of the command
      return [{
        action: 'insert',
        text: before + selectedText + after
      }];
    } else {
      // When there is no selection and any number of parameters, the cursor should be placed within the
      // first parameter
      return [{
        action: 'wrapSelection',
        before,
        after
      }];
    }
  } else {
    // If there aren't parameters, the command should replace the selection, and the cursor should be placed
    // and the end of the command
    return [{
      action: 'insert',
      text: insertionText
    }];
  }
}