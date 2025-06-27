export default function folderReducer(state: {
    id: null;
    name: null;
    loadingCount: number;
    loading: boolean;
    requested: boolean;
    expanded: boolean;
    filesUrl: null;
    foldersUrl: null;
    parentId: null;
    fileIds: never[];
    folderIds: never[];
} | undefined, action: any): {
    id: any;
    name: any;
    parentId: any;
    filesUrl: any;
    foldersUrl: any;
    loadingCount: number;
    loading: boolean;
    requested: boolean;
    expanded: boolean;
    fileIds: never[];
    folderIds: never[];
};
