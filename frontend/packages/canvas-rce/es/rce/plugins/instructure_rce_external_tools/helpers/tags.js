/*
 * Copyright (C) 2019 - present Instructure, Inc.
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

/**
 * Performs interpolation on the given text, replacing `{{name}}` with `value`.
 *
 * @param text The text to interpolate
 * @param name The name of the tag to replace
 * @param value The value to replace the tag with
 */
export function replaceOneTag(text, name, value) {
  if (!text) {
    return text;
  }
  const strName = name !== null && name !== void 0 ? name : '';
  const strValue = (value !== null && value !== void 0 ? value : '').replace(/\s/g, '+');
  const itemExpression = new RegExp(`(%7B|{){2}[\\s|%20|\+]*${strName}[\\s|%20|\+]*(%7D|}){2}`, 'g');
  return text.replace(itemExpression, strValue);
}
/**
 * Performs interpolation on the given text, replacing one or more tags in the form `{{tag}}` with a value.
 *
 * Takes either a single tag name and value, or a record of tag name -> tag value
 *
 * @param text The text to interpolate
 * @param mappingOrName The mapping record or tag name
 * @param maybeValue The value to replace with, if a single tag name was provided
 */
export function replaceTags(text, mappingOrName, maybeValue) {
  if (typeof mappingOrName === 'object') {
    Object.keys(mappingOrName).forEach(name => {
      text = replaceOneTag(text, name, mappingOrName[name]);
    });
    return text;
  } else {
    return replaceOneTag(text, mappingOrName, maybeValue);
  }
}