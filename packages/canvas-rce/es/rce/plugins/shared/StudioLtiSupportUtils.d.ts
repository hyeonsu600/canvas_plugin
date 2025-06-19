import { EditorEvent, Events } from 'tinymce';
/**
 * Interface for content item's 'custom' field, specifically for what is expected to come from Studio
 *
 * Used to determine whether or not Studio embedded media should be resizable, and whether or not we
 * present controls for the user to modify the embedded media.
 */
export interface StudioContentItemCustomJson {
    source: 'studio';
    resizable?: boolean;
    enableMediaOptions?: boolean;
}
export interface StudioMediaOptionsAttributes {
    'data-studio-resizable': boolean;
    'data-studio-tray-enabled': boolean;
    'data-studio-convertible-to-link': boolean;
}
export declare const parsedStudioOptionsPropType: import("prop-types").Requireable<import("prop-types").InferProps<{
    resizable: import("prop-types").Validator<boolean>;
    convertibleToLink: import("prop-types").Validator<boolean>;
}>>;
export type ParsedStudioOptions = {
    resizable: boolean;
    convertibleToLink: boolean;
};
export declare function isStudioContentItemCustomJson(input: any): input is StudioContentItemCustomJson;
export declare function studioAttributesFrom(customJson: StudioContentItemCustomJson): StudioMediaOptionsAttributes;
export declare function displayStyleFrom(studioAttributes: StudioMediaOptionsAttributes | null): 'inline-block' | '';
export declare function isStudioEmbeddedMedia(element: Element): boolean;
export declare function parseStudioOptions(element: Element | null): ParsedStudioOptions;
/**
 * Tinymce adds an overlay when you click on an iframe inside the editor. It will by default
 * add resize handles to the corners of the overlay. The code that adds these handles won't
 * if the overlay has `data-mce-resize='false'` on it. Here, we force that behavior when the
 * underlying iframe has a `data-studio-resizable='false'`
 */
export declare function handleBeforeObjectSelected(e: EditorEvent<Events.ObjectSelectedEvent>): void;
