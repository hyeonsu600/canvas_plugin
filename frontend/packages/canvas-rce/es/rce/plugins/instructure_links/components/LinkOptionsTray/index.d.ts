declare function LinkOptionsTray(props: any): React.JSX.Element;
declare namespace LinkOptionsTray {
    namespace propTypes {
        export function content(props: any, _propName: any, _componentName: any): void;
        export { func as onEntered };
        export { func as onExited };
        export let onRequestClose: import("prop-types").Validator<(...args: any[]) => any>;
        export let onSave: import("prop-types").Validator<(...args: any[]) => any>;
        export let open: import("prop-types").Validator<boolean>;
    }
    namespace defaultProps {
        let onEntered: null;
        let onExited: null;
    }
}
export default LinkOptionsTray;
import React from 'react';
import { func } from 'prop-types';
