export default MultiColor;
declare function MultiColor({ dispatch, onChange, onLoaded }: {
    dispatch: any;
    onChange: any;
    onLoaded: any;
}): React.JSX.Element;
declare namespace MultiColor {
    namespace propTypes {
        let dispatch: PropTypes.Requireable<(...args: any[]) => any>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let onLoaded: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        export function dispatch_1(): void;
        export { dispatch_1 as dispatch };
        let onChange_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChange_1 as onChange };
        export function onLoaded_1(): void;
        export { onLoaded_1 as onLoaded };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
