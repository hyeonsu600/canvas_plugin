import PropTypes from 'prop-types';
export declare const toolbarPropType: PropTypes.Requireable<(PropTypes.InferProps<{
    name: PropTypes.Validator<string>;
    items: PropTypes.Validator<(string | null | undefined)[]>;
}> | null | undefined)[]>;
export type ToolbarPropType = {
    name: string;
    items: string[];
};
export declare const menuPropType: PropTypes.Requireable<{
    [x: string]: PropTypes.InferProps<{
        title: PropTypes.Requireable<string>;
        items: PropTypes.Validator<string>;
    }> | null | undefined;
}>;
export declare const ltiToolsPropType: PropTypes.Requireable<(PropTypes.InferProps<{
    id: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
    favorite: PropTypes.Requireable<boolean>;
    on_by_default: PropTypes.Requireable<boolean>;
    name: PropTypes.Requireable<string>;
    description: PropTypes.Requireable<string>;
    icon_url: PropTypes.Requireable<string>;
    height: PropTypes.Requireable<number>;
    width: PropTypes.Requireable<number>;
    use_tray: PropTypes.Requireable<boolean>;
    canvas_icon_class: PropTypes.Requireable<any>;
}> | null | undefined)[]>;
export interface CanvasIconClass {
    icon_url: string;
}
export type IconClassType = string | CanvasIconClass | any;
export interface LtiTool {
    id: string | number;
    favorite: boolean;
    name: string;
    description: string;
    icon_url: string;
    height: number;
    width: number;
    use_tray: boolean;
    canvas_icon_class: IconClassType;
}
export type LtiToolsPropType = LtiTool[];
export declare const EditorOptionsPropType: PropTypes.Requireable<PropTypes.InferProps<{
    height: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
    toolbar: PropTypes.Requireable<(PropTypes.InferProps<{
        name: PropTypes.Validator<string>;
        items: PropTypes.Validator<(string | null | undefined)[]>;
    }> | null | undefined)[]>;
    menu: PropTypes.Requireable<{
        [x: string]: PropTypes.InferProps<{
            title: PropTypes.Requireable<string>;
            items: PropTypes.Validator<string>;
        }> | null | undefined;
    }>;
    plugins: PropTypes.Requireable<(string | null | undefined)[]>;
    readonly: PropTypes.Requireable<boolean>;
    selector: PropTypes.Requireable<string>;
    init_instance_callback: PropTypes.Requireable<(...args: any[]) => any>;
}>>;
export type { EditorOptions } from './types';
export declare const externalToolsConfigPropType: PropTypes.Requireable<PropTypes.InferProps<{
    ltiIframeAllowances: PropTypes.Requireable<(string | null | undefined)[]>;
    containingCanvasLtiToolId: PropTypes.Requireable<string>;
    resourceSelectionUrlOverride: PropTypes.Requireable<string>;
    isA2StudentView: PropTypes.Requireable<boolean>;
    maxMruTools: PropTypes.Requireable<number>;
}>>;
export type ExternalToolsConfig = {
    ltiIframeAllowances: string[];
    containingCanvasLtiToolId: string;
    resourceSelectionUrlOverride: string;
    isA2StudentView: boolean;
    maxMruTools: number;
};
export declare const rceWrapperPropTypes: {
    autosave: PropTypes.Requireable<PropTypes.InferProps<{
        enabled: PropTypes.Requireable<boolean>;
        maxAge: PropTypes.Requireable<number>;
    }>>;
    canvasOrigin: PropTypes.Requireable<string>;
    defaultContent: PropTypes.Requireable<string>;
    editorOptions: PropTypes.Requireable<PropTypes.InferProps<{
        height: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        toolbar: PropTypes.Requireable<(PropTypes.InferProps<{
            name: PropTypes.Validator<string>;
            items: PropTypes.Validator<(string | null | undefined)[]>;
        }> | null | undefined)[]>;
        menu: PropTypes.Requireable<{
            [x: string]: PropTypes.InferProps<{
                title: PropTypes.Requireable<string>;
                items: PropTypes.Validator<string>;
            }> | null | undefined;
        }>;
        plugins: PropTypes.Requireable<(string | null | undefined)[]>;
        readonly: PropTypes.Requireable<boolean>;
        selector: PropTypes.Requireable<string>;
        init_instance_callback: PropTypes.Requireable<(...args: any[]) => any>;
    }>>;
    handleUnmount: PropTypes.Requireable<(...args: any[]) => any>;
    editorView: PropTypes.Requireable<string>;
    renderKBShortcutModal: PropTypes.Requireable<boolean>;
    id: PropTypes.Requireable<string>;
    language: PropTypes.Requireable<string>;
    liveRegion: PropTypes.Validator<(...args: any[]) => any>;
    ltiTools: PropTypes.Requireable<(PropTypes.InferProps<{
        id: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        favorite: PropTypes.Requireable<boolean>;
        on_by_default: PropTypes.Requireable<boolean>;
        name: PropTypes.Requireable<string>;
        description: PropTypes.Requireable<string>;
        icon_url: PropTypes.Requireable<string>;
        height: PropTypes.Requireable<number>;
        width: PropTypes.Requireable<number>;
        use_tray: PropTypes.Requireable<boolean>;
        canvas_icon_class: PropTypes.Requireable<any>;
    }> | null | undefined)[]>;
    onContentChange: PropTypes.Requireable<(...args: any[]) => any>;
    onFocus: PropTypes.Requireable<(...args: any[]) => any>;
    onBlur: PropTypes.Requireable<(...args: any[]) => any>;
    onInitted: PropTypes.Requireable<(...args: any[]) => any>;
    onRemove: PropTypes.Requireable<(...args: any[]) => any>;
    textareaClassName: PropTypes.Requireable<string>;
    textareaId: PropTypes.Validator<string>;
    readOnly: PropTypes.Requireable<boolean>;
    tinymce: PropTypes.Requireable<object>;
    trayProps: PropTypes.Requireable<PropTypes.InferProps<{
        canUploadFiles: PropTypes.Validator<boolean>;
        contextId: PropTypes.Validator<string>;
        contextType: PropTypes.Validator<string>;
        containingContext: PropTypes.Requireable<PropTypes.InferProps<{
            contextType: PropTypes.Validator<string>;
            contextId: PropTypes.Validator<string>;
            userId: PropTypes.Validator<string>;
        }>>;
        filesTabDisabled: PropTypes.Requireable<boolean>;
        host: PropTypes.Requireable<string>;
        jwt: PropTypes.Requireable<string>;
        refreshToken: PropTypes.Requireable<(...args: any[]) => any>;
        source: PropTypes.Requireable<PropTypes.InferProps<{
            fetchImages: PropTypes.Validator<(...args: any[]) => any>;
        }>>;
        themeUrl: PropTypes.Requireable<string>;
    }>>;
    toolbar: PropTypes.Requireable<(PropTypes.InferProps<{
        name: PropTypes.Validator<string>;
        items: PropTypes.Validator<(string | null | undefined)[]>;
    }> | null | undefined)[]>;
    menu: PropTypes.Requireable<{
        [x: string]: PropTypes.InferProps<{
            title: PropTypes.Requireable<string>;
            items: PropTypes.Validator<string>;
        }> | null | undefined;
    }>;
    instRecordDisabled: PropTypes.Requireable<boolean>;
    highContrastCSS: PropTypes.Requireable<(string | null | undefined)[]>;
    maxInitRenderedRCEs: PropTypes.Requireable<number>;
    use_rce_icon_maker: PropTypes.Requireable<boolean>;
    features: PropTypes.Requireable<{
        [x: string]: boolean | null | undefined;
    }>;
    flashAlertTimeout: PropTypes.Requireable<number>;
    timezone: PropTypes.Requireable<string>;
    userCacheKey: PropTypes.Requireable<string>;
    externalToolsConfig: PropTypes.Requireable<PropTypes.InferProps<{
        ltiIframeAllowances: PropTypes.Requireable<(string | null | undefined)[]>;
        containingCanvasLtiToolId: PropTypes.Requireable<string>;
        resourceSelectionUrlOverride: PropTypes.Requireable<string>;
        isA2StudentView: PropTypes.Requireable<boolean>;
        maxMruTools: PropTypes.Requireable<number>;
    }>>;
    ai_text_tools: PropTypes.Requireable<boolean>;
    variant: PropTypes.Requireable<"full" | "lite" | "text-only" | "text-block">;
};
export type RCEWrapperProps = PropTypes.InferProps<typeof rceWrapperPropTypes>;
