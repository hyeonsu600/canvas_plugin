export default class Checker extends React.Component<any, any, any> {
    static defaultProps: {
        additionalRules: never[];
        onFixError: () => void;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    state: {
        open: boolean;
        checking: boolean;
        errors: never[];
        formState: {};
        formStateValid: boolean;
        errorIndex: number;
        config: {};
        showWhyPopover: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(_prevProps: any, prevState: any): void;
    onFullscreenChange: (_event: any) => void;
    setConfig(config: any): void;
    check(done: any): void;
    _check(done: any): void;
    firstError(): void;
    nextError(): void;
    prevError(): void;
    setErrorIndex(errorIndex: any): void;
    selectCurrent(): void;
    error(): never;
    errorNode(): any;
    errorRootNode(): any;
    updateErrorNode(elem: any): void;
    errorRule(): any;
    errorMessage(): any;
    getFormState(): void;
    updateFormState: ({ target }: {
        target: any;
    }) => void;
    formStateValid(formState: any): any;
    _tempNode: any;
    _tempTestNode: any;
    fixIssue(): void;
    newTempRootNode(rootNode: any): any;
    tempNode(refresh?: boolean): any;
    removeTempNode(): void;
    onLeaveError(): void;
    handleClose(): void;
    render(): React.JSX.Element;
    trayElement: HTMLSpanElement | null | undefined;
    _closeButtonRef: Element | null | undefined;
    renderField(f: any): false | React.JSX.Element;
}
import React from 'react';
