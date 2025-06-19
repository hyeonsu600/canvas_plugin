export function walk(node: any, fn: any, done: any): void;
export function select(elem: any, indicateFn?: typeof indicate): void;
export function prepend(parent: any, child: any): void;
export function changeTag(elem: any, tagName: any): any;
export function pathForNode(ancestor: any, decendant: any): number[] | null;
export function nodeByPath(ancestor: any, path: any): any;
export function onlyContainsLink(elem: any): boolean;
export function splitStyleAttribute(styleString: any): any;
export function createStyleString(styleObj: any): string;
export function hasTextNode(elem: any): boolean;
/**
 * Notifies TinyMCE that a change has been made
 * This ensures that changes persist in the editor's state without requiring additional user actions
 * @returns {void}
 */
export function notifyTinyMCE(): void;
import indicate from './indicate';
