export default class ClosedCaptionCreatorRow extends React.Component<any, any, any> {
    static propTypes: {
        languages: import("prop-types").Requireable<(import("prop-types").InferProps<{
            id: import("prop-types").Requireable<string>;
            label: import("prop-types").Requireable<string>;
        }> | null | undefined)[]>;
        liveRegion: import("prop-types").Requireable<(...args: any[]) => any>;
        uploadMediaTranslations: import("prop-types").Requireable<import("prop-types").InferProps<{
            UploadMediaStrings: import("prop-types").Requireable<{
                [x: string]: string | null | undefined;
            }>;
            SelectStrings: import("prop-types").Requireable<{
                [x: string]: string | null | undefined;
            }>;
        }>>;
        onDeleteRow: import("prop-types").Requireable<(...args: any[]) => any>;
        onFileSelected: import("prop-types").Requireable<(...args: any[]) => any>;
        onLanguageSelected: import("prop-types").Requireable<(...args: any[]) => any>;
        selectedFile: import("prop-types").Requireable<import("prop-types").InferProps<{
            name: import("prop-types").Validator<string>;
        }>>;
        selectedLanguage: import("prop-types").Requireable<import("prop-types").InferProps<{
            id: import("prop-types").Validator<string>;
            label: import("prop-types").Validator<string>;
        }>>;
        inheritedCaption: import("prop-types").Requireable<boolean>;
        mountNode: import("prop-types").Requireable<NonNullable<import("prop-types").ReactElementLike | ((...args: any[]) => any) | null | undefined>>;
    };
    constructor(props: any);
    styles: {
        messageErrorContainer: object;
        messageErrorContent: object;
    };
    state: {
        isValidCC: boolean;
        messageErrorCC: string;
    };
    _langSelectRef: React.RefObject<any>;
    _deleteCCBtnRef: React.RefObject<any>;
    handleLanguageChange: (event: any, selectedLang: any) => void;
    handleDeleteRow: (_e: any) => void;
    handleUploadClosedCaption: (event: any) => void;
    get isReadonly(): any;
    focus(): void;
    renderChoosing(): import("react/jsx-runtime").JSX.Element;
    renderSelectLanguage(): import("react/jsx-runtime").JSX.Element;
    renderChooseFile(): import("react/jsx-runtime").JSX.Element;
    fileInput: HTMLInputElement | null | undefined;
    attachmentFileButton: Button | null | undefined;
    renderChosen(): import("react/jsx-runtime").JSX.Element;
    render(): import("react/jsx-runtime").JSX.Element;
}
import React from 'react';
import { Button } from '@instructure/ui-buttons';
