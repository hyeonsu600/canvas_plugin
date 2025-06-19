declare function Images(props: any): React.JSX.Element;
declare namespace Images {
    namespace propTypes {
        export let fetchInitialImages: import("prop-types").Validator<(...args: any[]) => any>;
        export let fetchNextImages: import("prop-types").Validator<(...args: any[]) => any>;
        export let contextType: import("prop-types").Validator<string>;
        export let images: any;
        export let sortBy: import("prop-types").Requireable<import("prop-types").InferProps<{
            sort: import("prop-types").Validator<string>;
            order: import("prop-types").Validator<string>;
        }>>;
        export { string as searchString };
        export let onImageEmbed: import("prop-types").Validator<(...args: any[]) => any>;
        export { bool as isIconMaker };
        export let canvasOrigin: import("prop-types").Validator<string>;
    }
    namespace defaultProps {
        let isIconMaker: boolean;
    }
}
export default Images;
import React from 'react';
import { string } from 'prop-types';
import { bool } from 'prop-types';
