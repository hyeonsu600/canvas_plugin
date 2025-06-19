export function headerFor(jwt: any): {
    Authorization: string;
};
export function originFromHost(host: any, windowOverride: any): any;
export function getSearchParam(searchString: any): string;
export default RceApiSource;
declare class RceApiSource {
    constructor(options?: {});
    jwt: any;
    host: any;
    refreshToken: any;
    hasSession: boolean;
    alertFunc: any;
    canvasOrigin: any;
    getSession(): Promise<any>;
    initializeCollection(endpoint: any, props: any): {
        links: never[];
        bookmark: string;
        isLoading: boolean;
        hasMore: boolean;
        searchString: any;
    };
    initializeUpload(): {
        uploading: boolean;
        folders: {};
        formExpanded: boolean;
    };
    initializeImages(props: any): {
        [x: number]: {
            files: never[];
            bookmark: null;
            isLoading: boolean;
            hasMore: boolean;
        };
        searchString: string;
    };
    initializeDocuments(props: any): {
        [x: number]: {
            files: never[];
            bookmark: null;
            isLoading: boolean;
            hasMore: boolean;
        };
        searchString: string;
    };
    initializeMedia(props: any): {
        [x: number]: {
            files: never[];
            bookmark: null;
            isLoading: boolean;
            hasMore: boolean;
        };
        searchString: string;
    };
    initializeFlickr(): {
        searchResults: never[];
        searching: boolean;
        formExpanded: boolean;
    };
    fetchPage(uri: any): Promise<any>;
    fetchBookmarkedData(fetchFunction: any, properties: any, onSuccess: any, onError: any, bookmark: any): any;
    fetchDocs(props: any): Promise<{
        bookmark: any;
        files: any;
    }>;
    fetchMedia(props: any): Promise<{
        bookmark: any;
        files: any;
    }>;
    fetchFiles(uri: any): Promise<{
        bookmark: any;
        files: any;
    }>;
    fetchLinks(key: any, props: any): Promise<any>;
    fetchRootFolder(props: any): Promise<any>;
    mediaServerSession(): Promise<any>;
    uploadMediaToCanvas(mediaObject: any): Promise<any>;
    updateMediaObject(apiProps: any, { media_object_id, title, attachment_id }: {
        media_object_id: any;
        title: any;
        attachment_id: any;
    }): Promise<any>;
    updateClosedCaptions(apiProps: any, { media_object_id, attachment_id, subtitles }: {
        media_object_id: any;
        attachment_id: any;
        subtitles: any;
    }, maxBytes?: 295000): Promise<any>;
    fetchClosedCaptions(_mediaId: any): Promise<{
        locale: string;
        content: string;
    }[]>;
    fetchFolders(props: any, bookmark: any): Promise<any>;
    fetchFilesForFolder(props: any, bookmark: any): Promise<any>;
    fetchSubFolders(props: any, bookmark: any): Promise<any>;
    fetchIconMakerFolder({ contextId, contextType }: {
        contextId: any;
        contextType: any;
    }): Promise<any>;
    fetchMediaFolder(props: any): Promise<any>;
    fetchMediaObjectIframe(mediaObjectId: any): Promise<any>;
    fetchImages(props: any): Promise<{
        bookmark: any;
        files: any;
        searchString: any;
    }>;
    preflightUpload(fileProps: any, apiProps: any): Promise<any>;
    uploadFRD(fileDomObject: any, preflightProps: any): Promise<any>;
    finalizeUpload(preflightProps: any, uploadResults: any): Promise<any>;
    setUsageRights(fileId: any, usageRights: any): Promise<any>;
    searchFlickr(term: any, apiProps: any): Promise<any>;
    getFile(id: any, options?: {}): Promise<any>;
    addParamsIfPresent(uri: any, params: any): any;
    apiFetch(uri: any, headers: any, options: any): Promise<any>;
    apiReallyFetch(uri: any, headers: any, options?: {}): Promise<any>;
    apiPost(uri: any, headers: any, body: any, method?: string): Promise<any>;
    normalizeUriProtocol(uri: any, windowOverride: any): any;
    buildRetryHeaders(headers: any): Promise<any>;
    baseUri(endpoint: any, host: any, windowOverride: any): string;
    uriFor(endpoint: any, props: any): string;
}
