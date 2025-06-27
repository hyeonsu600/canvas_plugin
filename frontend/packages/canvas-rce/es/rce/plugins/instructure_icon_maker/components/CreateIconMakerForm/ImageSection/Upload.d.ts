export function onSubmit(dispatch: any, onChange: any): (_editor: any, _accept: any, _selectedPanel: any, uploadData: any) => any;
export default Upload;
declare function Upload({ editor, dispatch, mountNode, onChange, canvasOrigin }: {
    editor: any;
    dispatch: any;
    mountNode: any;
    onChange: any;
    canvasOrigin: any;
}): React.JSX.Element;
declare namespace Upload {
    namespace propTypes {
        let editor: PropTypes.Validator<object>;
        let dispatch: PropTypes.Requireable<(...args: any[]) => any>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let mountNode: PropTypes.Requireable<NonNullable<((...args: any[]) => any) | PropTypes.ReactElementLike | null | undefined>>;
        let canvasOrigin: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        export function dispatch_1(): void;
        export { dispatch_1 as dispatch };
        export function onChange_1(): void;
        export { onChange_1 as onChange };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
