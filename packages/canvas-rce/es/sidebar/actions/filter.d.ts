export function changeContext({ contextType, contextId }: {
    contextType: any;
    contextId: any;
}): (dispatch: any) => void;
export function changeContextType(contextType: any): {
    type: string;
    payload: any;
};
export function changeContextId(contextId: any): {
    type: string;
    payload: any;
};
export function changeSearchString(searchString: any): {
    type: string;
    payload: any;
};
export function changeSortBy(sortBy: any): {
    type: string;
    payload: any;
};
export const CHANGE_CONTEXT: "CHANGE_CONTEXT";
export const CHANGE_CONTEXT_TYPE: "CHANGE_CONTEXT_TYPE";
export const CHANGE_CONTEXT_ID: "CHANGE_CONTEXT_ID";
export const CHANGE_SEARCH_STRING: "CHANGE_SEARCH_STRING";
export const CHANGE_SORT_BY: "CHANGE_SORT_BY";
