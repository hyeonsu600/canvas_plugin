export default function UploadMedia(props: any): import("react/jsx-runtime").JSX.Element;
export namespace PANELS {
    let COMPUTER: number;
    let RECORD: number;
}
export class UploadMediaModal extends React.Component<any, any, any> {
    static propTypes: {
        disableSubmitWhileUploading: import("prop-types").Requireable<boolean>;
        liveRegion: import("prop-types").Requireable<(...args: any[]) => any>;
        mountNode: import("prop-types").Requireable<NonNullable<import("prop-types").ReactElementLike | ((...args: any[]) => any) | null | undefined>>;
        rcsConfig: import("prop-types").Requireable<import("prop-types").InferProps<{
            contextId: import("prop-types").Requireable<string>;
            contextType: import("prop-types").Requireable<string>;
            origin: import("prop-types").Requireable<string>;
            headers: import("prop-types").Requireable<import("prop-types").InferProps<{
                Authorization: import("prop-types").Requireable<string>;
            }>>;
        }>>;
        onStartUpload: import("prop-types").Requireable<(...args: any[]) => any>;
        onUploadComplete: import("prop-types").Requireable<(...args: any[]) => any>;
        onDismiss: import("prop-types").Requireable<(...args: any[]) => any>;
        open: import("prop-types").Requireable<boolean>;
        tabs: import("prop-types").Requireable<import("prop-types").InferProps<{
            record: import("prop-types").Requireable<boolean>;
            upload: import("prop-types").Requireable<boolean>;
        }>>;
        uploadMediaTranslations: import("prop-types").Requireable<import("prop-types").InferProps<{
            CLEAR_FILE_TEXT: import("prop-types").Requireable<string>;
            CLOSE_TEXT: import("prop-types").Requireable<string>;
            COMPUTER_PANEL_TITLE: import("prop-types").Requireable<string>;
            DRAG_DROP_CLICK_TO_BROWSE: import("prop-types").Requireable<string>;
            DRAG_FILE_TEXT: import("prop-types").Requireable<string>;
            INVALID_FILE_TEXT: import("prop-types").Requireable<string>;
            LOADING_MEDIA: import("prop-types").Requireable<string>;
            RECORD_PANEL_TITLE: import("prop-types").Requireable<string>;
            SUBMIT_TEXT: import("prop-types").Requireable<string>;
            UPLOADING_ERROR: import("prop-types").Requireable<string>;
            UPLOAD_MEDIA_LABEL: import("prop-types").Requireable<string>;
            SELECT_SUPPORTED_FILE_TYPE: import("prop-types").Requireable<string>;
            CHOOSE_FILE_TO_UPLOAD: import("prop-types").Requireable<string>;
            ENTER_FILE_NAME: import("prop-types").Requireable<string>;
        }>>;
        computerFile: import("prop-types").Requireable<File>;
        userLocale: import("prop-types").Requireable<string>;
        useStudioPlayer: import("prop-types").Requireable<boolean>;
    };
    static defaultProps: {
        disableSubmitWhileUploading: boolean;
        userLocale: string;
    };
    constructor(props: any);
    state: {
        hasUploadedFile: boolean;
        uploading: boolean;
        progress: number;
        selectedPanel: number;
        computerFile: any;
        subtitles: never[];
        recordedFile: null;
        modalBodySize: {
            width: number;
            height: number;
        };
    };
    modalBodyRef: React.RefObject<any>;
    computerPanelRef: React.RefObject<any>;
    inferSelectedPanel: (tabs: any) => number;
    handleSubmit: () => void;
    submitEnabled: () => boolean;
    uploadFile(file: any): void;
    onSaveMediaProgress: (progress: any) => void;
    saveMediaCallback: (err: any, data: any) => Promise<void>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    setBodySize(state: any): void;
    renderModalBody: () => import("react/jsx-runtime").JSX.Element | null;
    onModalClose: () => void;
    renderModalFooter: () => import("react/jsx-runtime").JSX.Element | null;
    render(): import("react/jsx-runtime").JSX.Element;
}
import React from 'react';
