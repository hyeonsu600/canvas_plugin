export function Preview({ image, settings, dispatch }: {
    image: any;
    settings: any;
    dispatch: any;
}): React.JSX.Element;
export namespace Preview {
    namespace propTypes {
        let image: PropTypes.Validator<string>;
        let settings: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            shape: PropTypes.Requireable<string>;
            rotation: PropTypes.Requireable<number>;
            scaleRatio: PropTypes.Requireable<number>;
            translateX: PropTypes.Requireable<number>;
            translateY: PropTypes.Requireable<number>;
            direction: PropTypes.Requireable<number>;
        }>>>;
        let dispatch: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
