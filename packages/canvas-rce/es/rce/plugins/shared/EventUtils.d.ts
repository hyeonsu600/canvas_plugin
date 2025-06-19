import { EditorEvent } from 'tinymce';
export type TinyClipboardEvent = EditorEvent<ClipboardEvent>;
export type TinyDragEvent = EditorEvent<DragEvent>;
export type RCEClipOrDragEvent = (TinyClipboardEvent | TinyDragEvent) & {
    instructure_handled_already?: boolean;
};
export declare function isMicrosoftWordContentInEvent(event: RCEClipOrDragEvent): boolean;
export declare function isMicrosoftWordContent(html: string): boolean;
