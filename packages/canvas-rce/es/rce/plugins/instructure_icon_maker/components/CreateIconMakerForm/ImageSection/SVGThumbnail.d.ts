export default SVGThumbnail;
declare function SVGThumbnail({ name, source, size, fillColor }: {
    name: any;
    source: any;
    size: any;
    fillColor: any;
}): React.JSX.Element;
declare namespace SVGThumbnail {
    namespace propTypes {
        let size: PropTypes.Requireable<string>;
        let fillColor: PropTypes.Requireable<string>;
        let name: PropTypes.Validator<string>;
        let source: PropTypes.Validator<{
            [x: string]: NonNullable<PropTypes.InferProps<{
                source: PropTypes.Validator<(...args: any[]) => any>;
                label: PropTypes.Validator<string>;
            }>>;
        }>;
    }
    namespace defaultProps {
        let size_1: string;
        export { size_1 as size };
        let fillColor_1: string;
        export { fillColor_1 as fillColor };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
