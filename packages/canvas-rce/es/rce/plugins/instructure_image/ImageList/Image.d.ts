declare function Image({ focusRef, image, onClick, isIconMaker, canvasOrigin }: {
    focusRef: any;
    image: any;
    onClick: any;
    isIconMaker: any;
    canvasOrigin: any;
}): React.JSX.Element;
declare namespace Image {
    namespace propTypes {
        export let focusRef: import("prop-types").Requireable<import("prop-types").InferProps<{
            current: import("prop-types").Requireable<Element>;
        }>>;
        export let image: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
            display_name: import("prop-types").Validator<string>;
            filename: import("prop-types").Requireable<string>;
            href: import("prop-types").Validator<string>;
            id: import("prop-types").Requireable<NonNullable<string | number | null | undefined>>;
            preview_url: import("prop-types").Requireable<string>;
            thumbnail_url: import("prop-types").Validator<string>;
        }>>>;
        export let onClick: import("prop-types").Validator<(...args: any[]) => any>;
        export { bool as isIconMaker };
        export let canvasOrigin: import("prop-types").Validator<string>;
    }
    namespace defaultProps {
        let focusRef_1: null;
        export { focusRef_1 as focusRef };
        export let isIconMaker: boolean;
    }
}
export default Image;
import React from 'react';
import { bool } from 'prop-types';
