export default Course;
declare function Course({ dispatch, onChange, onLoading, onLoaded, canvasOrigin }: {
    dispatch: any;
    onChange: any;
    onLoading: any;
    onLoaded: any;
    canvasOrigin: any;
}): React.JSX.Element;
declare namespace Course {
    namespace propTypes {
        let dispatch: PropTypes.Requireable<(...args: any[]) => any>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let onLoading: PropTypes.Requireable<(...args: any[]) => any>;
        let onLoaded: PropTypes.Requireable<(...args: any[]) => any>;
        let canvasOrigin: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        export function dispatch_1(): void;
        export { dispatch_1 as dispatch };
        export function onChange_1(): void;
        export { onChange_1 as onChange };
        export function onLoading_1(): void;
        export { onLoading_1 as onLoading };
        export function onLoaded_1(): void;
        export { onLoaded_1 as onLoaded };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
