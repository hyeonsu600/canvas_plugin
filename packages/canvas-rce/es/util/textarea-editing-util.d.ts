/**
 * Represents a subset of the editing actions that can be taken on a <textarea> using the text-field-edit library.
 *
 * This is used to allow decoupling logic that requires textarea editing from the actual commands, because it's tricky
 * to test code that uses the 'text-field-edit' library directly, since it relies on document.execCommand().
 *
 * For production code, actions can be executed on a <textarea> using performTextEditActionOnTextarea
 * For testing, actions can be executed on a string using performTextEditActionsOnString
 */
export type TextEditAction = {
    action: 'insert';
    text: string;
} | {
    action: 'wrapSelection';
    before: string | null | undefined;
    after: string | null | undefined;
};
/**
 * Executes the given text edit actions on a <textarea>
 */
export declare function performTextEditActionOnTextarea(textarea: HTMLTextAreaElement, editAction: TextEditAction): void;
/**
 * Executes the given text edit actions on an object representing the important state of textarea editing,
 * the current text, selection start, and selection end.
 */
export declare function performTextEditActionsOnString(args: {
    text: string;
    selStart: number;
    selEnd: number;
    actions: TextEditAction[];
}): {
    text: string;
    selStart: number;
    selEnd: number;
};
