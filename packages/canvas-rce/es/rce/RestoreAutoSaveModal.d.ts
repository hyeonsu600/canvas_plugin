declare function RestoreAutoSaveModal(props: any): React.JSX.Element;
declare namespace RestoreAutoSaveModal {
    namespace propTypes {
        export { string as savedContent };
        export let open: import("prop-types").Validator<boolean>;
        export let onNo: import("prop-types").Validator<(...args: any[]) => any>;
        export let onYes: import("prop-types").Validator<(...args: any[]) => any>;
    }
    namespace defaultProps {
        let savedContent: string;
    }
}
export default RestoreAutoSaveModal;
import React from 'react';
import { string } from 'prop-types';
