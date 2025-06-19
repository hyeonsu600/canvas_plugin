declare function AudioOptionsTray({ open, onEntered, onExited, onDismiss, onSave, trayProps, audioOptions, requestSubtitlesFromIframe, }: {
    open: any;
    onEntered: any;
    onExited: any;
    onDismiss: any;
    onSave: any;
    trayProps: any;
    audioOptions: any;
    requestSubtitlesFromIframe: any;
}): React.JSX.Element;
declare namespace AudioOptionsTray {
    namespace propTypes {
        export { func as onEntered };
        export { func as onExited };
        export { func as onDismiss };
        export { func as onSave };
        export let open: import("prop-types").Validator<boolean>;
        export { func as requestSubtitlesFromIframe };
        export let trayProps: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
            host: import("prop-types").Validator<string>;
            jwt: import("prop-types").Validator<string>;
        }>>>;
        export let audioOptions: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
            id: import("prop-types").Validator<string>;
            titleText: import("prop-types").Validator<string>;
            tracks: import("prop-types").Requireable<(import("prop-types").InferProps<{
                locale: import("prop-types").Validator<string>;
            }> | null | undefined)[]>;
        }>>>;
    }
    namespace defaultProps {
        let onEntered: null;
        let onExited: null;
        let onDismiss: null;
        let onSave: null;
        function requestSubtitlesFromIframe(): void;
    }
}
export default AudioOptionsTray;
import React from 'react';
import { func } from 'prop-types';
