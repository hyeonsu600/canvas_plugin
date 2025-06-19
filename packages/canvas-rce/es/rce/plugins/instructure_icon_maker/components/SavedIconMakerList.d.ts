export default SavedIconMakerList;
declare function SavedIconMakerList(props: any): React.JSX.Element;
declare namespace SavedIconMakerList {
    namespace propTypes {
        let sortBy: PropTypes.Requireable<PropTypes.InferProps<{
            sort: PropTypes.Validator<string>;
            order: PropTypes.Validator<string>;
        }>>;
        let images: any;
        let contextType: PropTypes.Validator<string>;
        let searchString: PropTypes.Requireable<string>;
        let onImageEmbed: PropTypes.Requireable<(...args: any[]) => any>;
        let canvasOrigin: PropTypes.Requireable<string>;
        let fetchInitialImages: PropTypes.Requireable<(...args: any[]) => any>;
        let fetchNextImages: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        export namespace sortBy_1 {
            let sort: string;
            let order: string;
        }
        export { sortBy_1 as sortBy };
        let searchString_1: string;
        export { searchString_1 as searchString };
        export function onImageEmbed_1(): void;
        export { onImageEmbed_1 as onImageEmbed };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
