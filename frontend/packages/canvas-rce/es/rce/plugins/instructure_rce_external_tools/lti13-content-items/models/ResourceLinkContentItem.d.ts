import BaseLinkContentItem from './BaseLinkContentItem';
import { ResourceLinkContentItemJson } from '../Lti13ContentItemJson';
import { RceLti13ContentItemContext } from '../RceLti13ContentItem';
export default class ResourceLinkContentItem extends BaseLinkContentItem<ResourceLinkContentItemJson> {
    static readonly type = "ltiResourceLink";
    constructor(json: ResourceLinkContentItemJson, context: RceLti13ContentItemContext);
    toHtmlString(): string | undefined;
    buildUrl(): string | null;
}
