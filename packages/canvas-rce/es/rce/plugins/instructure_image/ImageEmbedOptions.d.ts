export function fromImageEmbed($element: any): {
    appliedWidth: number | null;
    appliedHeight: number | null;
    naturalWidth: any;
    naturalHeight: any;
    appliedPercentage: number;
    usePercentageUnits: boolean;
    altText: any;
    isDecorativeImage: boolean;
    url: any;
};
export function fromVideoEmbed($element: any): {
    titleText: any;
    appliedHeight: any;
    appliedWidth: any;
    naturalHeight: any;
    naturalWidth: any;
    source: any;
};
export function scaleImageForHeight(naturalWidth: any, naturalHeight: any, targetHeight: any): {
    height: number;
    width: number;
} | {
    height: null;
    width: null;
};
export function scaleImageForWidth(naturalWidth: any, naturalHeight: any, targetWidth: any): {
    height: number;
    width: number;
} | {
    height: null;
    width: null;
};
export function scaleToSize(imageSize: any, naturalWidth: any, naturalHeight: any): {
    width: any;
    height: any;
};
export function scaleVideoSize(videoSize: any, naturalWidth: any, naturalHeight: any): {
    width: any;
    height: any;
};
export function labelForImageSize(imageSize: any): string;
export const MIN_HEIGHT: 10;
export const MIN_WIDTH: 10;
export const MIN_WIDTH_VIDEO: 320;
export const MIN_PERCENTAGE: 10;
export const SMALL: "small";
export const MEDIUM: "medium";
export const LARGE: "large";
export const EXTRA_LARGE: "extra-large";
export const CUSTOM: "custom";
export const imageSizes: string[];
export const videoSizes: string[];
export const studioPlayerSizes: string[];
export const MIN_WIDTH_STUDIO_PLAYER: number;
export const MIN_HEIGHT_STUDIO_PLAYER: number;
