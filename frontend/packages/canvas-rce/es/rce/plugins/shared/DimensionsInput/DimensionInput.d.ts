declare function DimensionInput(props: any): React.JSX.Element;
declare namespace DimensionInput {
    namespace propTypes {
        export let dimensionState: import("prop-types").Requireable<import("prop-types").InferProps<{
            addOffset: import("prop-types").Validator<(...args: any[]) => any>;
            inputValue: import("prop-types").Validator<string>;
            setInputValue: import("prop-types").Validator<(...args: any[]) => any>;
        }>>;
        export { object as dimensionsRef };
        export let label: import("prop-types").Validator<string>;
    }
}
export default DimensionInput;
import React from 'react';
import { object } from 'prop-types';
