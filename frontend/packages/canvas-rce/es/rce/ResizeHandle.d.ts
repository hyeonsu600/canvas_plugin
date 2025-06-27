declare function ResizeHandle(props: any): React.JSX.Element;
declare namespace ResizeHandle {
    let propTypes: {
        onDrag: import("prop-types").Requireable<(...args: any[]) => any>;
        onFocus: import("prop-types").Requireable<(...args: any[]) => any>;
        tabIndex: import("prop-types").Requireable<number>;
        'data-btn-id': import("prop-types").Requireable<string>;
    };
    namespace defaultProps {
        function onDrag(): void;
        let tabIndex: number;
    }
}
export default ResizeHandle;
import React from 'react';
