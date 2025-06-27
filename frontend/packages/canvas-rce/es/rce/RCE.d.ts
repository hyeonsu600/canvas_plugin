import React from 'react';
import RCEWrapper from './RCEWrapper';
import type { ExternalToolsConfig, LtiToolsPropType } from './RCEWrapperProps';
import { RCEVariant } from './RCEVariants';
import '@instructure/canvas-theme';
import type { Editor } from 'tinymce';
import type { EditorOptions, RCETrayProps } from './types';
declare const RCE: React.ForwardRefExoticComponent<RCEPropTypes & React.RefAttributes<RCEWrapper>>;
export interface RCEPropTypes {
    /**
     * do you want the rce to autosave content to localStorage, and
     * how long should it be until it's deleted.
     * If autosave is enabled, call yourRef.RCEClosed() if the user
     * exits the page normally (e.g. via Cancel or Save)
     */
    autosave?: {
        enabled?: boolean;
        maxAge?: number;
        interval?: number;
    };
    /**
     * the protocol://domain:port for this RCE's canvas
     */
    canvasOrigin?: string;
    /**
     * the initial content
     */
    defaultContent?: string;
    /**
     * tinymce configuration. See defaultTinymceConfig for all the defaults
     * and RCEWrapper.EditorOptions for stuff you may want to include
     */
    editorOptions?: EditorOptions;
    /**
     * there's an open bug when RCE is rendered in a Modal form
     * and the user navigates to the KB Shortcut Helper Button using
     * Apple VoiceOver navigation keys (VO+arrows)
     * as a workaround, the KB Shortcut Helper Button may be supressed
     * setting renderKBShortcutModal to false
     */
    renderKBShortcutModal?: boolean;
    /**
     * height of the RCE. if a number, in px
     */
    height?: number | string;
    /**
     * array of URLs to high-contrast css
     */
    highContrastCSS?: string[];
    /**
     * if true, do not load the plugin that provides the media toolbar and menu items
     */
    instRecordDisabled?: boolean;
    /**
     * locale of the user's language
     */
    language?: string;
    /**
     * function that returns the element where screenreader alerts go
     */
    liveRegion?: () => HTMLElement | null | undefined;
    /**
     * array of lti tools available to the user
     * {id, favorite} are all that's required, ther fields are ignored
     */
    ltiTools?: LtiToolsPropType;
    /**
     * The maximum number of RCEs that will render on page load.
     * Any more than this will be deferred until it is nearly
     * scrolled into view.
     * if isNaN or <=0, render them all
     */
    maxInitRenderedRCEs?: number;
    /**
     * name:value pairs of attributes to add to the textarea
     * tinymce creates as the backing store of the RCE
     */
    mirroredAttrs?: {
        [key: string]: string;
    };
    /**
     * is this RCE readonly?
     */
    readOnly?: boolean;
    /**
     * id put on the generated textarea
     */
    textareaId: string;
    /**
     * class name added to the generated textarea
     */
    textareaClassName?: string;
    /**
     * properties necessary for the RCE to us the RCS
     * if missing, RCE features that require the RCS are omitted
     */
    rcsProps?: RCETrayProps;
    /**
     * enable the custom icon maker feature (temporary until the feature is forced on)
     */
    use_rce_icon_maker?: boolean;
    /**
     * record of feature statuses from containing page
     */
    features?: {
        [key: string]: boolean;
    };
    /**
     * configurable default timeout value for flash alerts
     */
    flashAlertTimeout?: number;
    /**
     * user's timezone
     */
    timezone?: string;
    /**
     * RCE variant. See RCEVariants.ts for details
     */
    variant?: RCEVariant;
    /**
     * user's cache key to be used to encrypt and decrypt autosaved content
     */
    userCacheKey?: string;
    onFocus?: (rce: RCEWrapper) => void;
    onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
    onInit?: (editor: Editor) => void;
    onContentChange?: (content: string) => void;
    externalToolsConfig?: ExternalToolsConfig;
}
export default RCE;
