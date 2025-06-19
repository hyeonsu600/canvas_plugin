import React from 'react';
import { FILTER_SETTINGS_BY_PLUGIN } from '../canvasContentUtils';
interface CanvasContentPanelProps {
    trayProps: trayProps;
    canvasOrigin: string;
    plugin: keyof typeof FILTER_SETTINGS_BY_PLUGIN;
    setFileUrl: (url: string) => void;
}
export default function CanvasContentPanel({ trayProps, canvasOrigin, plugin, setFileUrl, }: CanvasContentPanelProps): React.JSX.Element;
type trayProps = {
    canUploadFiles: boolean;
    contextId: string;
    contextType: string;
    containingContext: {
        contextType: string;
        contextId: string;
        userId: string;
    };
    filesTabDisabled: boolean;
    host: string;
    jwt: string;
    refreshToken: Function;
    source: {
        fetchImages: Function;
    };
    themeUrl: string;
    storeProps: any;
};
export {};
