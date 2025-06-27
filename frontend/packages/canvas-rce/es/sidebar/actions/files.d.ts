export function createToggle(id: any): {
    type: string;
    id: any;
};
export function createAddFile({ id, name, url, type, embed }: {
    id: any;
    name: any;
    url: any;
    type: any;
    embed: any;
}): {
    type: string;
    id: any;
    name: any;
    url: any;
    embed: any;
    fileType: any;
};
export function createRequestFiles(id: any): {
    type: string;
    id: any;
};
export function createReceiveFiles(id: any, files: any): {
    type: string;
    id: any;
    fileIds: any;
};
export function createInsertFile(id: any, fileId: any): {
    type: string;
    id: any;
    fileId: any;
};
export function requestFiles(id: any, bookmark: any): (dispatch: any, getState: any) => any;
export function createAddFolder(folder: any): {
    type: string;
    id: any;
    name: any;
    parentId: any;
    filesUrl: any;
    foldersUrl: any;
};
export function createRequestSubfolders(id: any): {
    type: string;
    id: any;
};
export function createReceiveSubfolders(id: any, folders: any): {
    type: string;
    id: any;
    folderIds: any;
};
export function requestSubfolders(id: any, bookmark: any): (dispatch: any, getState: any) => any;
export function toggle(id: any): (dispatch: any, getState: any) => void;
export function createSetRoot(id: any): {
    type: string;
    id: any;
};
export function init(dispatch: any, getState: any): any;
export const ADD_FILE: "action.files.add_file";
export const ADD_FOLDER: "action.files.add_folder";
export const RECEIVE_FILES: "action.files.receive_files";
export const INSERT_FILE: "action.files.insert_file";
export const RECEIVE_SUBFOLDERS: "action.files.receive_subfolders";
export const REQUEST_FILES: "action.files.request_files";
export const REQUEST_SUBFOLDERS: "action.files.request_subfolders";
export const TOGGLE: "action.files.toggle";
export const SET_ROOT: "action.files.set_root";
