export function ShapeControls({ shape, onChange }: {
    shape: any;
    onChange: any;
}): React.JSX.Element;
export namespace ShapeControls {
    namespace propTypes {
        let shape: PropTypes.Requireable<string>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
