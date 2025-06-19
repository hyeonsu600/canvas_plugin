/**
 * Attempts to build a URL from the given string, and returns null if it is not a valid URL, rather than
 * throwing an exception, as the URL constructor does.
 */
export declare function parseUrlOrNull(url: string | null | undefined, base?: string | URL): URL | null;
export declare function relativizeUrl(url: string): string;
export declare function parseUrlPath(url: string): string | undefined;
/**
 * Converts the given URL into a relative URL if it meets the following criteria:
 * - is parsable by the browser URL class
 * - has the HTTP or HTTPS protocol
 * - has the same hostname as the given origin
 *
 * Note: This will relativize URLs where the ports don't match. This is intentional, as ports really shouldn't
 * matter for RCE HTTP content, and it can solve issues where an extraneous port is added (e.g. :80 on an http url)
 * or when running locally and the port is different. There isn't a security issue because the user could just manually
 * put in the transformed content anyways.
 *
 * @param inputUrlStr URL to relativize
 * @param origin Origin to check for
 */
export declare function relativeHttpUrlForHostname<TInput extends string | null | undefined>(inputUrlStr: TInput, origin: string): TInput;
/**
 * Adds a record of query parameters to a URL. null or undefined values in the record are ignored.
 *
 * - Relative URLs are supported.
 * - Non-parsable URLs will return null.
 *
 * @param inputUrlStr The URL string to parse
 * @param queryParams A record containing the query parameters to add
 */
export declare function addQueryParamsToUrl(inputUrlStr: string | null | undefined, queryParams: Record<string, string | null | undefined>): string | null;
