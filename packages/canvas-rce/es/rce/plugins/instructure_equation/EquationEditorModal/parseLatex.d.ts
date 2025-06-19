import { Editor } from 'tinymce';
export type ParsedLatex = {
    latex?: string;
    advancedOnly?: boolean;
    startContainer?: Node;
    leftIndex?: number;
    rightIndex?: number;
};
export declare const selectionIsLatex: (selection: string) => boolean;
export declare const cleanLatex: (latex: string) => string;
export declare const findLatex: (nodeValue: string, cursor: number) => ParsedLatex;
export declare const parseLatex: (editor: Editor) => ParsedLatex;
