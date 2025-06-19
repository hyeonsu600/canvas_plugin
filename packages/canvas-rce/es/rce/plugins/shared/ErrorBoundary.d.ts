export default class ErrorBoundary extends React.Component<any, any, any> {
    static propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    constructor(props: any);
    state: {
        hasError: boolean;
    };
    render(): any;
}
import React from 'react';
import PropTypes from 'prop-types';
