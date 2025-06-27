import { Editor } from 'tinymce';
export declare const isTableCellNode: (node: Node) => boolean;
export declare const isListNode: (editor: Editor) => (node: Node) => boolean;
export declare function listStyleForSelectionOfEditor(editor: Editor): {
    listType: RceSupportedListType;
    listStyleType?: ListStyleTypeValue;
} | undefined;
export type RceSupportedListType = 'UL' | 'OL';
/**
 * Valid values of the "list-style-type" property.
 *
 * NOTE: Not all these types are supported by the RCE. For that, see `ListStyleTypeValue`
 *
 * From https://www.w3schools.com/cssref/pr_list-style-type.php
 */
export type ListStyleTypeValue = 'disc' | 'armenian' | 'circle' | 'cjk-ideographic' | 'decimal' | 'decimal-leading-zero' | 'georgian' | 'hebrew' | 'hiragana' | 'hiragana-iroha' | 'katakana' | 'katakana-iroha' | 'lower-alpha' | 'lower-greek' | 'lower-latin' | 'lower-roman' | 'none' | 'square' | 'upper-alpha' | 'upper-greek' | 'upper-latin' | 'upper-roman' | 'initial' | 'inherit';
