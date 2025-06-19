export const PENDING_MEDIA_ENTRY_ID: "maybe";
export default FileBrowser;
declare class FileBrowser extends React.Component<any, any, any> {
    static propTypes: {
        allowUpload: PropTypes.Requireable<boolean>;
        selectFile: PropTypes.Validator<(...args: any[]) => any>;
        contentTypes: PropTypes.Requireable<(string | null | undefined)[]>;
        useContextAssets: PropTypes.Requireable<boolean>;
        searchString: PropTypes.Requireable<string>;
        onLoading: PropTypes.Validator<(...args: any[]) => any>;
        context: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            type: PropTypes.Validator<string>;
            id: PropTypes.Validator<string>;
        }>>>;
    };
    static defaultProps: {
        allowUpload: boolean;
        contentTypes: string[];
        useContextAssets: boolean;
    };
    constructor(props: any);
    state: {
        collections: {
            0: {
                id: number;
                collections: never[];
            };
        };
        items: {};
        openFolders: never[];
        loadingCount: number;
    };
    source: any;
    updatePropsWithThumbnailOrIcon(props: any): any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    getContextName(contextType: any): string;
    getRootFolders(): void;
    getUserFolders(): void;
    getContextFolders(): void;
    increaseLoadingCount(): void;
    decreaseLoadingCount(): void;
    getRootFolderData(context: any, contextId: any, opts?: {}): void;
    populateRootFolder(data: any, opts?: {}): void;
    fetchSubFolders: ((id: any) => void) & _.MemoizedFunction;
    fetchFiles(id: any): void;
    getFolderData(id: any): void;
    populateCollectionsList: (folderList: any, opts?: {}) => void;
    contentTypeIsAllowed(contentType: any): boolean;
    populateItemsList: (fileList: any) => void;
    formatFolderInfo(apiFolder: any, opts?: {}): {
        api: any;
        id: any;
        collections: never[];
        items: never[];
        name: any;
        context: string;
        canUpload: any;
        locked: any;
        descriptor: string | null;
    };
    formatFileInfo(apiFile: any, opts?: {}): {
        api: any;
        id: any;
        name: any;
        isDisabled: boolean;
        src: string;
        alt: any;
    };
    orderedIdsFromList(list: any, ids: any): any;
    onFolderToggle: (folder: any) => void;
    onFileClick: (file: any) => void;
    findFolderForFile(file: any): any;
    setFailureMessage: (message: any) => void;
    renderLoading(): React.JSX.Element | null;
    render(): React.JSX.Element;
}
import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
