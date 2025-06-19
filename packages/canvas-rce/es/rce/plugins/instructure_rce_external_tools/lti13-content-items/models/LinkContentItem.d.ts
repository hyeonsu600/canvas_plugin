import BaseLinkContentItem from './BaseLinkContentItem';
import { RceLti13ContentItemContext } from '../RceLti13ContentItem';
import { LinkContentItemJson } from '../Lti13ContentItemJson';
export default class LinkContentItem extends BaseLinkContentItem<LinkContentItemJson> {
    static readonly type = "link";
    constructor(json: LinkContentItemJson, context: RceLti13ContentItemContext);
}
