export function ZoomControls({ scaleRatio, onChange }: {
    scaleRatio: any;
    onChange: any;
}): React.JSX.Element;
export namespace ZoomControls {
    namespace propTypes {
        let scaleRatio: PropTypes.Requireable<number>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        export { MIN_SCALE_RATIO as scaleRatio };
        export function onChange_1(): void;
        export { onChange_1 as onChange };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
import { MIN_SCALE_RATIO } from '../constants';
