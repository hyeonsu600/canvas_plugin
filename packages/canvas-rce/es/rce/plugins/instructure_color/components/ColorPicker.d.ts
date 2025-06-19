import React from 'react';
export type ColorTab = 'foreground' | 'background' | 'border';
export type TabSpec = {
    color?: string;
    default: string;
};
export type ColorSpec = {
    bgcolor?: string;
    fgcolor?: string;
    bordercolor?: string;
};
export type AtLeastOne<T, U = {
    [K in keyof T]: Pick<T, K>;
}> = Partial<T> & U[keyof U];
export type TabsSpec = AtLeastOne<Record<ColorTab, TabSpec>> & {
    effectiveBgColor: string;
};
export type ColorsInUse = {
    foreground: string[];
    background: string[];
    border: string[];
};
export type ColorPickerProps = {
    tabs: TabsSpec;
    colorsInUse?: ColorsInUse;
    onCancel: () => void;
    onSave: (newcolors: ColorSpec) => void;
};
declare const ColorPicker: ({ tabs, colorsInUse, onCancel, onSave }: ColorPickerProps) => React.JSX.Element;
export { ColorPicker };
