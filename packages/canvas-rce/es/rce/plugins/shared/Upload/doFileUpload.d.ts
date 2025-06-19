import { UploadFilePanelId } from './UploadFile';
import { Editor } from 'tinymce';
export type DoFileUploadResult = 'submitted' | 'dismissed';
export default function doFileUpload(ed: Editor, document: Document, opts: {
    accept?: string;
    panels?: UploadFilePanelId[];
    preselectedFile?: File;
}): {
    /**
     * Resolves when the dialog is shown.
     */
    shownPromise: Promise<unknown>;
    /**
     * Resolves when the dialog is closed
     */
    closedPromise: Promise<DoFileUploadResult>;
};
