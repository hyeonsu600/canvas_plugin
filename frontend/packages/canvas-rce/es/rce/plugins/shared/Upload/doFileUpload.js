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

import ReactDOM from 'react-dom';
import formatMessage from '../../../../format-message';
import React from 'react';
import bridge from '../../../../bridge';
import { handleSubmit } from './UploadFile';
export default function doFileUpload(ed, document, opts) {
  const {
    accept,
    panels,
    preselectedFile
  } = {
    ...opts
  };
  const title = accept?.startsWith('image/') ? formatMessage('Upload Image') : formatMessage('Upload File');
  let shownResolve;
  const shownPromise = new Promise(resolve => shownResolve = resolve);
  const closedPromise = import('./UploadFile').then(({
    UploadFile
  }) => {
    const container = document.querySelector('.canvas-rce-upload-container') || (() => {
      const elem = document.createElement('div');
      elem.className = 'canvas-rce-upload-container';
      document.body.appendChild(elem);
      return elem;
    })();
    return new Promise(resolve => {
      const handleDismiss = () => {
        ReactDOM.unmountComponentAtNode(container);
        ed.focus(false);
        resolve('dismissed');
      };
      const wrappedSubmit = (...args) => {
        try {
          return handleSubmit(...args);
        } finally {
          resolve('submitted');
        }
      };
      ReactDOM.render(/*#__PURE__*/React.createElement(UploadFile, {
        preselectedFile: preselectedFile,
        accept: accept,
        editor: ed,
        label: title,
        panels: panels,
        onDismiss: handleDismiss,
        onSubmit: wrappedSubmit,
        canvasOrigin: bridge.canvasOrigin
      }), container);
      shownResolve();
    });
  });
  return {
    shownPromise,
    closedPromise
  };
}