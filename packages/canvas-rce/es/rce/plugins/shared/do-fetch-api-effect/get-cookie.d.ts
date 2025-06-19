/**
 * A faster alternative to $.cookie for getting a cookie from document.cookie by name
 * see: https://stackoverflow.com/a/25490531/7159335
 * @param {string} cookieName
 * @returns {string} cookie value
 */
export default function getCookie(cookieName: string): string | undefined;
