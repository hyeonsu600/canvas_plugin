import _pt from "prop-types";
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

import React, { useState } from 'react';
import { Modal } from '@instructure/ui-modal';
import { Button, CloseButton } from '@instructure/ui-buttons';
import { Heading } from '@instructure/ui-heading';
import { View } from '@instructure/ui-view';
import { ScreenReaderContent } from '@instructure/ui-a11y-content';
import { List } from '@instructure/ui-list';
import { Flex } from '@instructure/ui-flex';
import { TextInput } from '@instructure/ui-text-input';
import { IconSearchLine } from '@instructure/ui-icons';
import { Alert } from '@instructure/ui-alerts';
import formatMessage from '../../../../../format-message';
import ExternalToolSelectionItem from './ExternalToolSelectionItem';
import { instuiPopupMountNodeFn } from '../../../../../util/fullscreenHelpers';
// TODO: we really need a way for the client to pass this to the RCE
const getLiveRegion = () => document.getElementById('flash_screenreader_holder');

/**
 * Returns a filtered list of items based on the term.
 *
 * This was copied from legacy code, and feels like it should be replaced by a string matching library.
 *
 * @param searchString search term
 * @param items objects to filter
 * @return matching items if a non-blank search term is provided, otherwise a copy of the original list
 */
export function filterItemsByTitleSubstring(searchString, items) {
  if (searchString == null || searchString.length === 0) {
    return items;
  }
  const lowerTerm = searchString.toLocaleLowerCase();
  return items.filter(item => item.title.toLocaleLowerCase().includes(lowerTerm));
}
export function ExternalToolSelectionDialog(props) {
  const [filterTerm, setFilterTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState(props.ltiButtons);
  const handleFilterChange = e => {
    setFilterTerm(e.target?.value);
    setFilteredResults(filterItemsByTitleSubstring(e.target.value, props.ltiButtons));
  };
  const filterEmpty = filteredResults.length <= 0;
  return /*#__PURE__*/React.createElement(Modal, {
    "data-mce-component": true,
    liveRegion: getLiveRegion,
    size: "medium",
    themeOverride: {
      mediumMaxWidth: '42rem'
    },
    label: formatMessage('Apps'),
    mountNode: instuiPopupMountNodeFn(),
    onDismiss: props.onDismiss,
    open: true,
    shouldCloseOnDocumentClick: false
  }, /*#__PURE__*/React.createElement(Modal.Header, {
    themeOverride: {
      padding: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(CloseButton, {
    placement: "end",
    offset: "medium",
    onClick: props.onDismiss,
    screenReaderLabel: formatMessage('Close')
  }), /*#__PURE__*/React.createElement(Heading, {
    margin: "small"
  }, formatMessage('All Apps')), /*#__PURE__*/React.createElement(View, {
    as: "div",
    padding: "x-small none x-small medium"
  }, /*#__PURE__*/React.createElement(TextInput, {
    type: "search",
    renderLabel: /*#__PURE__*/React.createElement(ScreenReaderContent, null, formatMessage('Search')),
    placeholder: formatMessage('Search'),
    renderAfterInput: /*#__PURE__*/React.createElement(IconSearchLine, {
      inline: false
    }),
    onChange: handleFilterChange
  }))), /*#__PURE__*/React.createElement(Modal.Body, {
    overflow: "fit"
  }, /*#__PURE__*/React.createElement(Flex, {
    as: "div",
    direction: "column"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    as: "div",
    shouldShrink: true,
    shouldGrow: true
  }, /*#__PURE__*/React.createElement(Alert, {
    liveRegion: getLiveRegion,
    variant: "info",
    screenReaderOnly: !filterEmpty
  }, filterEmpty && formatMessage('No results found for {filterTerm}', {
    filterTerm
  }), !filterEmpty && formatMessage(`Found { count, plural,
              =0 {# results}
              one {# result}
              other {# results}
            }`, {
    count: filteredResults.length
  })), renderTools(filteredResults)))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Button, {
    onClick: props.onDismiss,
    color: "primary"
  }, formatMessage('Done'))));
  function renderTools(ltiButtons) {
    return /*#__PURE__*/React.createElement(List, {
      isUnstyled: true
    }, ltiButtons.sort((a, b) => a.title.localeCompare(b.title)).map(b => {
      return /*#__PURE__*/React.createElement(List.Item, {
        key: b.id
      }, /*#__PURE__*/React.createElement(View, {
        as: "div",
        padding: "medium medium small none"
      }, /*#__PURE__*/React.createElement(ExternalToolSelectionItem, {
        title: b.title,
        image: b.image,
        onAction: () => {
          props.onDismiss();
          b.openDialog();
        },
        description: b.description
      })));
    }));
  }
}
ExternalToolSelectionDialog.propTypes = {
  ltiButtons: _pt.array.isRequired,
  onDismiss: _pt.func.isRequired
};