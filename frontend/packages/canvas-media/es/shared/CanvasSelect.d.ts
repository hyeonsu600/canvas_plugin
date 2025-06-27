export default class CanvasSelect extends React.Component<any, any, any> {
    static Option: typeof CanvasSelectOption;
    static Group: typeof CanvasSelectGroup;
    static propTypes: {
        id: import("prop-types").Requireable<string>;
        label: import("prop-types").Validator<NonNullable<NonNullable<import("prop-types").ReactNodeLike | ((...args: any[]) => any)>>>;
        liveRegion: import("prop-types").Requireable<(...args: any[]) => any>;
        value: import("prop-types").Requireable<string>;
        onChange: import("prop-types").Validator<(...args: any[]) => any>;
        children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
        noOptionsLabel: import("prop-types").Requireable<string>;
        translatedStrings: import("prop-types").Requireable<import("prop-types").InferProps<{
            USE_ARROWS: import("prop-types").Validator<string>;
            LIST_COLLAPSED: import("prop-types").Validator<string>;
            LIST_EXPANDED: import("prop-types").Validator<string>;
            OPTION_SELECTED: import("prop-types").Validator<string>;
        }>>;
        onBlur: import("prop-types").Requireable<(...args: any[]) => any>;
        mountNode: import("prop-types").Requireable<NonNullable<import("prop-types").ReactElementLike | ((...args: any[]) => any) | null | undefined>>;
    };
    static defaultProps: {
        noOptionsLabel: string;
    };
    constructor(props: any);
    state: {
        inputValue: any;
        isShowingOptions: boolean;
        highlightedOptionId: null;
        selectedOptionId: any;
        announcement: null;
    };
    _selectRef: React.RefObject<any>;
    focus(): void;
    componentDidUpdate(prevProps: any): void;
    render(): import("react/jsx-runtime").JSX.Element;
    renderChildren(children: any): any;
    backupKey: number;
    renderOption(option: any): import("react/jsx-runtime").JSX.Element;
    renderGroup(group: any): import("react/jsx-runtime").JSX.Element;
    renderNoOptionsOption(): import("react/jsx-runtime").JSX.Element;
    handleBlur: (event: any) => void;
    handleShowOptions: () => void;
    handleHideOptions: (_event: any) => void;
    handleHighlightOption: (event: any, { id }: {
        id: any;
    }) => void;
    handleSelectOption: (event: any, { id }: {
        id: any;
    }) => void;
    getOptionLabelById(oid: any): any;
    getOptionByFieldValue(field: any, value: any, options?: any[]): any;
}
import React from 'react';
declare function CanvasSelectOption(): import("react/jsx-runtime").JSX.Element;
declare namespace CanvasSelectOption {
    namespace propTypes {
        let id: import("prop-types").Validator<string>;
        let value: import("prop-types").Validator<string>;
    }
}
declare function CanvasSelectGroup(): import("react/jsx-runtime").JSX.Element;
declare namespace CanvasSelectGroup {
    export namespace propTypes_1 {
        let label: import("prop-types").Validator<string>;
    }
    export { propTypes_1 as propTypes };
}
export {};
