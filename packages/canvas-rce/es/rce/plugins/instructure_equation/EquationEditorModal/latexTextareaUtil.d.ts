import { TextEditAction } from '../../../../util/textarea-editing-util';
/**
 * Inserts text into a textarea for editing LaTeX, handling selection and focus management.
 *
 * Ultimately, this should be refactored out into a React component.
 *
 * @param textarea
 * @param insertionText
 */
export declare function insertTextIntoLatexTextarea(textarea: HTMLTextAreaElement, insertionText: string): void;
export declare function planInsertTextIntoLatexTextarea(args: {
    currentText: string;
    selStart: number;
    selEnd: number;
    insertionText: string;
}): TextEditAction[];
