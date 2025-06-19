export const ImageSettingsPropTypes: PropTypes.Requireable<PropTypes.InferProps<{
    mode: PropTypes.Requireable<string>;
    image: PropTypes.Requireable<string>;
    imageName: PropTypes.Requireable<string>;
    icon: PropTypes.Requireable<string>;
    iconFillColor: PropTypes.Requireable<string>;
    collectionOpen: PropTypes.Requireable<boolean>;
    loading: PropTypes.Requireable<boolean>;
    error: PropTypes.Requireable<string>;
    cropperOpen: PropTypes.Requireable<boolean>;
    cropperSettings: PropTypes.Requireable<PropTypes.InferProps<{
        shape: PropTypes.Requireable<string>;
        rotation: PropTypes.Requireable<number>;
        scaleRatio: PropTypes.Requireable<number>;
        translateX: PropTypes.Requireable<number>;
        translateY: PropTypes.Requireable<number>;
        direction: PropTypes.Requireable<number>;
    }>>;
    compressed: PropTypes.Requireable<boolean>;
}>>;
import PropTypes from 'prop-types';
