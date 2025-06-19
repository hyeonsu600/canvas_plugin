export function buildImage(index: any, name: any, height: any, width: any): {
    display_name: any;
    href: string;
    id: any;
    preview_url: string;
    thumbnail_url: string;
    content_type: string;
    date: string;
    filename: any;
};
export function getSession(): Promise<{
    contextType: string;
    contextId: number;
    canUploadFiles: boolean;
    usageRightsRequired: boolean;
}>;
export function initializeFolders(): {};
export function initializeImages(props: any): {
    [x: number]: {
        files: never[];
        bookmark: undefined;
        hasMore: boolean;
        isLoading: boolean;
    };
};
export function initializeUpload(): {
    uploading: boolean;
    folders: {};
    formExpanded: boolean;
};
export function initializeFlickr(): {
    searchResults: never[];
    searching: boolean;
    formExpanded: boolean;
};
export function initializeCollection(endpoint: any): {
    links: never[];
    bookmark: any;
    loading: boolean;
};
export function initializeDocuments(_props: any): {
    course: {
        files: never[];
        bookmark: string;
        isLoading: boolean;
        hasMore: boolean;
    };
    user: {
        files: never[];
        bookmark: string;
        isLoading: boolean;
        hasMore: boolean;
    };
};
export function initializeMedia(_props: any): {
    course: {
        files: never[];
        bookmark: string;
        isLoading: boolean;
        hasMore: boolean;
    };
    user: {
        files: never[];
        bookmark: string;
        isLoading: boolean;
        hasMore: boolean;
    };
};
export function fetchFolders(): Promise<any>;
export function fetchFiles(uri?: string): Promise<any>;
export function fetchImages(props: any): Promise<any>;
export function fetchMediaFolder(): Promise<{
    folders: {
        id: number;
        name: string;
        parentId: number;
        filesUrl: string;
        foldersUrl: string;
    }[];
    bookmark: string;
}>;
export function preflightUpload(): Promise<any>;
export function uploadFRD(): Promise<any>;
export function fetchRootFolder(props: any): Promise<{
    folders: {
        id: number;
        name: string;
        filesUrl: string;
        foldersUrl: string;
    }[];
}>;
export function fetchPage(uri: any): Promise<any>;
export function searchFlickr(term: any): Promise<any>;
export function setUsageRights(id: any, usageRights: any): void;
export function getFile(id: any): Promise<{
    id: any;
    type: string;
    name: string;
    url: string;
    embed: {
        type: string;
    };
}>;
export function fetchDocs(state: any): Promise<any>;
export function fetchMedia(state: any): Promise<any>;
export function updateMediaObject(state: any, { media_object_id, title }: {
    media_object_id: any;
    title: any;
}): Promise<any>;
export function updateMediaObjectFailure(): Promise<any>;
export function updateClosedCaptions(): Promise<any>;
