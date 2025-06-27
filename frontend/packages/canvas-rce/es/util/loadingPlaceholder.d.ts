import { Editor } from 'tinymce';
/**
 * Determines what type of placeholder is appropriate for a given file information.
 */
export declare function placeholderInfoFor(fileMetaProps: PlaceHoldableThingInfo): Promise<PlaceholderInfo>;
export declare function removePlaceholder(editor: Editor, unencodedName: string): void;
/**
 * Inserts a placeholder into a TinyMCE editor. It should be removed by calling removePlaceholder, to ensure
 * image resources are cleaned up.
 */
export declare function insertPlaceholder(editor: Editor, unencodedName: string | undefined, placeholderInfoPromise: Promise<PlaceholderInfo>): Promise<HTMLElement>;
/**
 * Something for which a placeholder can be added to the editor.
 */
export interface PlaceHoldableThingInfo {
    name?: string;
    type?: string;
    title?: string;
    contentType?: string;
    displayAs?: 'link' | string;
    domObject: File | Blob | {
        preview?: string;
    };
}
/**
 * Style of placeholder to be inserted into the editor.
 */
export type PlaceholderInfo = {
    visibleLabel: string;
    ariaLabel: string;
} & ({
    type: 'inline';
} | {
    type: 'block';
    backgroundImageUrl?: string;
    width: string;
    height: string;
    vAlign: string;
});
