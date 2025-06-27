declare function MediaPanel(props: any): React.JSX.Element;
declare namespace MediaPanel {
    namespace propTypes {
        export let contextType: import("prop-types").Validator<string>;
        export let fetchInitialMedia: import("prop-types").Validator<(...args: any[]) => any>;
        export let fetchNextMedia: import("prop-types").Validator<(...args: any[]) => any>;
        export let onMediaEmbed: import("prop-types").Validator<(...args: any[]) => any>;
        export let media: any;
        export let sortBy: import("prop-types").Requireable<import("prop-types").InferProps<{
            sort: import("prop-types").Validator<string>;
            order: import("prop-types").Validator<string>;
        }>>;
        export { string as searchString };
    }
}
export default MediaPanel;
import React from 'react';
import { string } from 'prop-types';
