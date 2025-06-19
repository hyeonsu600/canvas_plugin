export function canCompressImage(): boolean;
export function shouldCompressImage({ type, size }: {
    type: any;
    size: any;
}): boolean;
export function compressImage({ encodedImage, previewWidth, previewHeight }: {
    encodedImage: any;
    previewWidth: any;
    previewHeight: any;
}): Promise<any>;
export const MAX_IMAGE_SIZE_BYTES: number;
