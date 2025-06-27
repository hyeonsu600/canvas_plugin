declare function ImageOptionsTray(props: any): React.JSX.Element;
declare namespace ImageOptionsTray {
    namespace propTypes {
        export let imageOptions: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
            altText: import("prop-types").Validator<string>;
            appliedHeight: import("prop-types").Requireable<number>;
            appliedWidth: import("prop-types").Requireable<number>;
            isDecorativeImage: import("prop-types").Validator<boolean>;
            isLinked: import("prop-types").Requireable<boolean>;
            naturalHeight: import("prop-types").Validator<number>;
            naturalWidth: import("prop-types").Validator<number>;
        }>>>;
        export { func as onEntered };
        export { func as onExited };
        export let onRequestClose: import("prop-types").Validator<(...args: any[]) => any>;
        export let onSave: import("prop-types").Validator<(...args: any[]) => any>;
        export let open: import("prop-types").Validator<boolean>;
        export { bool as isIconMaker };
    }
    namespace defaultProps {
        let onEntered: null;
        let onExited: null;
        let isIconMaker: boolean;
    }
}
export default ImageOptionsTray;
import React from 'react';
import { func } from 'prop-types';
import { bool } from 'prop-types';
