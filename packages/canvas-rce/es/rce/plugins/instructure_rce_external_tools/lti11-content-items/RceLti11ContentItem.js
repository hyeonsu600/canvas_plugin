/*
 * Copyright (C) 2015 - present Instructure, Inc.
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

import { externalToolsEnvFor } from '../ExternalToolsEnv';
import { emptyAsNull } from '../../../../util/string-util';
import { addParentFrameContextToUrl } from '../util/addParentFrameContextToUrl';
import tinymce from 'tinymce';
import { isStudioContentItemCustomJson, studioAttributesFrom, displayStyleFrom } from '../../shared/StudioLtiSupportUtils';
function maybeAddPx(value) {
  if (value == null) return undefined;
  const strVal = String(value).trim();
  if (/^\d+$/.test(strVal)) {
    return strVal + 'px';
  }
  return strVal;
}
export class RceLti11ContentItem {
  static fromJSON(contentItem, env = externalToolsEnvFor(tinymce.activeEditor)) {
    return new RceLti11ContentItem(contentItem, env);
  }
  constructor(contentItem, env = externalToolsEnvFor(tinymce.activeEditor)) {
    this.contentItem = void 0;
    this.env = void 0;
    this.contentItem = contentItem;
    this.env = env;
  }
  get text() {
    return this.contentItem.text;
  }
  get isLTI() {
    var _this$contentItem$med;
    return LTI_MIME_TYPES.includes((_this$contentItem$med = this.contentItem.mediaType) !== null && _this$contentItem$med !== void 0 ? _this$contentItem$med : '');
  }
  get isOverriddenForThumbnail() {
    return this.isLTI && this.contentItem.thumbnail && this.contentItem.placementAdvice?.presentationDocumentTarget === 'iframe';
  }
  get isImage() {
    return this.contentItem.mediaType?.startsWith?.('image') === true;
  }
  get linkClassName() {
    return this.isOverriddenForThumbnail ? 'lti-thumbnail-launch' : '';
  }
  get url() {
    return (this.isLTI ? this.contentItem.canvasURL : this.contentItem.url)?.replace(/^(data:text\/html|javascript:)/, '#$1');
  }
  get linkTarget() {
    if (this.isOverriddenForThumbnail) {
      return JSON.stringify(this.contentItem.placementAdvice);
    }
    return this.contentItem?.placementAdvice?.presentationDocumentTarget?.toLowerCase() === 'window' ? '_blank' : null;
  }
  get docTarget() {
    if (this.contentItem?.placementAdvice?.presentationDocumentTarget === 'embed' && !this.isImage) {
      return 'text';
    } else if (this.isOverriddenForThumbnail) {
      return 'link';
    }
    return this.contentItem?.placementAdvice?.presentationDocumentTarget?.toLowerCase();
  }
  get codePayload() {
    switch (this.docTarget) {
      case 'iframe':
        return this.generateCodePayloadIframe();
      case 'embed':
        return this.generateCodePayloadEmbed();
      case 'text':
        return this.generateCodePayloadText();
      default:
        return this.generateCodePayloadLink();
    }
  }
  get containingCanvasLtiToolId() {
    return this.env.containingCanvasLtiToolId;
  }
  get currentTinyMceSelection() {
    return this.env.editorSelection;
  }
  generateCodePayloadIframe() {
    var _addParentFrameContex, _this$contentItem$tit, _this$contentItem$pla, _this$contentItem$pla2;
    const iframe = document.createElement('iframe');
    iframe.src = (_addParentFrameContex = addParentFrameContextToUrl(this.url, this.containingCanvasLtiToolId)) !== null && _addParentFrameContex !== void 0 ? _addParentFrameContex : '';
    iframe.title = (_this$contentItem$tit = this.contentItem.title) !== null && _this$contentItem$tit !== void 0 ? _this$contentItem$tit : '';
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('webkitallowfullscreen', 'true');
    iframe.setAttribute('mozallowfullscreen', 'true');
    if (this.env?.ltiIframeAllowPolicy !== undefined) {
      iframe.setAttribute('allow', this.env.ltiIframeAllowPolicy);
    } else if (this.isLTI) {
      iframe.setAttribute('allow', 'microphone; camera; midi');
    }
    if (this.contentItem.class) {
      iframe.className = this.contentItem.class;
    }
    const w = maybeAddPx((_this$contentItem$pla = this.contentItem.placementAdvice?.displayWidth) !== null && _this$contentItem$pla !== void 0 ? _this$contentItem$pla : undefined);
    const h = maybeAddPx((_this$contentItem$pla2 = this.contentItem.placementAdvice?.displayHeight) !== null && _this$contentItem$pla2 !== void 0 ? _this$contentItem$pla2 : undefined);
    if (w) {
      iframe.style.width = w;
      iframe.setAttribute('width', w.replace('px', ''));
    }
    if (h) {
      iframe.style.height = h;
      iframe.setAttribute('height', h.replace('px', ''));
    }
    if (isStudioContentItemCustomJson(this.contentItem.custom)) {
      const studioAttributes = studioAttributesFrom(this.contentItem.custom);
      const ds = displayStyleFrom(studioAttributes);
      if (ds) iframe.style.display = ds;
      for (const key in studioAttributes) {
        const val = studioAttributes[key];
        if (val !== undefined && val !== null) {
          iframe.setAttribute(key, String(val));
        }
      }
    }
    const div = document.createElement('div');
    div.appendChild(iframe);
    return div.innerHTML;
  }
  generateCodePayloadEmbed() {
    var _this$contentItem$pla3, _this$contentItem$pla4;
    const img = document.createElement('img');
    if (this.url) img.src = this.url;
    if (this.text) img.alt = this.text;
    const w = maybeAddPx((_this$contentItem$pla3 = this.contentItem.placementAdvice?.displayWidth) !== null && _this$contentItem$pla3 !== void 0 ? _this$contentItem$pla3 : undefined);
    const h = maybeAddPx((_this$contentItem$pla4 = this.contentItem.placementAdvice?.displayHeight) !== null && _this$contentItem$pla4 !== void 0 ? _this$contentItem$pla4 : undefined);
    if (w) img.style.width = w;
    if (h) img.style.height = h;
    const div = document.createElement('div');
    div.appendChild(img);
    return div.innerHTML;
  }
  generateCodePayloadText() {
    var _this$text;
    return (_this$text = this.text) !== null && _this$text !== void 0 ? _this$text : '';
  }
  generateCodePayloadLink() {
    const div = document.createElement('div');
    const a = document.createElement('a');
    if (this.url) a.href = this.url;
    if (this.contentItem.title) a.title = this.contentItem.title;
    if (this.linkTarget) a.target = this.linkTarget;
    if (this.linkClassName) a.className = this.linkClassName;
    div.appendChild(a);
    if (this.contentItem.thumbnail && this.contentItem.thumbnail['@id']) {
      var _this$contentItem$thu, _this$contentItem$thu2;
      const img = document.createElement('img');
      img.src = this.contentItem.thumbnail['@id'];
      const h = maybeAddPx((_this$contentItem$thu = this.contentItem.thumbnail.height) !== null && _this$contentItem$thu !== void 0 ? _this$contentItem$thu : 48);
      const w = maybeAddPx((_this$contentItem$thu2 = this.contentItem.thumbnail.width) !== null && _this$contentItem$thu2 !== void 0 ? _this$contentItem$thu2 : 48);
      if (h) img.style.height = h;
      if (w) img.style.width = w;
      if (this.text) img.alt = this.text;
      a.appendChild(img);
    } else if (emptyAsNull(this.currentTinyMceSelection) != null && a != null) {
      var _this$currentTinyMceS;
      a.innerHTML = (_this$currentTinyMceS = this.currentTinyMceSelection) !== null && _this$currentTinyMceS !== void 0 ? _this$currentTinyMceS : '';
    } else {
      // don't inject tool provided content into the page HTML
      const linkHtml = this.generateLinkHtml();
      if (linkHtml) a.textContent = linkHtml;
    }
    return div.innerHTML;
  }
  generateLinkHtml() {
    var _ref, _emptyAsNull;
    return (_ref = (_emptyAsNull = emptyAsNull(this.currentTinyMceSelection)) !== null && _emptyAsNull !== void 0 ? _emptyAsNull : emptyAsNull(this.contentItem.text?.trim())) !== null && _ref !== void 0 ? _ref : this.contentItem?.title?.trim();
  }
}
const LTI_MIME_TYPES = ['application/vnd.ims.lti.v1.ltilink', 'application/vnd.ims.lti.v1.launch+json'];

/**
 * Declare the global tinyMCE information used to pass editor context around in Canvas.
 *
 * Eventually, this should be moved into packages/canvas-rce.
 */

/**
 * Interface for content items that come from external tool resource selection.
 *
 * Note that this interface may not be exhaustive, but provides types for the portion of ContentItem used by Canvas.
 * Additionally, there are some extra properties present here used by canvas
 *
 * See https://www.imsglobal.org/spec/lti-dl/v2p0#content-item-types
 * and https://www.imsglobal.org/lti/model/mediatype/application/vnd/ims/lti/v1/contentitems%2Bjson/index.html
 * and https://www.imsglobal.org/lti/model/mediatype/application/vnd/ims/lti/v1/contentitems%2Bjson/context.json
 */