declare class EquationEditorModal extends React.Component<any, any, any> {
    static debounceRate: number;
    constructor(props: any);
    mathml: Mathml;
    state: {
        advanced: any;
        workingFormula: any;
    };
    previewElement: React.RefObject<any>;
    advancedEditor: React.RefObject<any>;
    insertNewRange(): void;
    advancedModeOnly(latex: any): boolean;
    executeCommand: (cmd: any, advancedCmd: any) => void;
    handleModalCancel: () => void;
    handleModalDone: () => void;
    renderMathInAdvancedPreview: import("@instructure/debounce").Debounced<() => void>;
    setPreviewElementContent(): void;
    toggleAdvanced: () => void;
    toggleAndUpdatePreference: () => void;
    registerBasicEditorListener: () => void;
    handleFieldRef: (node: any) => void;
    mathField: any;
    renderFooter: () => React.JSX.Element;
    renderToggle: () => React.JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    stubMacros(): void;
    setMathField(formula: any): void;
    getMathFiled(): any;
    render: () => React.JSX.Element;
}
declare namespace EquationEditorModal {
    namespace propTypes {
        let editor: PropTypes.Validator<object>;
        let onModalDismiss: PropTypes.Validator<(...args: any[]) => any>;
        let onModalClose: PropTypes.Validator<(...args: any[]) => any>;
        let onEquationSubmit: PropTypes.Validator<(...args: any[]) => any>;
        let originalLatex: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            latex: PropTypes.Requireable<string>;
            advancedOnly: PropTypes.Requireable<boolean>;
            startContainer: PropTypes.Requireable<PropTypes.ReactElementLike>;
            leftIndex: PropTypes.Requireable<number>;
            rightIndex: PropTypes.Requireable<number>;
        }>>>;
        let openAdvanced: PropTypes.Validator<boolean>;
    }
}
export default EquationEditorModal;
import React from 'react';
import { Mathml } from '../../../../enhance-user-content/mathml';
import PropTypes from 'prop-types';
