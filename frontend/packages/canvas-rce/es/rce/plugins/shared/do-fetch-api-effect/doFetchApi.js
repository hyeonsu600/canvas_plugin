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

// @ts-expect-error
import parseLinkHeader from './parse-link-header';
import { defaultFetchOptions } from './defaultFetchOptions';
import { toQueryString } from './query-string-encoding';
function constructRelativeUrl({
  path,
  params
}) {
  const queryString = toQueryString(params);
  if (queryString.length === 0) return path;
  return path + '?' + queryString;
}

// https://fetch.spec.whatwg.org/#requestinit

// NOTE: we do NOT deep-merge customFetchOptions.headers, they should be passed
// in the headers arg instead.
export default async function doFetchApi({
  path,
  method = 'GET',
  headers = {},
  params = {},
  body,
  fetchOpts = {}
}) {
  const finalFetchOptions = {
    ...defaultFetchOptions()
  };
  if (body && typeof body !== 'string') {
    body = JSON.stringify(body);
    finalFetchOptions.headers['Content-Type'] = 'application/json';
  }
  Object.assign(finalFetchOptions.headers, headers);
  Object.assign(finalFetchOptions, fetchOpts);
  const url = constructRelativeUrl({
    path,
    params
  });
  const response = await fetch(url, {
    body,
    method,
    ...finalFetchOptions,
    credentials: finalFetchOptions.credentials
  });
  if (!response.ok) {
    const err = new Error(`doFetchApi received a bad response: ${response.status} ${response.statusText}`);
    Object.assign(err, {
      response
    }); // in case anyone wants to check it for something
    throw err;
  }
  const linkHeader = response.headers.get('Link');
  const link = linkHeader && parseLinkHeader(linkHeader) || undefined;
  const text = await response.text();
  const json = text.length > 0 ? JSON.parse(text) : undefined;
  return {
    json,
    response,
    link
  };
}