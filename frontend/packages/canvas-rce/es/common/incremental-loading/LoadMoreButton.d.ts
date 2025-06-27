declare function LoadMoreButton({ loader }: {
    loader: any;
}): React.JSX.Element;
declare namespace LoadMoreButton {
    namespace propTypes {
        let loader: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
            onLoadMore: import("prop-types").Validator<(...args: any[]) => any>;
        }>>>;
    }
}
export default LoadMoreButton;
import React from 'react';
