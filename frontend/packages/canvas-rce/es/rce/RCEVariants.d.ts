type MenuBarSpec = string;
type MenusSpec = Record<string, {
    title: string;
    items: string;
}>;
interface ToolbarGroupSetting {
    name: string;
    items: string[];
}
type StatusBarFeature = 'ai_tools' | 'keyboard_shortcuts' | 'a11y_checker' | 'word_count' | 'html_view' | 'fullscreen' | 'resize_handle';
export declare const RCEVariantValues: readonly ["full", "lite", "text-only", "text-block"];
export type RCEVariant = (typeof RCEVariantValues)[number];
export type StatusBarOptions = {
    aiTextTools?: boolean;
    isDesktop?: boolean;
};
export declare function getMenubarForVariant(variant: RCEVariant): MenuBarSpec;
export declare function getMenuForVariant(variant: RCEVariant): MenusSpec;
export declare function getToolbarForVariant(variant: RCEVariant, ltiToolFavorites?: string[]): ToolbarGroupSetting[];
export declare function getStatusBarFeaturesForVariant(variant: RCEVariant, options?: StatusBarOptions): StatusBarFeature[];
export {};
