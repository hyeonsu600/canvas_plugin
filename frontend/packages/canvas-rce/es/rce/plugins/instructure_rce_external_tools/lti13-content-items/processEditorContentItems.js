/*
 * Copyright (C) 2018 - present Instructure, Inc.
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

import { rceLti13ContentItemFromJson } from './rceLti13ContentItemFromJson';
import { showFlashAlert } from '../../../../common/FlashAlert';
import formatMessage from '../../../../format-message';
export default function processEditorContentItems(event, env, dialog) {
  try {
    var _event$data$content_i;
    const ltiEndpoint = event.data?.ltiEndpoint;
    const selection = env.editorSelection;
    const eventContentItems = (_event$data$content_i = event.data?.content_items) !== null && _event$data$content_i !== void 0 ? _event$data$content_i : [];
    let unsupportedItemWarningShown = false;
    for (const inputItem of eventContentItems) {
      const parsedItem = rceLti13ContentItemFromJson(inputItem, {
        ltiEndpoint: ltiEndpoint !== null && ltiEndpoint !== void 0 ? ltiEndpoint : null,
        selection: selection !== null && selection !== void 0 ? selection : null,
        containingCanvasLtiToolId: env.containingCanvasLtiToolId,
        ltiIframeAllowPolicy: env.ltiIframeAllowPolicy
      });
      if (parsedItem != null) {
        if (event.data?.replaceEditorContents) {
          env.replaceCode(parsedItem.toHtmlString());
        } else {
          env.insertCode(parsedItem.toHtmlString());
        }
      } else if (!unsupportedItemWarningShown) {
        var _inputItem$type;
        showFlashAlert({
          message: formatMessage('Could not insert content: "{itemType}" items are not currently supported in Canvas.', {
            itemType: (_inputItem$type = inputItem.type) !== null && _inputItem$type !== void 0 ? _inputItem$type : 'unknown'
          }),
          type: 'warning',
          err: null
        });
        unsupportedItemWarningShown = true;
      }
    }

    // Remove "unsaved changes" warnings and close modal
    if (event.data?.content_items) {
      dialog?.close();
    }
    if (event.data?.msg !== undefined) {
      // @ts-expect-error
      showFlashAlert({
        message: event.data.msg.toString()
      });
    }
    // @ts-expect-error
    if (event.data?.errormsg !== undefined) {
      // @ts-expect-error
      showFlashAlert({
        message: event.data.errormsg.toString(),
        type: 'error'
      });
    }
  } catch (e) {
    showFlashAlert({
      message: formatMessage('Failed to retrieve content from external tool'),
      type: 'error',
      err: e
    });
  }
}