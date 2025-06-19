export const CONTAINER_ID: "instructure-link-options-tray-container";
export default class LinkOptionsTrayController {
    _editor: any;
    _isOpen: boolean;
    _shouldOpen: boolean;
    _renderId: number;
    get $container(): HTMLElement;
    get isOpen(): boolean;
    showTrayForEditor(editor: any): void;
    hideTrayForEditor(editor: any): void;
    _applyLinkOptions(linkOptions: any): void;
    _dismissTray(): void;
    _renderTray(): void;
}
