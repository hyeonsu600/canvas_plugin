export default class ShowOnFocusButton extends React.Component<any, any, any> {
    static propTypes: {
        children: import("prop-types").Validator<NonNullable<NonNullable<((...args: any[]) => any) | import("prop-types").ReactNodeLike>>>;
        onClick: import("prop-types").Requireable<(...args: any[]) => any>;
        screenReaderLabel: import("prop-types").Validator<string>;
        margin: import("prop-types").Requireable<string>;
        id: import("prop-types").Validator<string>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    state: {
        visible: boolean;
    };
    handleFocus: () => void;
    handleBlur: () => void;
    focus(): void;
    renderButton(): React.JSX.Element;
    btnRef: IconButton | null | undefined;
    render(): React.JSX.Element;
}
import React from 'react';
import { IconButton } from '@instructure/ui-buttons';
