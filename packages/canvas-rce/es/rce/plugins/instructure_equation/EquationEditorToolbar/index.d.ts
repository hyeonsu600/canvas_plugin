export default MemoizedEquationEditorToolbar;
declare const MemoizedEquationEditorToolbar: React.MemoExoticComponent<typeof EquationEditorToolbar>;
declare function EquationEditorToolbar(props: any): React.JSX.Element;
declare namespace EquationEditorToolbar {
    namespace propTypes {
        let executeCommand: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
