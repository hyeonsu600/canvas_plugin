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

import { RceLti13ContentItem } from '../RceLti13ContentItem';
export default class HtmlFragmentContentItem extends RceLti13ContentItem {
  constructor(json, context) {
    super(HtmlFragmentContentItem.type, json, context);
  }
  get html() {
    return this.json.html;
  }
  buildTitle() {
    return this.json.title;
  }
  buildText() {
    return this.json.text;
  }
  buildUrl() {
    return undefined;
  }
  toHtmlString() {
    // TinyMCE takes care of sanitizing this HTML string.
    // If using a target other than TinyMCE be sure to sanitize.
    return this.html;
  }
}
HtmlFragmentContentItem.type = 'html';