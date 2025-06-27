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
// Base content item type
export default class BaseLinkContentItem extends RceLti13ContentItem {
  toHtmlString() {
    if (this.iframe?.src != null) {
      return this.iframeTag();
    } else {
      return this.anchorTag(this.linkBody());
    }
  }
  linkText() {
    var _this$buildText$trim, _this$buildTitle$trim;
    const text = (_this$buildText$trim = this.buildText()?.trim()) !== null && _this$buildText$trim !== void 0 ? _this$buildText$trim : '';
    const title = (_this$buildTitle$trim = this.buildTitle()?.trim()) !== null && _this$buildTitle$trim !== void 0 ? _this$buildTitle$trim : '';
    return text.length > 0 ? text : title.length > 0 ? title : undefined;
  }
  linkBody() {
    if (this.thumbnail) {
      return this.linkThumbnail();
    }
    return this.linkText();
  }
  buildText() {
    return this.context.selection || this.json.text;
  }
  buildUrl() {
    return this.json.url;
  }
  buildTitle() {
    return this.json.title;
  }
  get icon() {
    return this.json.icon;
  }
  get thumbnail() {
    return this.json.thumbnail;
  }
  get iframe() {
    return this.json.iframe;
  }
  get custom() {
    return this.json.custom;
  }
  get lookup_uuid() {
    return this.json.lookup_uuid;
  }
}