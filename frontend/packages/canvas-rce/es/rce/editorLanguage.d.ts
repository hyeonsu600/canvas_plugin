/**
 * Function to return the corresponding TinyMCE language code for a given locale.
 * If the locale is not provided, it will return the default language (English).
 * If the locale contains underscores, they are replaced with hyphens for compatibility.
 * If the locale contains a custom variant (e.g., -x-), the base language is used for mapping.
 *
 * @param {string} [locale] - The locale string.
 * @returns {string | undefined} The corresponding TinyMCE language code, or undefined if not found.
 */
export function editorLanguage(locale?: string): string | undefined;
