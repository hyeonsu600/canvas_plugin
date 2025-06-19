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

import { countContent } from './countContent';
import formatMessage from '../../../../format-message';
export const HEADERS = [{
  id: 'count',
  getLabel: () => formatMessage('Count')
}, {
  id: 'document',
  getLabel: () => formatMessage('Document')
}, {
  id: 'selection',
  getLabel: () => formatMessage('Selection')
}];
const ROW_LABELS = [['words', () => formatMessage('Words')], ['chars-no-spaces', () => formatMessage('Characters (no spaces)')], ['chars', () => formatMessage('Characters')]];
export const generateRows = ed => {
  return ROW_LABELS.map(([category, getLabel]) => ({
    label: getLabel(),
    documentCount: countContent(ed, 'body', category),
    selectionCount: countContent(ed, 'selection', category)
  }));
};