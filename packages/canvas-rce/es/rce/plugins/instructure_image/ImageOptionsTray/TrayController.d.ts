export const CONTAINER_ID: "instructure-image-options-tray-container";
export default class TrayController {
    _editor: any;
    _isOpen: boolean;
    _shouldOpen: boolean;
    _renderId: number;
    _isIconMaker: boolean;
    get $container(): HTMLElement;
    get isOpen(): boolean;
    showTrayForEditor(editor: any, isIconMaker?: boolean): void;
    $img: any;
    hideTrayForEditor(editor: any): void;
    _applyImageOptions(imageOptions: any): void;
    _applyIconAltTextChanges($img: any, editor: any, imageOptions: any): void;
    _dismissTray(): void;
    _renderTray(): void;
}
