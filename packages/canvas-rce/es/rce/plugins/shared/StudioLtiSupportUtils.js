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

import PropTypes, { bool, shape } from 'prop-types';

/**
 * Interface for content item's 'custom' field, specifically for what is expected to come from Studio
 *
 * Used to determine whether or not Studio embedded media should be resizable, and whether or not we
 * present controls for the user to modify the embedded media.
 */

export const parsedStudioOptionsPropType = shape({
  resizable: bool.isRequired,
  convertibleToLink: bool.isRequired
});
export function isStudioContentItemCustomJson(input) {
  return typeof input === 'object' && input.source === 'studio';
}
export function studioAttributesFrom(customJson) {
  var _customJson$resizable, _customJson$enableMed;
  return {
    'data-studio-resizable': (_customJson$resizable = customJson.resizable) !== null && _customJson$resizable !== void 0 ? _customJson$resizable : false,
    'data-studio-tray-enabled': (_customJson$enableMed = customJson.enableMediaOptions) !== null && _customJson$enableMed !== void 0 ? _customJson$enableMed : false,
    'data-studio-convertible-to-link': true
  };
}
export function displayStyleFrom(studioAttributes) {
  if (!studioAttributes) return '';
  return studioAttributes['data-studio-resizable'] || studioAttributes['data-studio-tray-enabled'] ? 'inline-block' : '';
}
export function isStudioEmbeddedMedia(element) {
  // Borrowing this structure from isMediaElement in ContentSelection.js
  const tinymceIframeShim = element?.tagName === 'IFRAME' ? element?.parentElement : element;
  if (tinymceIframeShim?.firstElementChild?.tagName !== 'IFRAME') {
    return false;
  }
  return tinymceIframeShim.getAttribute('data-mce-p-data-studio-tray-enabled') === 'true';
}
export function parseStudioOptions(element) {
  const tinymceIframeShim = element?.tagName === 'IFRAME' ? element?.parentElement : element;
  return {
    resizable: tinymceIframeShim?.getAttribute('data-mce-p-data-studio-resizable') === 'true',
    convertibleToLink: tinymceIframeShim?.getAttribute('data-mce-p-data-studio-convertible-to-link') === 'true'
  };
}

/**
 * Tinymce adds an overlay when you click on an iframe inside the editor. It will by default
 * add resize handles to the corners of the overlay. The code that adds these handles won't
 * if the overlay has `data-mce-resize='false'` on it. Here, we force that behavior when the
 * underlying iframe has a `data-studio-resizable='false'`
 */
export function handleBeforeObjectSelected(e) {
  const targetElement = e.target;
  if (targetElement.getAttribute('data-mce-p-data-studio-resizable') === 'false') {
    targetElement.setAttribute('data-mce-resize', 'false');
  }
}