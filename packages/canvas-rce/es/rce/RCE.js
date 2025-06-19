/*
 * Copyright (C) 2021 - present Instructure, Inc.
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

import React, { forwardRef, useEffect, useState } from 'react';
import formatMessage from '../format-message';
import RCEWrapper from './RCEWrapper';
import { editorLanguage } from './editorLanguage';
import normalizeLocale from './normalizeLocale';
import wrapInitCb from './wrapInitCb';
import tinyRCE from './tinyRCE';
import getTranslations from '../getTranslations';
import '@instructure/canvas-theme';
import generateId from 'format-message-generate-id/underscored_crc32';
if (!process || !process.env || !undefined) {
  formatMessage.setup({
    locale: 'en',
    generateId,
    missingTranslation: 'ignore'
  });
}

// forward rceRef to it refs the RCEWrapper where clients can call getCode etc. on it.
// You probably shouldn't use it until onInit has been called. Until then tinymce
// is not initialized.
const RCE = /*#__PURE__*/forwardRef(function RCE(props, rceRef) {
  const {
    autosave,
    canvasOrigin,
    defaultContent,
    editorOptions,
    // tinymce config
    height,
    highContrastCSS,
    instRecordDisabled,
    language,
    liveRegion,
    mirroredAttrs,
    // attributes to transfer from the original textarea to the one created by tinymce
    readOnly,
    textareaId,
    textareaClassName,
    rcsProps,
    use_rce_icon_maker,
    features,
    variant,
    onFocus,
    onBlur,
    onInit,
    onContentChange,
    ...rest
  } = props;
  useState(() => {
    formatMessage.setup({
      locale: normalizeLocale(props.language)
    });
  });
  const [isTranslationLoading, setIsTranslationLoading] = useState(true);
  useEffect(() => {
    const locale = normalizeLocale(props.language);
    getTranslations(locale).catch(err => console.error('Failed loading the language file for', locale, '\n Cause:', err)).finally(() => setIsTranslationLoading(false));
  });

  // some properties are only used on initialization
  // Languages are a bit of a mess since Tinymce and Canvas
  // have 2 different sets of language names. normalizeLocale
  // takes the language prop and returns the locale Canvas knows,
  // editorLanguage takes the language prop and returns the
  // corresponding locale for tinymce.
  const [initOnlyProps] = useState(() => {
    const iProps = {
      autosave,
      canvasOrigin,
      defaultContent,
      highContrastCSS,
      instRecordDisabled,
      language: normalizeLocale(language),
      liveRegion,
      textareaId,
      textareaClassName,
      trayProps: rcsProps,
      use_rce_icon_maker,
      features,
      editorOptions: {
        ...editorOptions,
        selector: editorOptions?.selector || `#${textareaId}`,
        height,
        language: editorLanguage(props.language)
      },
      variant
    };
    wrapInitCb(mirroredAttrs || {}, iProps.editorOptions);
    return iProps;
  });
  if (isTranslationLoading) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, formatMessage('Loading...'));
  } else {
    return /*#__PURE__*/React.createElement(RCEWrapper, Object.assign({
      name: "content",
      ref: rceRef,
      tinymce: tinyRCE,
      readOnly: readOnly
    }, initOnlyProps, {
      onFocus: onFocus,
      onBlur: onBlur,
      onContentChange: onContentChange,
      onInitted: onInit
    }, rest));
  }
});
RCE.defaultProps = {
  autosave: {
    enabled: false,
    maxAge: 3600000
  },
  defaultContent: '',
  editorOptions: {},
  renderKBShortcutModal: true,
  highContrastCSS: [],
  instRecordDisabled: false,
  language: 'en',
  liveRegion: () => document.getElementById('flash_screenreader_holder'),
  maxInitRenderedRCEs: -1,
  mirroredAttrs: {},
  readOnly: false,
  use_rce_icon_maker: true,
  onFocus: () => undefined,
  onBlur: () => undefined,
  onContentChange: () => undefined,
  onInit: () => undefined
};
export default RCE;