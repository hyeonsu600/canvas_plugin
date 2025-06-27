interface IconMakerSettings {
    name: string;
    alt: string;
    shape: string;
    size: string;
    color: string;
    outlineSize: string;
    outlineColor: string;
    text: string;
    textSize: string;
    textColor: string;
    textBackgroundColor: string;
    textPosition: string;
    imageSettings: object;
}
export declare class IconMakerFormHasChanges {
    initialSettings: IconMakerSettings;
    currentSettings: IconMakerSettings;
    constructor(initSettings: IconMakerSettings, currSettings: IconMakerSettings);
    hasNameChange(): boolean;
    hasAltChange(): boolean;
    hasShapeNameChange(): boolean;
    hasShapeSizeChange(): boolean;
    hasColorNameChange(): boolean;
    hasOutlineSizeChange(): boolean;
    hasOutlineColorChange(): boolean;
    hasTextChange(): boolean;
    hasTextSizeChange(): boolean;
    hasTextColorChange(): boolean;
    hasTextBackgroundColorChange(): boolean;
    hasTextPositionChange(): boolean;
    hasImageSettingsChange(): boolean;
    hasChanges(): boolean;
}
export {};
