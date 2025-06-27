/**
 * Returns null if the string is null, undefined, or has length === 0
 *
 * @param str
 */
export declare function emptyAsNull(str: string | null | undefined): string | null;
/**
 * Returns null if the string is null, undefined, is empty, or contains only whitespace.
 *
 * Otherwise returns the string with leading and trailing whitespace removed.
 *
 * Useful for providing a default value for a string input:
 *
 * ```
 * label.innerText = trimmedOrNull(input.value) ?? 'Default value'
 * ```
 *
 * @param str
 */
export declare function trimmedOrNull(str: string | null | undefined): string | null;
