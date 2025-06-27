import React from 'react';
import { type ColorSpec, type TabsSpec } from './ColorPicker';
export { type ColorSpec, type TabSpec } from './ColorPicker';
export type ColorPopupProps = {
    tabs: TabsSpec;
    open: boolean;
    positionTarget?: HTMLElement;
    onCancel: () => void;
    onChange: (newcolors: ColorSpec) => void;
};
declare const ColorPopup: ({ tabs, open, positionTarget, onCancel, onChange }: ColorPopupProps) => React.JSX.Element;
export { ColorPopup };
