import { DeepPartialNullable } from '../../../../util/DeepPartialNullable';
import { ExternalToolsEnv } from '../ExternalToolsEnv';
import { StudioContentItemCustomJson } from '../../shared/StudioLtiSupportUtils';
export declare class RceLti11ContentItem {
    readonly contentItem: RceLti11ContentItemJson;
    readonly env: ExternalToolsEnv;
    static fromJSON(contentItem: RceLti11ContentItemJson, env?: ExternalToolsEnv): RceLti11ContentItem;
    constructor(contentItem: RceLti11ContentItemJson, env?: ExternalToolsEnv);
    get text(): string | null | undefined;
    get isLTI(): boolean;
    get isOverriddenForThumbnail(): boolean | null | undefined;
    get isImage(): boolean;
    get linkClassName(): string;
    get url(): string | undefined;
    get linkTarget(): string | null;
    get docTarget(): string | undefined;
    get codePayload(): string;
    private get containingCanvasLtiToolId();
    private get currentTinyMceSelection();
    private generateCodePayloadIframe;
    private generateCodePayloadEmbed;
    private generateCodePayloadText;
    private generateCodePayloadLink;
    private generateLinkHtml;
}
/**
 * Declare the global tinyMCE information used to pass editor context around in Canvas.
 *
 * Eventually, this should be moved into packages/canvas-rce.
 */
declare global {
    interface Window {
        tinyMCE?: {
            activeEditor?: {
                selection: {
                    getContent(): string;
                };
            };
        } | null;
    }
}
/**
 * Interface for content items that come from external tool resource selection.
 *
 * Note that this interface may not be exhaustive, but provides types for the portion of ContentItem used by Canvas.
 * Additionally, there are some extra properties present here used by canvas
 *
 * See https://www.imsglobal.org/spec/lti-dl/v2p0#content-item-types
 * and https://www.imsglobal.org/lti/model/mediatype/application/vnd/ims/lti/v1/contentitems%2Bjson/index.html
 * and https://www.imsglobal.org/lti/model/mediatype/application/vnd/ims/lti/v1/contentitems%2Bjson/context.json
 */
export type RceLti11ContentItemJson = DeepPartialNullable<{
    '@type': 'ContentItem' | 'LtiLinkItem' | 'FileItem' | 'LtiLink' | string;
    '@id': string;
    mediaType: string;
    text: string;
    title: string;
    url: string;
    thumbnail: {
        '@id': string;
        height: number | string;
        width: number | string;
    };
    placementAdvice: {
        displayHeight: number | string;
        displayWidth: number | string;
        presentationDocumentTarget: 'window' | 'embed' | 'iframe' | string;
    };
    canvasURL: string;
    class: string;
    custom: StudioContentItemCustomJson | unknown;
}>;
