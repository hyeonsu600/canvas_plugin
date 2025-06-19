export function RotationControls({ rotation, onChange }: {
    rotation: any;
    onChange: any;
}): React.JSX.Element;
export namespace RotationControls {
    namespace propTypes {
        let rotation: PropTypes.Requireable<number>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        let rotation_1: number;
        export { rotation_1 as rotation };
        export function onChange_1(): void;
        export { onChange_1 as onChange };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
