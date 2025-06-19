import { Editor } from 'tinymce';
interface WordCountOptions {
    readonly skipEditorFocus: boolean;
}
export default function (ed: Editor, document: Document, options: WordCountOptions): Promise<void>;
export {};
