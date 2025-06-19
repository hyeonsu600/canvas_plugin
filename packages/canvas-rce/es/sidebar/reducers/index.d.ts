declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    ui: import("redux").CombinedState<{
        hidden: boolean;
        selectedTabIndex: any;
        selectedAccordionIndex: any;
    }>;
    source: string;
    jwt: string;
    host: string;
    containingContext: string;
    contextType: any;
    contextId: any;
    searchString: any;
    sortBy: any;
    all_files: {};
    collections: import("redux").CombinedState<{
        announcements: {};
        assignments: {};
        discussions: {};
        modules: {};
        quizzes: {};
        wikiPages: {};
    }>;
    files: {};
    folders: {};
    rootFolderId: any;
    images: {};
    documents: {};
    media: {};
    upload: import("redux").CombinedState<{
        uploading: boolean;
        formExpanded: boolean;
        folders: {};
        rootFolderId: any;
        folderTree: {};
        error: {};
        loadingFolders: boolean;
        uploadingMediaStatus: never;
    }>;
    flickr: {};
    session: any;
    newPageLinkExpanded: boolean;
}>, any>;
export default _default;
