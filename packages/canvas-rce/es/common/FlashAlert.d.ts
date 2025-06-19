export function showFlashAlert({ message, err, type, srOnly }: {
    message: any;
    err: any;
    type?: string | undefined;
    srOnly?: boolean | undefined;
}): void;
export function destroyContainer(): void;
export function showFlashError(message?: string): (err: any) => void;
export function showFlashSuccess(message: any): () => void;
export default class FlashAlert extends React.Component<any, any, any> {
    static propTypes: {
        onClose: PropTypes.Validator<(...args: any[]) => any>;
        message: PropTypes.Validator<string>;
        error: PropTypes.Requireable<Error>;
        variant: PropTypes.Requireable<string>;
        timeout: PropTypes.Requireable<number>;
        screenReaderOnly: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        error: null;
        variant: string;
        timeout: number;
        screenReaderOnly: boolean;
    };
    constructor(props: any);
    state: {
        showDetails: boolean;
        isOpen: boolean;
    };
    timerId: number;
    showDetails: () => void;
    closeAlert: () => void;
    findDetailMessage(): {
        a: any;
        b: any;
    };
    renderDetailMessage(): React.JSX.Element;
    render(): React.JSX.Element;
}
import React from 'react';
import PropTypes from 'prop-types';
