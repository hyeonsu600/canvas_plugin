import { RceLti13ContentItem, RceLti13ContentItemContext } from '../RceLti13ContentItem';
import { ImageContentItemJson } from '../Lti13ContentItemJson';
export default class ImageContentItem extends RceLti13ContentItem<ImageContentItemJson> {
    static readonly type = "image";
    constructor(json: ImageContentItemJson, context: RceLti13ContentItemContext);
    buildUrl(): string | null | undefined;
    buildTitle(): string | null | undefined;
    get thumbnail(): string | import("../../../../../util/DeepPartialNullable").DeepPartialNullable<{
        url: string;
        width: number | string;
        height: number | string;
    }> | null | undefined;
    buildText(): string | null | undefined;
    get width(): string | number | null | undefined;
    get height(): string | number | null | undefined;
    toHtmlString(): string;
}
