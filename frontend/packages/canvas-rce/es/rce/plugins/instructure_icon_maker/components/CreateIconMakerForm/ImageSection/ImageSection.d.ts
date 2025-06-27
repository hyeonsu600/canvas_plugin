export function ImageSection({ settings, onChange, editor, canvasOrigin }: {
    settings: any;
    onChange: any;
    editor: any;
    canvasOrigin: any;
}): React.JSX.Element;
export namespace ImageSection {
    namespace propTypes {
        let settings: PropTypes.Validator<object>;
        let editor: PropTypes.Validator<object>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let canvasOrigin: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        export function onChange_1(): void;
        export { onChange_1 as onChange };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
