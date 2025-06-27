export function ImageOptions({ state, settings, dispatch, mountNode, trayDispatch }: {
    state: any;
    settings: any;
    dispatch: any;
    mountNode: any;
    trayDispatch: any;
}): React.JSX.Element;
export namespace ImageOptions {
    namespace propTypes {
        let state: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            image: PropTypes.Requireable<string>;
            imageName: PropTypes.Requireable<string>;
            mode: PropTypes.Requireable<string>;
            loading: PropTypes.Validator<boolean>;
            cropperOpen: PropTypes.Validator<boolean>;
            cropperSettings: PropTypes.Requireable<PropTypes.InferProps<{
                shape: PropTypes.Requireable<string>;
                rotation: PropTypes.Requireable<number>;
                scaleRatio: PropTypes.Requireable<number>;
                translateX: PropTypes.Requireable<number>;
                translateY: PropTypes.Requireable<number>;
                direction: PropTypes.Requireable<number>;
            }>>;
            compressed: PropTypes.Validator<boolean>;
        }>>>;
        let settings: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            shape: PropTypes.Requireable<string>;
            embedImage: PropTypes.Requireable<string>;
            imageSettings: PropTypes.Requireable<PropTypes.InferProps<{
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
        }>>>;
        let dispatch: PropTypes.Validator<(...args: any[]) => any>;
        let trayDispatch: PropTypes.Validator<(...args: any[]) => any>;
        let mountNode: PropTypes.Requireable<NonNullable<((...args: any[]) => any) | PropTypes.ReactElementLike | null | undefined>>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
