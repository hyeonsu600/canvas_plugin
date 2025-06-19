declare function ImageList({ images, lastItemRef, onImageClick, isIconMaker, canvasOrigin }: {
    images: any;
    lastItemRef: any;
    onImageClick: any;
    isIconMaker: any;
    canvasOrigin: any;
}): React.JSX.Element;
declare namespace ImageList {
    namespace propTypes {
        export let images: import("prop-types").Requireable<NonNullable<import("prop-types").InferProps<{
            display_name: import("prop-types").Validator<string>;
            filename: import("prop-types").Requireable<string>;
            href: import("prop-types").Validator<string>;
            id: import("prop-types").Requireable<NonNullable<string | number | null | undefined>>;
            preview_url: import("prop-types").Requireable<string>;
            thumbnail_url: import("prop-types").Validator<string>;
        }>>[]>;
        export let lastItemRef: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
            current: import("prop-types").Requireable<Element>;
        }>>>;
        export let onImageClick: import("prop-types").Validator<(...args: any[]) => any>;
        export { bool as isIconMaker };
        export let canvasOrigin: import("prop-types").Validator<string>;
    }
    namespace defaultProps {
        let images_1: never[];
        export { images_1 as images };
        export let isIconMaker: boolean;
    }
}
export default ImageList;
import React from 'react';
import { bool } from 'prop-types';
