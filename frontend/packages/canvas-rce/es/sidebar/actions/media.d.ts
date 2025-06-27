export function requestInitialMedia(contextType: any): {
    type: string;
    payload: {
        contextType: any;
    };
};
export function requestMedia(contextType: any): {
    type: string;
    payload: {
        contextType: any;
    };
};
export function receiveMedia({ response, contextType }: {
    response: any;
    contextType: any;
}): {
    type: string;
    payload: {
        files: any;
        bookmark: any;
        contextType: any;
    };
};
export function failMedia({ error, contextType }: {
    error: any;
    contextType: any;
}): {
    type: string;
    payload: {
        error: any;
        contextType: any;
    };
};
export function fetchMedia(): (dispatch: any, getState: any) => any;
export function fetchNextMedia(): (dispatch: any, getState: any) => any;
export function fetchInitialMedia(): (dispatch: any, getState: any) => any;
export function updateMediaObject({ media_object_id, attachment_id, title, subtitles }: {
    media_object_id: any;
    attachment_id: any;
    title: any;
    subtitles: any;
}): (dispatch: any, getState: any) => Promise<[any, any]>;
export const REQUEST_INITIAL_MEDIA: "REQUEST_INITIAL_MEDIA";
export const REQUEST_MEDIA: "REQUEST_MEDIA";
export const RECEIVE_MEDIA: "RECEIVE_MEDIA";
export const FAIL_MEDIA: "FAIL_MEDIA";
