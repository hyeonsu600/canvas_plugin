import { Editor } from 'tinymce';
declare global {
    interface HTMLElement {
        _reactRoot?: any;
    }
}
export default function (editor: Editor): void;
