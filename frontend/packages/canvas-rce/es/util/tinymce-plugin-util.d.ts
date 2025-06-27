import { Editor } from 'tinymce';
/**
 * Returns a helper for updating the icon of a toolbar button in a TinyMCE editor, necessary since there isn't a
 * built-in API for doing this, and RCE UX calls for toolbar buttons to be updated to match the user's selection
 * in the editor.
 *
 *
 * NOTE:
 * This function returns a helper that can later be used to actually update the icon. This is done so that
 * `toolbarIconHelperFor` can be called in the `onSetup` method of a button, such that any errors in finding the
 * icon in the toolbar will occur at RCE setup time, and not later, when user action occurs, thus increasing the
 * likelihood that those errors will be caught in tests, rather than being thrown at runtime as a result of user action
 */
export declare function toolbarIconHelperFor(editor: Editor, ariaLabel: string): {
    updateIcon(iconName: string): void;
};
