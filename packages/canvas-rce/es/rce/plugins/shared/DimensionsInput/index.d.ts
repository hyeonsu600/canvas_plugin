declare function DimensionsInput(props: any): React.JSX.Element;
declare namespace DimensionsInput {
    namespace propTypes {
        export let dimensionsState: import("prop-types").Requireable<import("prop-types").InferProps<{
            heightState: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
                addOffset: import("prop-types").Validator<(...args: any[]) => any>;
                inputValue: import("prop-types").Validator<string>;
                setInputValue: import("prop-types").Validator<(...args: any[]) => any>;
            }>>>;
            isNumeric: import("prop-types").Validator<boolean>;
            usePercentageUnits: import("prop-types").Validator<boolean>;
            setUsePercentageUnits: import("prop-types").Validator<(...args: any[]) => any>;
            widthState: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
                addOffset: import("prop-types").Validator<(...args: any[]) => any>;
                inputValue: import("prop-types").Validator<string>;
                setInputValue: import("prop-types").Validator<(...args: any[]) => any>;
            }>>>;
            percentageState: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
                addOffset: import("prop-types").Validator<(...args: any[]) => any>;
                inputValue: import("prop-types").Validator<string>;
                setInputValue: import("prop-types").Validator<(...args: any[]) => any>;
            }>>>;
        }>>;
        export let minHeight: import("prop-types").Validator<number>;
        export let minWidth: import("prop-types").Validator<number>;
        export let minPercentage: import("prop-types").Validator<number>;
        export { bool as hidePercentage };
        export { object as dimensionsRef };
    }
    namespace defaultProps {
        let hidePercentage: boolean;
    }
}
export default DimensionsInput;
export { default as useDimensionsState } from "./useDimensionsState";
import React from 'react';
import { bool } from 'prop-types';
import { object } from 'prop-types';
