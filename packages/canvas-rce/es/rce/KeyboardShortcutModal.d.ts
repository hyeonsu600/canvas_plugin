declare function KeyboardShortcutModal(props: any): React.JSX.Element;
declare namespace KeyboardShortcutModal {
    namespace propTypes {
        export let open: import("prop-types").Validator<boolean>;
        export { func as onClose };
        export let onDismiss: import("prop-types").Validator<(...args: any[]) => any>;
        export { func as onExited };
    }
}
export default KeyboardShortcutModal;
import React from 'react';
import { func } from 'prop-types';
