export function asImageEmbed($element: any): {
    $element: any;
    type: string;
    appliedWidth: number | null;
    appliedHeight: number | null;
    naturalWidth: any;
    naturalHeight: any;
    appliedPercentage: number;
    usePercentageUnits: boolean;
    altText: any;
    isDecorativeImage: boolean;
    url: any;
} | null;
export function asLink($element: any, editor: any): {
    $element: any;
    displayAs: string;
    text: any;
    onlyTextSelected: boolean;
    type: string;
    isPreviewable: any;
    url: any;
    contentType: any;
    fileName: any;
    published: boolean;
} | null;
export function asVideoElement($element: any): {
    $element: any;
    type: string;
    id: any;
    titleText: any;
    appliedHeight: any;
    appliedWidth: any;
    naturalHeight: any;
    naturalWidth: any;
    source: any;
} | null;
export function asAudioElement($element: any): {
    titleText: any;
    id: any;
} | null;
export function getContentFromElement($element: any, editor: any): {
    $element: any;
    type: string;
};
export function getContentFromEditor(editor: any, expandSelection?: boolean): {
    $element: any;
    type: string;
};
export function getLinkContentFromEditor(editor: any): {
    $element: any;
    displayAs: string;
    text: any;
    onlyTextSelected: boolean;
    type: string;
    isPreviewable: any;
    url: any;
    contentType: any;
    fileName: any;
    published: boolean;
} | null;
export function isFileLink($element: any, editor: any): boolean;
export function isImageEmbed($element: any): boolean;
export function isVideoElement($element: any): boolean;
export function isAudioElement($element: any): boolean;
export function findMediaPlayerIframe(elem: any): any;
export const LINK_TYPE: "link";
export const FILE_LINK_TYPE: "file-link";
export const IMAGE_EMBED_TYPE: "image-embed";
export const VIDEO_EMBED_TYPE: "video-embed";
export const TEXT_TYPE: "text";
export const NONE_TYPE: "none";
export const DISPLAY_AS_LINK: "link";
export const DISPLAY_AS_EMBED: "embed";
export const DISPLAY_AS_EMBED_DISABLED: "embed-disabled";
export const DISPLAY_AS_DOWNLOAD_LINK: "download-link";
