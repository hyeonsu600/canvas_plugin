export declare function mergeMenuItems(standard: string, custom?: string): string;
export declare function mergeMenu(standard: Record<string, {
    items: string;
}>, custom: Record<string, {
    items: string;
}>): Record<string, {
    items: string;
}>;
export declare function mergeToolbar(standard: Array<{
    items: string[];
    name: string;
}>, custom: Array<{
    items: string[];
    name: string;
}>): {
    items: string[];
    name: string;
}[];
export declare function mergePlugins(standard: string[], custom?: string[], exclusions?: string[]): string[];
export declare function focusToolbar(el: HTMLElement): void;
export declare function focusFirstMenuButton(el: HTMLElement): void;
export declare function isElementWithinTable(node: Element | null): boolean;
export declare function parsePluginsToExclude(plugins: string[]): string[];
export declare function patchAutosavedContent(content: string, asText?: boolean): string | null;
