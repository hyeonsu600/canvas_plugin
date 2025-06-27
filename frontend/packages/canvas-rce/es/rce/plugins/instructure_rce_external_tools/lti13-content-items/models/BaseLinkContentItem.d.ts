import { RceLti13ContentItem } from '../RceLti13ContentItem';
import { BaseLinkContentItemJson } from '../Lti13ContentItemJson';
export default class BaseLinkContentItem<TJson extends BaseLinkContentItemJson> extends RceLti13ContentItem<TJson> {
    toHtmlString(): string | undefined;
    linkText(): string | undefined;
    linkBody(): string | undefined;
    buildText(): string | null | undefined;
    buildUrl(): string | null | undefined;
    buildTitle(): string | null | undefined;
    get icon(): unknown;
    get thumbnail(): unknown;
    get iframe(): import("../../../../../util/DeepPartialNullable").DeepPartialNullable<import("../../../../../util/DeepPartialNullable").DeepPartialNullable<{
        src: string;
        width: number | string;
        height: number | string;
    }>> | null | undefined;
    get custom(): unknown;
    get lookup_uuid(): string | null | undefined;
}
