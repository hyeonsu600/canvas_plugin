export default function ClosedCaptionCreator(props: any): import("react/jsx-runtime").JSX.Element;
export class ClosedCaptionPanel extends React.Component<any, any, any> {
    static propTypes: {
        liveRegion: import("prop-types").Validator<(...args: any[]) => any>;
        subtitles: import("prop-types").Requireable<(import("prop-types").InferProps<{
            locale: import("prop-types").Validator<string>;
            inherited: import("prop-types").Requireable<boolean>;
            file: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
                name: import("prop-types").Validator<string>;
            }>>>;
        }> | null | undefined)[]>;
        updateSubtitles: import("prop-types").Validator<(...args: any[]) => any>;
        uploadMediaTranslations: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
            UploadMediaStrings: import("prop-types").Requireable<{
                [x: string]: string | null | undefined;
            }>;
            SelectStrings: import("prop-types").Requireable<{
                [x: string]: string | null | undefined;
            }>;
        }>>>;
        userLocale: import("prop-types").Requireable<string>;
        mountNode: import("prop-types").Requireable<NonNullable<import("prop-types").ReactElementLike | ((...args: any[]) => any) | null | undefined>>;
    };
    static defaultProps: {
        userLocale: string;
    };
    constructor(props: any);
    state: {
        addingNewClosedCaption: boolean;
        newSelectedFile: null;
        newSelectedLanguage: null;
        lastDeletedCCIndex: number;
        subtitles: any;
        announcement: null;
    };
    closedCaptionLanguages: {
        id: string;
        readonly label: string;
    }[];
    _addButtonRef: React.RefObject<any>;
    _newCreatorRef: React.RefObject<any>;
    _nextCCRef: React.RefObject<any>;
    componentDidUpdate(): void;
    newButtonClick: () => void;
    onFileSelected: (newFile: any) => void;
    onLanguageSelected: (lang: any) => void;
    onRowDelete: (locale: any) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
import React from 'react';
