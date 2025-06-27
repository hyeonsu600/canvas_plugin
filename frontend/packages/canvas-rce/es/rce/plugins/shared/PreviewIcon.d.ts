export default PreviewIcon;
declare function PreviewIcon({ color, testId, variant, image, loading, checkered }: {
    color: any;
    testId: any;
    variant: any;
    image: any;
    loading: any;
    checkered: any;
}): React.JSX.Element;
declare namespace PreviewIcon {
    namespace variants {
        namespace small {
            let width: string;
            let gradientOne: string;
            let gradientTwo: string;
        }
        namespace large {
            let width_1: string;
            export { width_1 as width };
            let gradientOne_1: string;
            export { gradientOne_1 as gradientOne };
            let gradientTwo_1: string;
            export { gradientTwo_1 as gradientTwo };
        }
    }
    namespace propTypes {
        let color: PropTypes.Requireable<string>;
        let testId: PropTypes.Requireable<string>;
        let variant: PropTypes.Requireable<string>;
        let image: PropTypes.Requireable<string>;
        let loading: PropTypes.Requireable<boolean>;
        let checkered: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        let variant_1: string;
        export { variant_1 as variant };
        let color_1: null;
        export { color_1 as color };
        let testId_1: null;
        export { testId_1 as testId };
        let image_1: string;
        export { image_1 as image };
        let loading_1: boolean;
        export { loading_1 as loading };
        let checkered_1: boolean;
        export { checkered_1 as checkered };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
