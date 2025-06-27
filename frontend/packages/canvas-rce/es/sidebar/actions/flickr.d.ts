export function startFlickrSearch(term: any): {
    type: string;
    term: any;
};
export function receiveFlickrResults(results: any): {
    type: string;
    results: any;
};
export function failFlickrSearch(error: any): {
    type: string;
    error: any;
};
export function openOrCloseFlickrForm(): {
    type: string;
};
export function searchFlickr(term: any): (dispatch: any, getState: any) => any;
export const START_FLICKR_SEARCH: "START_FLICKR_SEARCH";
export const RECEIVE_FLICKR_RESULTS: "RECEIVE_FLICKR_RESULTS";
export const FAIL_FLICKR_SEARCH: "FAIL_FLICKR_SEARCH";
export const TOGGLE_FLICKR_FORM: "TOGGLE_FLICKR_FORM";
