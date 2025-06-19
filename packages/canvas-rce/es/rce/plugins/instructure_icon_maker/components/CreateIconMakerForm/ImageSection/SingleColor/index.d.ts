export default SingleColor;
declare function SingleColor({ data, dispatch, onLoaded }: {
    data: any;
    dispatch: any;
    onLoaded: any;
}): React.JSX.Element;
declare namespace SingleColor {
    namespace propTypes {
        let dispatch: PropTypes.Requireable<(...args: any[]) => any>;
        let data: PropTypes.Requireable<PropTypes.InferProps<{
            icon: PropTypes.Requireable<string>;
            iconFillColor: PropTypes.Requireable<string>;
        }>>;
        let onLoaded: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        export function dispatch_1(): void;
        export { dispatch_1 as dispatch };
        export namespace data_1 {
            let icon: null;
            let iconFillColor: string;
        }
        export { data_1 as data };
        export function onLoaded_1(): void;
        export { onLoaded_1 as onLoaded };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
