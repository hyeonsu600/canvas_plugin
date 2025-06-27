export function CustomNumberInput({ value, parseValueCallback, processValueCallback, formatValueCallback, placeholder, onChange, }: {
    value: any;
    parseValueCallback: any;
    processValueCallback: any;
    formatValueCallback: any;
    placeholder: any;
    onChange: any;
}): React.JSX.Element;
export namespace CustomNumberInput {
    namespace propTypes {
        let value: PropTypes.Validator<number>;
        let onChange: PropTypes.Validator<(...args: any[]) => any>;
        let parseValueCallback: PropTypes.Requireable<(...args: any[]) => any>;
        let processValueCallback: PropTypes.Requireable<(...args: any[]) => any>;
        let formatValueCallback: PropTypes.Requireable<(...args: any[]) => any>;
        let placeholder: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        export function parseValueCallback_1(value: any): any;
        export { parseValueCallback_1 as parseValueCallback };
        export function processValueCallback_1(value: any): any;
        export { processValueCallback_1 as processValueCallback };
        export function formatValueCallback_1(value: any): any;
        export { formatValueCallback_1 as formatValueCallback };
        let placeholder_1: string;
        export { placeholder_1 as placeholder };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
