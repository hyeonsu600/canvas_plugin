declare function LinkOptionsDialog(props: any): React.JSX.Element;
declare namespace LinkOptionsDialog {
    namespace propTypes {
        export { string as text };
        export { string as url };
        export let operation: import("prop-types").Requireable<string>;
        export { func as onEntered };
        export { func as onExited };
        export let onRequestClose: import("prop-types").Validator<(...args: any[]) => any>;
        export let onSave: import("prop-types").Validator<(...args: any[]) => any>;
        export let open: import("prop-types").Validator<boolean>;
        export { bool as showText };
    }
    namespace defaultProps {
        let onEntered: null;
        let onExited: null;
        let showText: boolean;
    }
}
export default LinkOptionsDialog;
import React from 'react';
import { string } from 'prop-types';
import { func } from 'prop-types';
import { bool } from 'prop-types';
