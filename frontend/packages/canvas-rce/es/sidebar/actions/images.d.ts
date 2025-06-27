export function createAddImage({ id, filename, display_name, url, thumbnail_url }: {
    id: any;
    filename: any;
    display_name: any;
    url: any;
    thumbnail_url: any;
}, contextType: any): {
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
};
export function requestInitialImages(contextType: any): {
    type: string;
    payload: {
        contextType: any;
    };
};
export function requestImages(contextType: any): {
    type: string;
    payload: {
        contextType: any;
    };
};
export function receiveImages({ response, contextType, opts }: {
    response: any;
    contextType: any;
    opts?: {} | undefined;
}): {
    type: string;
    payload: {
        files: any;
        bookmark: any;
        contextType: any;
        searchString: any;
    };
};
export function failImagesLoad({ error, contextType }: {
    error: any;
    contextType: any;
}): {
    type: string;
    payload: {
        error: any;
        contextType: any;
    };
};
export function fetchImages(opts?: {}): (dispatch: any, getState: any) => any;
export function fetchNextImages(opts?: {}): (dispatch: any, getState: any) => any;
export function fetchInitialImages(opts?: {}): (dispatch: any, getState: any) => any;
export const ADD_IMAGE: "action.images.add_image";
export const REQUEST_INITIAL_IMAGES: "action.images.request_initial_images";
export const REQUEST_IMAGES: "action.images.request_images";
export const RECEIVE_IMAGES: "action.images.receive_images";
export const FAIL_IMAGES_LOAD: "action.images.fail_images_load";
export function applyAttributes(file: any, opts: any): any;
