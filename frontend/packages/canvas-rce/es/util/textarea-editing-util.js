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

import * as textFieldEdit from 'text-field-edit';
import { assertNever } from './assertNever';

/**
 * Represents a subset of the editing actions that can be taken on a <textarea> using the text-field-edit library.
 *
 * This is used to allow decoupling logic that requires textarea editing from the actual commands, because it's tricky
 * to test code that uses the 'text-field-edit' library directly, since it relies on document.execCommand().
 *
 * For production code, actions can be executed on a <textarea> using performTextEditActionOnTextarea
 * For testing, actions can be executed on a string using performTextEditActionsOnString
 */

/**
 * Executes the given text edit actions on a <textarea>
 */
export function performTextEditActionOnTextarea(textarea, editAction) {
  var _editAction$before, _editAction$after;
  switch (editAction.action) {
    case 'insert':
      return textFieldEdit.insert(textarea, editAction.text);
    case 'wrapSelection':
      return textFieldEdit.wrapSelection(textarea, (_editAction$before = editAction.before) !== null && _editAction$before !== void 0 ? _editAction$before : '', (_editAction$after = editAction.after) !== null && _editAction$after !== void 0 ? _editAction$after : '');
    default:
      assertNever(editAction);
  }
}

/**
 * Executes the given text edit actions on an object representing the important state of textarea editing,
 * the current text, selection start, and selection end.
 */
export function performTextEditActionsOnString(args) {
  let {
    text: currentText,
    selStart,
    selEnd
  } = args;
  args.actions.forEach(action => {
    switch (action.action) {
      case 'insert':
        currentText = currentText.substring(0, selStart) + action.text + currentText.substring(selEnd);
        selStart += action.text.length;
        selEnd = selStart;
        break;
      case 'wrapSelection':
        {
          var _action$before, _action$after;
          const before = (_action$before = action.before) !== null && _action$before !== void 0 ? _action$before : '';
          const after = (_action$after = action.after) !== null && _action$after !== void 0 ? _action$after : '';
          currentText = currentText.substring(0, selStart) + before + currentText.substring(selStart, selEnd) + after + currentText.substring(selEnd);
          selStart += before.length;
          selEnd += before.length;
        }
        break;
      default:
        assertNever(action);
    }
  });
  return {
    text: currentText,
    selStart,
    selEnd
  };
}