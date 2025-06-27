export default function propsFromDispatch(dispatch: any): {
    loadSession: () => any;
    onChangeTab: (index: any) => any;
    onChangeAccordion: (index: any) => any;
    fetchInitialPage: (key: any) => any;
    fetchNextPage: (key: any) => any;
    toggleFolder: (id: any) => any;
    fetchFolders: () => any;
    fetchInitialImages: (opts?: {
        category: string;
    }) => any;
    fetchNextImages: (opts?: {
        category: string;
    }) => any;
    startUpload: (tabContext: any, fileMetaProps: any) => any;
    flickrSearch: (term: any) => any;
    toggleFlickrForm: () => any;
    toggleUploadForm: () => any;
    toggleNewPageForm: () => any;
    startIconMakerUpload: (fileMetaProps: any, uploadSettings: any) => any;
    startMediaUpload: (tabContext: any, fileMetaProps: any) => any;
    createMediaServerSession: () => any;
    mediaUploadComplete: (error: any, uploadData: any) => any;
    fetchInitialDocs: () => any;
    fetchNextDocs: () => any;
    fetchInitialMedia: () => any;
    fetchNextMedia: () => any;
    updateMediaObject: (new_values: any) => any;
    onChangeContext: (newContext: any) => any;
    onChangeSearchString: (searchString: any) => any;
    onChangeSortBy: (sortBy: any) => any;
    onAllFilesLoading: (isLoading: any) => any;
};
