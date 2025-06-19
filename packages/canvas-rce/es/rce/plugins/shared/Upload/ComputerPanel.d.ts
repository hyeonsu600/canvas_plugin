declare function ComputerPanel({ theFile, setFile, setError, accept, label, bounds }: {
    theFile: any;
    setFile: any;
    setError: any;
    accept: any;
    label: any;
    bounds: any;
}): React.JSX.Element;
declare namespace ComputerPanel {
    namespace propTypes {
        export { object as theFile };
        export let setFile: import("prop-types").Validator<(...args: any[]) => any>;
        export let setError: import("prop-types").Validator<(...args: any[]) => any>;
        export let accept: import("prop-types").Requireable<NonNullable<string | (string | null | undefined)[] | null | undefined>>;
        export let label: import("prop-types").Validator<string>;
        export let bounds: import("prop-types").Requireable<import("prop-types").InferProps<{
            width: import("prop-types").Requireable<number>;
            height: import("prop-types").Requireable<number>;
        }>>;
    }
    namespace defaultProps {
        let bounds_1: {};
        export { bounds_1 as bounds };
    }
}
export default ComputerPanel;
export const styles: {
    previewContainer: object;
    previewArea: object;
};
import React from 'react';
import { object } from 'prop-types';
