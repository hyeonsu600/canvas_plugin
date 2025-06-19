export function requestInitialPage(key: any, cancel: any, searchString: any): {
    type: string;
    key: any;
    cancel: any;
    searchString: any;
};
export function requestPage(key: any, cancel: any): {
    type: string;
    key: any;
    cancel: any;
};
export function receivePage(key: any, page: any): {
    type: string;
    key: any;
    links: any;
    bookmark: any;
};
export function failPage(key: any, error: any): {
    type: string;
    key: any;
    error: any;
};
export function fetchPage(key: any, isInitial: any, searchString: any): (dispatch: any, getState: any) => any;
export function fetchNextPage(key: any): (dispatch: any, getState: any) => any;
export function fetchInitialPage(key: any): (dispatch: any, getState: any) => any;
export const REQUEST_INITIAL_PAGE: "REQUEST_INITIAL_PAGE";
export const REQUEST_PAGE: "REQUEST_PAGE";
export const RECEIVE_PAGE: "RECEIVE_PAGE";
export const FAIL_PAGE: "FAIL_PAGE";
