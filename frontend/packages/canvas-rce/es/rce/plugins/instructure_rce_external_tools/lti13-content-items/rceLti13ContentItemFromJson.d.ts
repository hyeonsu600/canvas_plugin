import { Lti13ContentItemJson } from './Lti13ContentItemJson';
import { RceLti13ContentItem, RceLti13ContentItemContext } from './RceLti13ContentItem';
/**
 * Creates an RceLti13ContentItem from the given JSON, or null if the type isn't supported.
 *
 * Note: this function would ideally be a static member of RceLti13ContentItem, but that creates a circular dependency
 *       with the implementations of the base class, so it needs to be in a separate module.
 *
 * @param itemJson
 * @param context
 */
export declare function rceLti13ContentItemFromJson<TJson extends Lti13ContentItemJson>(itemJson: TJson, context: RceLti13ContentItemContext): RceLti13ContentItem<TJson> | null;
