import { Lti13ContentItemJson } from './Lti13ContentItemJson';
/**
 * Represents an LTI 1.3 Deep Linking Content Item for purposes related to the Rich Content Editor.
 *
 * Use rceLti13ContentItemFromJson to create instances of this class.
 */
export declare abstract class RceLti13ContentItem<TJson extends object> {
    readonly type: Lti13ContentItemJson['type'];
    readonly json: TJson;
    readonly context: RceLti13ContentItemContext;
    constructor(type: Lti13ContentItemJson['type'], json: TJson, context: RceLti13ContentItemContext);
    abstract buildTitle(): string | null | undefined;
    abstract buildText(): string | null | undefined;
    abstract buildUrl(): string | null | undefined;
    abstract toHtmlString(): any;
    private get untypedJson();
    linkThumbnail(): string | undefined;
    iframeTag(): string | undefined;
    imageTag(src: string, width?: string | number | null, height?: string | number | null): string;
    anchorTag(innerHTML: string | null | undefined): string;
    get safeUrl(): string;
}
export interface RceLti13ContentItemClass<T extends Lti13ContentItemJson> {
    new (json: T, context: RceLti13ContentItemContext): RceLti13ContentItem<T>;
}
export interface RceLti13ContentItemContext {
    ltiIframeAllowPolicy: string | null;
    containingCanvasLtiToolId: string | null;
    ltiEndpoint: string | null;
    selection: string | null;
}
