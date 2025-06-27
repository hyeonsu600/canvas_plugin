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

import { openToolDialogFor } from './dialog-helper';
import { simpleCache } from '../../../util/simpleCache';
import { instUiIconsArray } from '../../../util/instui-icon-helper';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { IconLtiSolid } from '@instructure/ui-icons/es/svg';
/**
 * Helper class for the connection between an external tool registration and a particular TinyMCE instance.
 */
export class RceToolWrapper {
  static forEditorEnv(env, toolConfigs = env.availableRceLtiTools, mruIds = loadMruToolIds()) {
    return toolConfigs.map(it => new RceToolWrapper(env, it, mruIds));
  }
  get editor() {
    return this.env.editor;
  }
  constructor(env, toolInfo, mruToolIds) {
    this.iconId = void 0;
    this.isMruTool = void 0;
    this.env = env;
    this.toolInfo = toolInfo;
    this.iconId = registerToolIcon(env, toolInfo);
    this.isMruTool = mruToolIds.includes(String(toolInfo.id));
  }
  get id() {
    return String(this.toolInfo.id);
  }
  get title() {
    var _this$toolInfo$name;
    return (_this$toolInfo$name = this.toolInfo.name) !== null && _this$toolInfo$name !== void 0 ? _this$toolInfo$name : `Unknown tool (${String(this.toolInfo.id)})`;
  }
  get description() {
    return this.toolInfo.description;
  }
  get favorite() {
    var _this$toolInfo$favori;
    return (_this$toolInfo$favori = this.toolInfo.favorite) !== null && _this$toolInfo$favori !== void 0 ? _this$toolInfo$favori : false;
  }
  get image() {
    return parseIconValueFor(this.toolInfo)?.iconUrl;
  }
  get width() {
    return this.toolInfo.width;
  }
  get height() {
    return this.toolInfo.height;
  }
  get use_tray() {
    return this.toolInfo.use_tray;
  }
  get on_by_default() {
    return this.toolInfo.on_by_default;
  }
  asToolbarButton() {
    var _this$iconId;
    return {
      type: 'button',
      icon: (_this$iconId = this.iconId) !== null && _this$iconId !== void 0 ? _this$iconId : undefined,
      tooltip: this.title,
      onAction: () => this.openDialog()
    };
  }
  asMenuItem() {
    var _this$iconId2;
    return {
      type: 'menuitem',
      text: this.title,
      icon: (_this$iconId2 = this.iconId) !== null && _this$iconId2 !== void 0 ? _this$iconId2 : undefined,
      onAction: () => this.openDialog()
    };
  }
  openDialog() {
    addMruToolId(this.id, this.env);
    openToolDialogFor(this);
  }
}
export function parseIconValueFor(toolInfo) {
  const result = {};
  const canvasIconClass = toolInfo.canvas_icon_class;

  // URL embedded in canvas_icon_class, which happens in some cases (see MAT-1354)
  if (typeof canvasIconClass === 'object') {
    const iconUrl = canvasIconClass?.icon_url;
    if (typeof iconUrl === 'string' && iconUrl !== '') {
      result.iconUrl = iconUrl;
    }
  }

  // URL at the top level takes precedence
  if (typeof toolInfo.icon_url === 'string' && toolInfo.icon_url !== '') {
    result.iconUrl = toolInfo.icon_url;
  }

  // Icon class as string
  if (typeof canvasIconClass === 'string' && canvasIconClass !== '') {
    result.canvasIconClass = canvasIconClass;
  }
  return result;
}
function registerToolIcon(env, toolInfo) {
  if (env.editor == null) return undefined;
  const iconId = 'lti_tool_' + String(toolInfo.id);
  const {
    iconUrl,
    canvasIconClass
  } = parseIconValueFor(toolInfo);

  // We need to strip off the icon- or icon_ prefix from the icon class name to match instui icons
  const iconGlyphName = (canvasIconClass !== null && canvasIconClass !== void 0 ? canvasIconClass : '').replace(/^icon[-_]/, '');
  if (iconUrl != null && iconUrl.length > 0) {
    // Icon image provided
    env.editor.ui.registry.addIcon(iconId, svgImageCache.get(iconUrl));
    return iconId;
  } else if (iconGlyphName != null && iconGlyphName.length > 0) {
    // InstUI icon used
    const instUiIcon = instUiIconsArray.find(it => it.variant === 'Line' && it.glyphName === iconGlyphName);
    if (instUiIcon != null) {
      env.editor.ui.registry.addIcon(iconId, instUiIcon.src);
      return iconId;
    }
  }

  // Fallback to default icon
  env.editor.ui.registry.addIcon(iconId, IconLtiSolid.src);
  return iconId;
}
const svgImageCache = simpleCache(imageUrl => {
  // Sanitize input against XSS
  const svg = document.createElement('svg');
  svg.setAttribute('viewBox', '0 0 16 16');
  svg.setAttribute('version', '1.1');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  const image = document.createElement('image');
  image.setAttribute('xlink:href', imageUrl);
  image.style.width = '100%';
  image.style.height = '100%';
  svg.appendChild(image);
  return svg.outerHTML;
});

/**
 * Loads the list of most recently used external tool ids.
 */
export function loadMruToolIds() {
  let list;
  try {
    var _window$localStorage$;
    list = JSON.parse((_window$localStorage$ = window.localStorage?.getItem('ltimru')) !== null && _window$localStorage$ !== void 0 ? _window$localStorage$ : '[]');
  } catch (ex) {
    console.warn('Found bad LTI MRU data', ex.message);
  }
  return Array.isArray(list) ? list.filter(it => it != null).map(it => String(it)) : [];
}

/**
 * Loads the list of most recently used external tool ids.
 */
export function storeMruToolIds(toolIds) {
  try {
    window.localStorage?.setItem('ltimru', JSON.stringify(toolIds));
  } catch (ex) {
    console.warn('Cannot save LTI MRU list', ex.message);
  }
}
export function addMruToolId(toolId, env) {
  const initialMruToolIds = loadMruToolIds();
  if (!initialMruToolIds.includes(toolId)) {
    const newToolIds = [toolId, ...initialMruToolIds.slice(0, env.maxMruTools - 1)];
    storeMruToolIds(newToolIds);
    return newToolIds;
  }
  return initialMruToolIds;
}
export function buildToolMenuItems(availableTools, viewAllItem) {
  return [...availableTools.filter(it => it.isMruTool).map(it => it.asMenuItem()).sort((a, b) => a.text.localeCompare(b.text)), viewAllItem];
}