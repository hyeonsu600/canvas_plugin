/**
 * Performs interpolation on the given text, replacing `{{name}}` with `value`.
 *
 * @param text The text to interpolate
 * @param name The name of the tag to replace
 * @param value The value to replace the tag with
 */
export declare function replaceOneTag<TInput extends string | null | undefined = string>(text: TInput, name: string | null | undefined, value: string | null | undefined): TInput;
/**
 * Performs interpolation on the given text, replacing one or more tags in the form `{{tag}}` with a value.
 *
 * Takes either a single tag name and value, or a record of tag name -> tag value
 *
 * @param text The text to interpolate
 * @param mappingOrName The mapping record or tag name
 * @param maybeValue The value to replace with, if a single tag name was provided
 */
export declare function replaceTags<TNull extends never | null | undefined = never>(text: string | TNull, mappingOrName: Record<string, string> | string, maybeValue?: string): string | TNull;
