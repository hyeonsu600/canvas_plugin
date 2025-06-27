import React from 'react';
import { Editor } from 'tinymce';
export declare const UploadFilePanelIds: readonly ["COMPUTER", "URL"];
export declare const FullPanelIds: ("URL" | "all" | "user_documents" | "course_documents" | "group_documents" | "user_images" | "course_images" | "group_images" | "user_media" | "course_media" | "group_media" | "course_links" | "group_links" | "list_icon_maker_icons" | "COMPUTER")[];
export type UploadFilePanelId = (typeof FullPanelIds)[number];
/**
 * Handles uploading data based on what type of data is submitted.
 */
export declare const handleSubmit: (editor: Editor, accept: string, selectedPanel: UploadFilePanelId, uploadData: any, storeProps: any, _source: any, afterInsert?: Function) => void;
export interface UploadFileProps {
    onSubmit?: Function;
    onDismiss: Function;
    accept?: string[] | string;
    editor?: Editor;
    label: string;
    panels?: UploadFilePanelId[];
    requireA11yAttributes?: boolean;
    forBlockEditorUse?: boolean;
    uploading?: boolean;
    trayProps?: object;
    canvasOrigin?: string;
    preselectedFile?: File;
}
export declare function UploadFile({ accept, editor, label, panels, onDismiss, requireA11yAttributes, forBlockEditorUse, uploading, trayProps, canvasOrigin, onSubmit, preselectedFile, }: UploadFileProps): React.JSX.Element;
