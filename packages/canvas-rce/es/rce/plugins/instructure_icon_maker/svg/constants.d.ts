export const TYPE: "image/svg+xml-icon-maker-icons";
export const BUTTON_ID: "inst-icon-maker-edit";
export const TOOLBAR_ID: "inst-icon-maker-edit-toolbar";
export const ICON_MAKER_ATTRIBUTE: "data-inst-icon-maker-icon";
export const ICON_MAKER_DOWNLOAD_URL_ATTR: "data-download-url";
export const ICON_MAKER_ICONS: "icon_maker_icons";
export const ICON_MAKER_PARAM: "icon_maker_icon";
export const SVG_XML_TYPE: "image/svg+xml";
export const SVG_TYPE: "image/svg";
export namespace Size {
    let None: string;
    let ExtraSmall: string;
    let Small: string;
    let Medium: string;
    let Large: string;
    let ExtraLarge: string;
}
export namespace DEFAULT_SETTINGS {
    export { TYPE as type };
    export let alt: string;
    export let isDecorative: boolean;
    export let shape: string;
    import size = Size.Small;
    export { size };
    export let color: null;
    export let outlineColor: string;
    import outlineSize = Size.None;
    export { outlineSize };
    export let text: string;
    import textSize = Size.Small;
    export { textSize };
    export let textColor: string;
    export let textBackgroundColor: null;
    export let textPosition: string;
    export let externalStyle: null;
    export let externalWidth: null;
    export let externalHeight: null;
    export let x: number;
    export let y: number;
    export let translateX: number;
    export let translateY: number;
    export let width: number;
    export let height: number;
    export let transform: string;
    export let imageSettings: null;
    export let embedImage: null;
    export let error: null;
}
export const BASE_SIZE: {
    [x: string]: number;
};
export const STROKE_WIDTH: {
    [x: string]: number;
};
export const TEXT_SIZE: {
    [x: string]: number;
};
export const TEXT_SIZE_FONT_DIFF: {
    [x: string]: number;
};
export const MAX_CHAR_COUNT: {
    [x: string]: number;
};
export const MAX_TOTAL_TEXT_CHARS: 32;
export const TEXT_BACKGROUND_PADDING: 4;
export const ICON_PADDING: 4;
