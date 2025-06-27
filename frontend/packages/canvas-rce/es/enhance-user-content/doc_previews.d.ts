export function isPreviewable(mimeType: any): boolean;
export function showLoadingImage($link: any, position?: string): any;
export function removeLoadingImage($link: any): any;
export function loadDocPreview($container: any, options: any): void;
/**
 * Replaces bad urls with harmless urls in cases where bad urls might cause harm
 * @param {string} url
 */
export function sanitizeUrl(url: string): string;
export const previewableMimeTypes: string[];
