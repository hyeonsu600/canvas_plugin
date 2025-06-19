export function requestInitialDocs(contextType: any): {
    type: string;
    payload: {
        contextType: any;
    };
};
export function requestDocs(contextType: any): {
    type: string;
    payload: {
        contextType: any;
    };
};
export function receiveDocs({ response, contextType, contextId }: {
    response: any;
    contextType: any;
    contextId: any;
}): {
    type: string;
    payload: {
        files: any;
        bookmark: any;
        contextType: any;
        contextId: any;
    };
};
export function failDocs({ error, contextType }: {
    error: any;
    contextType: any;
}): {
    type: string;
    payload: {
        error: any;
        contextType: any;
    };
};
export function fetchDocs(): (dispatch: any, getState: any) => any;
export function fetchNextDocs(): (dispatch: any, getState: any) => any;
export function fetchInitialDocs(): (dispatch: any, getState: any) => any;
export const REQUEST_INITIAL_DOCS: "REQUEST_INITIAL_DOCS";
export const REQUEST_DOCS: "REQUEST_NEXT_DOCS";
export const RECEIVE_DOCS: "RECEIVE_DOCS";
export const FAIL_DOCS: "FAIL_DOCS";
