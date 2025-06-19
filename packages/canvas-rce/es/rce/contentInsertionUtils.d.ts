/**
 * functions in this module SHOULD NOT have side effects,
 * but should be focused around providing necessary data
 * or dom transformations with no state in this file.
 */
/**
 * transforms an input url to make a link out of
 * into a correctly formed url.  If it's clearly a mailing link,
 * adds mailto: to the front, and if it has no protocol but isn't an
 * absolute path, it prepends "http://".
 *
 * @param {string} input the raw url representative input by a user
 *
 * @returns {string} a well formed url
 */
export function cleanUrl(input: string): string;
export function getAnchorElement(editor: any, selectedElm: any): any;
export function isOnlyTextSelected(html: any): boolean;
export function isOKToLink(html: any): boolean;
export function isImageFigure(elm: any): any;
