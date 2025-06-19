import { DeepPartialNullable } from '../../../../util/DeepPartialNullable';
export type Lti13ContentItemJson = HtmlFragmentContentItemJson | ImageContentItemJson | LinkContentItemJson | ResourceLinkContentItemJson | UnknownContentItemJson;
export type UnknownContentItemJson = DeepPartialNullable<{
    type: string;
    [key: string]: any;
}>;
export type HtmlFragmentContentItemJson = DeepPartialNullable<{
    type: 'html';
    html: string;
    title: string;
    text: string;
}>;
export type ImageContentItemJson = DeepPartialNullable<{
    type: 'image';
    url: string;
    title: string;
    thumbnail: ContentItemThumbnailJson | string;
    text: string;
    width: number | string;
    height: number | string;
}>;
export type BaseLinkContentItemJson = DeepPartialNullable<{
    type: 'link' | 'ltiResourceLink';
    url: string;
    title: string;
    text: string;
    icon: unknown;
    thumbnail: unknown;
    iframe: ContentItemIframeJson;
    custom: unknown;
    lookup_uuid: string;
}>;
export type LinkContentItemJson = DeepPartialNullable<BaseLinkContentItemJson & {
    type: 'link';
}>;
export type ResourceLinkContentItemJson = DeepPartialNullable<BaseLinkContentItemJson & {
    type: 'ltiResourceLink';
    lookup_uuid: string;
}>;
export type ContentItemThumbnailJson = DeepPartialNullable<{
    url: string;
    width: number | string;
    height: number | string;
}>;
export declare function isContentItemThumbnailJson(input: any): input is ContentItemThumbnailJson & {
    url: string;
};
export type ContentItemIframeJson = DeepPartialNullable<{
    src: string;
    width: number | string;
    height: number | string;
}>;
export declare function isContentItemIframeJson(input: any): input is ContentItemIframeJson & {
    src: string;
};
