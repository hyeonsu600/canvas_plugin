import type { ExternalToolsEnv, RceLtiToolInfo } from './ExternalToolsEnv';
export interface ExternalToolMenuItem {
    type: 'menuitem';
    text: string;
    icon?: string;
    onAction: () => void;
}
/**
 * Helper class for the connection between an external tool registration and a particular TinyMCE instance.
 */
export declare class RceToolWrapper {
    readonly env: ExternalToolsEnv;
    private readonly toolInfo;
    static forEditorEnv(env: ExternalToolsEnv, toolConfigs?: (import("prop-types").InferPropsInner<Pick<{
        id: import("prop-types").Requireable<NonNullable<string | number | null | undefined>>;
        favorite: import("prop-types").Requireable<boolean>;
        on_by_default: import("prop-types").Requireable<boolean>;
        name: import("prop-types").Requireable<string>;
        description: import("prop-types").Requireable<string>;
        icon_url: import("prop-types").Requireable<string>;
        height: import("prop-types").Requireable<number>;
        width: import("prop-types").Requireable<number>;
        use_tray: import("prop-types").Requireable<boolean>;
        canvas_icon_class: import("prop-types").Requireable<any>;
    }, never>> & Partial<import("prop-types").InferPropsInner<Pick<{
        id: import("prop-types").Requireable<NonNullable<string | number | null | undefined>>;
        favorite: import("prop-types").Requireable<boolean>;
        on_by_default: import("prop-types").Requireable<boolean>;
        name: import("prop-types").Requireable<string>;
        description: import("prop-types").Requireable<string>;
        icon_url: import("prop-types").Requireable<string>;
        height: import("prop-types").Requireable<number>;
        width: import("prop-types").Requireable<number>;
        use_tray: import("prop-types").Requireable<boolean>;
        canvas_icon_class: import("prop-types").Requireable<any>;
    }, "id" | "name" | "width" | "height" | "description" | "favorite" | "on_by_default" | "icon_url" | "use_tray" | "canvas_icon_class">>>)[], mruIds?: string[]): RceToolWrapper[];
    readonly iconId: string | null | undefined;
    isMruTool: boolean;
    get editor(): import("../../types").ExternalToolsEditor | null;
    constructor(env: ExternalToolsEnv, toolInfo: RceLtiToolInfo, mruToolIds: string[]);
    get id(): string;
    get title(): string;
    get description(): string | null | undefined;
    get favorite(): boolean;
    get image(): string | null | undefined;
    get width(): number | null | undefined;
    get height(): number | null | undefined;
    get use_tray(): boolean | null | undefined;
    get on_by_default(): boolean | null | undefined;
    asToolbarButton(): {
        readonly type: "button";
        readonly icon: string | undefined;
        readonly tooltip: string;
        readonly onAction: () => void;
    };
    asMenuItem(): {
        readonly type: "menuitem";
        readonly text: string;
        readonly icon: string | undefined;
        readonly onAction: () => void;
    };
    openDialog(): void;
}
export declare function parseIconValueFor(toolInfo: RceLtiToolInfo): {
    iconUrl?: string;
    canvasIconClass?: string;
};
/**
 * Loads the list of most recently used external tool ids.
 */
export declare function loadMruToolIds(): string[];
/**
 * Loads the list of most recently used external tool ids.
 */
export declare function storeMruToolIds(toolIds: string[]): void;
export declare function addMruToolId(toolId: string, env: ExternalToolsEnv): string[];
export declare function buildToolMenuItems(availableTools: RceToolWrapper[], viewAllItem: ExternalToolMenuItem): ExternalToolMenuItem[];
