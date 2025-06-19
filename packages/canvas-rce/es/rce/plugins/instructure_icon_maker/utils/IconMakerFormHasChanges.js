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

import _ from 'lodash';
export class IconMakerFormHasChanges {
  constructor(initSettings, currSettings) {
    this.initialSettings = void 0;
    this.currentSettings = void 0;
    this.initialSettings = initSettings;
    this.currentSettings = currSettings;
  }
  hasNameChange() {
    return 'name' in this.currentSettings && this.initialSettings.name !== this.currentSettings.name;
  }
  hasAltChange() {
    return 'alt' in this.currentSettings && this.initialSettings.alt !== this.currentSettings.alt;
  }
  hasShapeNameChange() {
    return 'shape' in this.currentSettings && this.initialSettings.shape !== this.currentSettings.shape;
  }
  hasShapeSizeChange() {
    return 'size' in this.currentSettings && this.initialSettings.size !== this.currentSettings.size;
  }
  hasColorNameChange() {
    return 'color' in this.currentSettings && this.initialSettings.color !== this.currentSettings.color;
  }
  hasOutlineSizeChange() {
    return 'outlineSize' in this.currentSettings && this.initialSettings.outlineSize !== this.currentSettings.outlineSize;
  }
  hasOutlineColorChange() {
    return 'outlineColor' in this.currentSettings && this.initialSettings.outlineColor !== this.currentSettings.outlineColor;
  }
  hasTextChange() {
    return 'text' in this.currentSettings && this.initialSettings.text !== this.currentSettings.text;
  }
  hasTextSizeChange() {
    return 'textSize' in this.currentSettings && this.initialSettings.textSize !== this.currentSettings.textSize;
  }
  hasTextColorChange() {
    return 'textColor' in this.currentSettings && this.initialSettings.textColor !== this.currentSettings.textColor;
  }
  hasTextBackgroundColorChange() {
    return 'textBackgroundColor' in this.currentSettings && this.initialSettings.textBackgroundColor !== this.currentSettings.textBackgroundColor;
  }
  hasTextPositionChange() {
    return 'textPosition' in this.currentSettings && this.initialSettings.textPosition !== this.currentSettings.textPosition;
  }
  hasImageSettingsChange() {
    return 'imageSettings' in this.currentSettings && !_.isEqual(this.initialSettings.imageSettings, this.currentSettings.imageSettings);
  }
  hasChanges() {
    return this.hasNameChange() || this.hasAltChange() || this.hasShapeNameChange() || this.hasShapeSizeChange() || this.hasColorNameChange() || this.hasOutlineColorChange() || this.hasOutlineSizeChange() || this.hasTextChange() || this.hasTextSizeChange() || this.hasTextColorChange() || this.hasTextBackgroundColorChange() || this.hasTextPositionChange() || this.hasImageSettingsChange();
  }
}