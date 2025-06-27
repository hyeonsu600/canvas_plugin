export function startLoading(): {
    type: string;
};
export function stopLoading(): {
    type: string;
};
export function receiveFolder({ id, name, parentId }: {
    id: any;
    name: any;
    parentId: any;
}): {
    type: string;
    id: any;
    name: any;
    parentId: any;
};
export function failFoldersLoad(error: any): {
    type: string;
    error: any;
};
export function failMediaUpload(error: any): {
    type: string;
    error: any;
};
export function mediaUploadSuccess(): {
    type: string;
};
export function startUpload(fileMetaProps: any): {
    type: string;
    file: any;
};
export function failUpload(error: any): {
    type: string;
    error: any;
};
export function quotaExceeded(error: any): {
    type: string;
    error: any;
};
export function completeUpload(results: any): {
    type: string;
    results: any;
};
export function openOrCloseUploadForm(): {
    type: string;
};
export function processedFolderBatch({ folders }: {
    folders: any;
}): {
    type: string;
    folders: any;
};
export function startMediaUploading(fileMetaProps: any): {
    type: string;
    payload: any;
};
export function stopMediaUploading(): {
    type: string;
};
export function activateMediaUpload(fileMetaProps: any): (dispatch: any) => void;
export function removePlaceholdersFor(name: any): (dispatch: any) => void;
export function allUploadCompleteActions(results: any, fileMetaProps: any, contextType: any): ({
    type: string;
    payload: {
        newImage: {
            id: any;
            filename: any;
            display_name: any;
            preview_url: any;
            thumbnail_url: any;
        };
        contextType: any;
    };
} | {
    type: string;
    id: any;
    name: any;
    url: any;
    embed: any;
    fileType: any;
} | {
    type: string;
    id: any;
    fileId: any;
} | {
    type: string;
    results: any;
})[];
export function embedUploadResult(results: any, selectedTabType: any): any;
export function fetchFolders(bookmark: any): (dispatch: any, getState: any) => any;
export function mediaUploadComplete(error: any, uploadData: any): (dispatch: any, _getState: any) => void;
export function createMediaServerSession(): (dispatch: any, getState: any) => any;
export function uploadToIconMakerFolder(svg: any, uploadSettings?: {}): (_dispatch: any, getState: any) => any;
export function uploadToMediaFolder(tabContext: any, fileMetaProps: any): (dispatch: any, getState: any) => any;
export function setUsageRights(source: any, fileMetaProps: any, results: any): any;
export function getFileUrlIfMissing(source: any, results: any): any;
export function generateThumbnailUrl(results: any, fileDOMObject: any, reader: any): Promise<any>;
export function setAltText(altText: any, results: any): any;
export function handleFailures(error: any, dispatch: any): any;
export function uploadPreflight(tabContext: any, fileMetaProps: any): (dispatch: any, getState: any) => Promise<any>;
export const COMPLETE_FILE_UPLOAD: "COMPLETE_FILE_UPLOAD";
export const FAIL_FILE_UPLOAD: "FAIL_FILE_UPLOAD";
export const FAIL_FOLDERS_LOAD: "FAIL_FOLDERS_LOAD";
export const FAIL_MEDIA_UPLOAD: "FAIL_MEDIA_UPLOAD";
export const MEDIA_UPLOAD_SUCCESS: "MEDIA_UPLOAD_SUCCESS";
export const PROCESSED_FOLDER_BATCH: "PROCESSED_FOLDER_BATCH";
export const QUOTA_EXCEEDED_UPLOAD: "QUOTA_EXCEEDED_UPLOAD";
export const RECEIVE_FOLDER: "RECEIVE_FOLDER";
export const START_FILE_UPLOAD: "START_FILE_UPLOAD";
export const START_LOADING: "START_LOADING";
export const START_MEDIA_UPLOADING: "START_MEDIA_UPLOADING";
export const STOP_LOADING: "STOP_LOADING";
export const STOP_MEDIA_UPLOADING: "STOP_MEDIA_UPLOADING";
export const TOGGLE_UPLOAD_FORM: "TOGGLE_UPLOAD_FORM";
