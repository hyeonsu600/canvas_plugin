export function FixedContentTray({ title, isOpen, onDismiss, onUnmount, mountNode, renderHeader, renderBody, renderFooter, bodyAs, shouldJoinBodyAndFooter, shouldCloseOnDocumentClick, }: {
    title: any;
    isOpen: any;
    onDismiss: any;
    onUnmount: any;
    mountNode: any;
    renderHeader: any;
    renderBody: any;
    renderFooter: any;
    bodyAs: any;
    shouldJoinBodyAndFooter: any;
    shouldCloseOnDocumentClick: any;
}): React.JSX.Element;
export namespace FixedContentTray {
    namespace propTypes {
        let renderHeader: PropTypes.Validator<(...args: any[]) => any>;
        let renderBody: PropTypes.Validator<(...args: any[]) => any>;
        let renderFooter: PropTypes.Validator<(...args: any[]) => any>;
        let title: PropTypes.Requireable<string>;
        let isOpen: PropTypes.Requireable<boolean>;
        let onDismiss: PropTypes.Requireable<(...args: any[]) => any>;
        let onUnmount: PropTypes.Requireable<(...args: any[]) => any>;
        let mountNode: PropTypes.Requireable<NonNullable<((...args: any[]) => any) | PropTypes.ReactElementLike | null | undefined>>;
        let bodyAs: PropTypes.Requireable<string>;
        let shouldJoinBodyAndFooter: PropTypes.Requireable<boolean>;
        let shouldCloseOnDocumentClick: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        let title_1: null;
        export { title_1 as title };
        let isOpen_1: boolean;
        export { isOpen_1 as isOpen };
        export function onDismiss_1(): void;
        export { onDismiss_1 as onDismiss };
        export function onUnmount_1(): void;
        export { onUnmount_1 as onUnmount };
        let bodyAs_1: string;
        export { bodyAs_1 as bodyAs };
        let shouldJoinBodyAndFooter_1: boolean;
        export { shouldJoinBodyAndFooter_1 as shouldJoinBodyAndFooter };
        let shouldCloseOnDocumentClick_1: boolean;
        export { shouldCloseOnDocumentClick_1 as shouldCloseOnDocumentClick };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
