export declare function absoluteToRelativeUrl(url: string, canvasOrigin?: string): string;
export declare function downloadToWrap(url: string): string;
export declare function fixupFileUrl(contextType: string, contextId: string | number, fileInfo: {
    href?: string;
    url?: string;
    uuid?: string;
}, canvasOrigin?: string): {
    href?: string;
    url?: string;
    uuid?: string;
};
export declare function prepEmbedSrc(url: string, canvasOrigin?: string): string;
export declare function prepLinkedSrc(url: string): string;
