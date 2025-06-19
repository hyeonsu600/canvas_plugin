export function IconMakerTray({ editor, onUnmount, editing, canvasOrigin }: {
    editor: any;
    onUnmount: any;
    editing: any;
    canvasOrigin: any;
}): React.JSX.Element;
export namespace IconMakerTray {
    namespace propTypes {
        let editor: PropTypes.Validator<object>;
        let onUnmount: PropTypes.Requireable<(...args: any[]) => any>;
        let editing: PropTypes.Requireable<boolean>;
        let canvasOrigin: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        export function onUnmount_1(): void;
        export { onUnmount_1 as onUnmount };
        let editing_1: boolean;
        export { editing_1 as editing };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
