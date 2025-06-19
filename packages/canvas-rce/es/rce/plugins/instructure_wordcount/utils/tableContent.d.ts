import { Editor } from 'tinymce';
export interface Header {
    readonly id: string;
    readonly getLabel: () => string;
}
export interface CountRow {
    readonly label: string;
    readonly documentCount: number;
    readonly selectionCount: number;
}
export declare const HEADERS: Header[];
export declare const generateRows: (ed: Editor) => CountRow[];
