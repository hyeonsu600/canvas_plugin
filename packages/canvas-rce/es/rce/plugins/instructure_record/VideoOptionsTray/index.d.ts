declare function VideoOptionsTray({ videoOptions, onRequestClose, onSave, open, trayProps, requestSubtitlesFromIframe, onEntered, onExited, id, studioOptions, forBlockEditorUse, }: {
    videoOptions: any;
    onRequestClose: any;
    onSave: any;
    open: any;
    trayProps: any;
    requestSubtitlesFromIframe?: (() => void) | undefined;
    onEntered?: null | undefined;
    onExited?: null | undefined;
    id?: string | undefined;
    studioOptions?: null | undefined;
    forBlockEditorUse?: boolean | undefined;
}): React.JSX.Element;
declare namespace VideoOptionsTray {
    namespace propTypes {
        export let videoOptions: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
            titleText: import("prop-types").Requireable<string>;
            appliedHeight: import("prop-types").Requireable<number>;
            appliedWidth: import("prop-types").Requireable<number>;
            naturalHeight: import("prop-types").Validator<number>;
            naturalWidth: import("prop-types").Validator<number>;
            tracks: import("prop-types").Requireable<(import("prop-types").InferProps<{
                locale: import("prop-types").Validator<string>;
                inherited: import("prop-types").Requireable<boolean>;
            }> | null | undefined)[]>;
        }>>>;
        export { func as onEntered };
        export { func as onExited };
        export let onRequestClose: import("prop-types").Validator<(...args: any[]) => any>;
        export let onSave: import("prop-types").Validator<(...args: any[]) => any>;
        export let open: import("prop-types").Validator<boolean>;
        export let trayProps: import("prop-types").Requireable<import("prop-types").InferProps<{
            host: import("prop-types").Validator<string>;
            jwt: import("prop-types").Validator<string>;
        }>>;
        export { string as id };
        export { parsedStudioOptionsPropType as studioOptions };
        export { func as requestSubtitlesFromIframe };
    }
}
export default VideoOptionsTray;
import React from 'react';
import { func } from 'prop-types';
import { string } from 'prop-types';
import { parsedStudioOptionsPropType } from '../../shared/StudioLtiSupportUtils';
