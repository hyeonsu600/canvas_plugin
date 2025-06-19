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

import RCEWrapper from '../../RCEWrapper';
import { fallbackIframeAllowances } from './constants';

/**
 * Type of the "editor buttons" that come from Canvas.
 *
 * They're actually the available LTI Tool configurations, so we give them a more reasonable name here.
 */

/**
 * Gets the environment information for the external tools dialog for a given tinyMCE editor.
 */
export function externalToolsEnvFor(editor) {
  const props = () => {
    var _ref;
    return (_ref = RCEWrapper.getByEditor(editor)?.props) !== null && _ref !== void 0 ? _ref : undefined;
  };
  let cachedCanvasToolId;
  function nonNullishArray(arr) {
    return arr?.filter(it => it != null);
  }
  return {
    editor: editor !== null && editor !== void 0 ? editor : null,
    get rceWrapper() {
      var _RCEWrapper$getByEdit;
      return (_RCEWrapper$getByEdit = RCEWrapper.getByEditor(editor)) !== null && _RCEWrapper$getByEdit !== void 0 ? _RCEWrapper$getByEdit : null;
    },
    get availableRceLtiTools() {
      var _nonNullishArray;
      return (_nonNullishArray = nonNullishArray(props()?.ltiTools)) !== null && _nonNullishArray !== void 0 ? _nonNullishArray : [];
    },
    /**
     * Gets information about the context in which the editor is launched.
     */
    get contextAssetInfo() {
      const trayProps = props()?.trayProps;
      if (trayProps != null) {
        var _trayProps$containing;
        const {
          contextId,
          contextType
        } = (_trayProps$containing = trayProps.containingContext) !== null && _trayProps$containing !== void 0 ? _trayProps$containing : trayProps;
        if (contextId != null && contextId.length > 0 && contextType != null && contextType.length > 0) {
          return {
            contextType,
            contextId
          };
        }
      }
      return null;
    },
    get resourceSelectionUrlOverride() {
      var _props$externalToolsC;
      return (_props$externalToolsC = props()?.externalToolsConfig?.resourceSelectionUrlOverride) !== null && _props$externalToolsC !== void 0 ? _props$externalToolsC : null;
    },
    get ltiIframeAllowPolicy() {
      var _nonNullishArray2;
      return ((_nonNullishArray2 = nonNullishArray(props()?.externalToolsConfig?.ltiIframeAllowances)) !== null && _nonNullishArray2 !== void 0 ? _nonNullishArray2 : fallbackIframeAllowances).join('; ');
    },
    get isA2StudentView() {
      var _props$externalToolsC2;
      return (_props$externalToolsC2 = props()?.externalToolsConfig?.isA2StudentView) !== null && _props$externalToolsC2 !== void 0 ? _props$externalToolsC2 : false;
    },
    get maxMruTools() {
      var _props$externalToolsC3;
      return (_props$externalToolsC3 = props()?.externalToolsConfig?.maxMruTools) !== null && _props$externalToolsC3 !== void 0 ? _props$externalToolsC3 : 5;
    },
    get canvasOrigin() {
      var _props$canvasOrigin;
      return (_props$canvasOrigin = props()?.canvasOrigin) !== null && _props$canvasOrigin !== void 0 ? _props$canvasOrigin : window.location.origin;
    },
    /**
     * Gets the context id that should be used when launching LTI iframes.
     */
    get containingCanvasLtiToolId() {
      const propsToolId = props()?.externalToolsConfig?.containingCanvasLtiToolId;
      if (typeof propsToolId === 'string') {
        return propsToolId;
      }
      try {
        if (cachedCanvasToolId === undefined) {
          // Fall back on localStorage until NQ implements
          cachedCanvasToolId = window.localStorage.getItem('canvas_tool_id');
        }
        return cachedCanvasToolId;
      } catch {
        return null;
      }
    },
    get editorSelection() {
      var _editor$selection$get;
      return (_editor$selection$get = editor?.selection?.getContent()) !== null && _editor$selection$get !== void 0 ? _editor$selection$get : null;
    },
    get editorContent() {
      var _editor$getContent;
      return (_editor$getContent = editor?.getContent()) !== null && _editor$getContent !== void 0 ? _editor$getContent : null;
    },
    insertCode(code) {
      if (this.rceWrapper?.insertCode) {
        this.rceWrapper.insertCode(code);
      }
    },
    replaceCode(code) {
      if (this.rceWrapper?.replaceCode) {
        this.rceWrapper.replaceCode(code);
      }
    }
  };
}