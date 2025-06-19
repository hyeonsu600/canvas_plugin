export declare const attributeNamesToUrlRelativize: string[];
export declare const attributeNamesToRemove: string[];
/**
 * Transforms a block of HTML for use within the Rich Content Editor, normalizing content to remove extraneous
 * things added by the server.
 *
 * @param inputHtml
 * @param options
 */
export declare function transformRceContentForEditing(inputHtml: string | null | undefined, options: TransformRceContentForEditingOptions): string | null | undefined;
export interface TransformRceContentForEditingOptions {
    origin: string;
}
