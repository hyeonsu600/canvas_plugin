import { RceLti13ContentItem, RceLti13ContentItemContext } from '../RceLti13ContentItem';
import { HtmlFragmentContentItemJson } from '../Lti13ContentItemJson';
export default class HtmlFragmentContentItem extends RceLti13ContentItem<HtmlFragmentContentItemJson> {
    static readonly type = "html";
    constructor(json: HtmlFragmentContentItemJson, context: RceLti13ContentItemContext);
    get html(): string | null | undefined;
    buildTitle(): string | null | undefined;
    buildText(): string | null | undefined;
    buildUrl(): undefined;
    toHtmlString(): string | null | undefined;
}
