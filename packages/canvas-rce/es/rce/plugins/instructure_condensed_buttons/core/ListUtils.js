/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

const isChildOfBody = (editor, node) => !!editor.$.contains(editor.getBody(), node);
export const isTableCellNode = node => node && /^(TH|TD)$/.test(node.nodeName);
export const isListNode = editor => node => node && /^(OL|UL|DL)$/.test(node.nodeName) && isChildOfBody(editor, node);
export function listStyleForSelectionOfEditor(editor) {
  const listElm = editor.dom.getParent(editor.selection.getNode(), 'ol,ul');
  if (listElm) {
    return {
      // This is not type safe, but the above getParent selector enforces that this will be
      // either 'OL' or 'UL'
      listType: listElm.nodeName,
      listStyleType: editor.dom.getStyle(listElm, 'listStyleType')
    };
  } else {
    return undefined;
  }
}

/**
 * Valid values of the "list-style-type" property.
 *
 * NOTE: Not all these types are supported by the RCE. For that, see `ListStyleTypeValue`
 *
 * From https://www.w3schools.com/cssref/pr_list-style-type.php
 */