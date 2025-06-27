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

/**
 * Builds a simple cache using a map and a compute function.
 *
 * @param compute The function to compute values in the cache
 * @param cache The map to use as a cache
 */
export function simpleCache(compute, cache = new Map()) {
  return {
    cache,
    get(key) {
      if (cache.has(key)) {
        return cache.get(key);
      }
      const value = compute(key);
      cache.set(key, value);
      return value;
    }
  };
}