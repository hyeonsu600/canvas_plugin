export function ImageCropperModal({ open, shape, onClose, onSubmit, image, message, cropSettings, loading, }: {
    open: any;
    shape: any;
    onClose: any;
    onSubmit: any;
    image: any;
    message: any;
    cropSettings: any;
    loading: any;
}): React.JSX.Element;
export namespace ImageCropperModal {
    namespace propTypes {
        export let image: PropTypes.Validator<string>;
        export { ImageCropperSettingsPropTypes as cropSettings };
        export let message: PropTypes.Requireable<string>;
        export let open: PropTypes.Requireable<boolean>;
        export let shape: PropTypes.Requireable<string>;
        export let onClose: PropTypes.Requireable<(...args: any[]) => any>;
        export let onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        export let loading: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        let shape_1: string;
        export { shape_1 as shape };
        let open_1: boolean;
        export { open_1 as open };
        export let cropSettings: null;
        let message_1: null;
        export { message_1 as message };
        let loading_1: boolean;
        export { loading_1 as loading };
        export function onClose_1(): void;
        export { onClose_1 as onClose };
        export function onSubmit_1(): void;
        export { onSubmit_1 as onSubmit };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
import { ImageCropperSettingsPropTypes } from './propTypes';
