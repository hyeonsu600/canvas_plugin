import _pt from "prop-types";
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

import React from 'react';
import { View } from '@instructure/ui-view';
import { Flex } from '@instructure/ui-flex';
import { Text } from '@instructure/ui-text';
import { Link } from '@instructure/ui-link';
import formatMessage from '../../../../format-message';
import { getIcon } from '../../shared/linkUtils';
export function buildUrl(contextType, contextId, collectionType) {
  var _typeMap$collectionTy;
  const typeMap = {
    wikiPages: 'pages',
    discussions: 'discussion_topics'
  };
  return `/${contextType}s/${contextId}/${(_typeMap$collectionTy = typeMap[collectionType]) !== null && _typeMap$collectionTy !== void 0 ? _typeMap$collectionTy : collectionType}`;
}
export function getMessage(collectionType, isSearchResult) {
  switch (collectionType) {
    case 'wikiPages':
      return isSearchResult ? formatMessage('No pages found.') : formatMessage('No pages created yet.');
    case 'assignments':
      return isSearchResult ? formatMessage('No assignments found.') : formatMessage('No assignments created yet.');
    case 'quizzes':
      return isSearchResult ? formatMessage('No quizzes found.') : formatMessage('No quizzes created yet.');
    case 'announcements':
      return isSearchResult ? formatMessage('No announcements found.') : formatMessage('No announcements created yet.');
    case 'discussions':
      return isSearchResult ? formatMessage('No discussions found.') : formatMessage('No discussions created yet.');
    case 'modules':
      return isSearchResult ? formatMessage('No modules found.') : formatMessage('No modules created yet.');
  }
}
export const NoResults = ({
  contextType,
  contextId,
  collectionType,
  isSearchResult
}) => {
  const Icon = getIcon(collectionType);
  return /*#__PURE__*/React.createElement(View, {
    padding: "xx-large"
  }, /*#__PURE__*/React.createElement(Flex, {
    justifyItems: "center",
    alignItems: "center",
    direction: "column"
  }, /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(Icon, {
    size: "large",
    color: "secondary",
    padding: "large"
  })), /*#__PURE__*/React.createElement(Flex.Item, {
    margin: "small 0 0"
  }, /*#__PURE__*/React.createElement(Text, null, getMessage(collectionType, isSearchResult))), !isSearchResult && /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(Link, {
    href: buildUrl(contextType, contextId, collectionType),
    target: "_blank"
  }, formatMessage('Add one!')))));
};
NoResults.propTypes = {
  contextType: _pt.oneOf(['course', 'group']).isRequired,
  contextId: _pt.string.isRequired,
  collectionType: _pt.oneOf(['wikiPages', 'assignments', 'quizzes', 'announcements', 'discussions', 'modules']).isRequired,
  isSearchResult: _pt.bool.isRequired
};