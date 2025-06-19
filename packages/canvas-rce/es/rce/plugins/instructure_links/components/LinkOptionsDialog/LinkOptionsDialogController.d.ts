export const CONTAINER_ID: "instructure-link-options-tray-container";
export const CREATE_LINK: "create";
export const EDIT_LINK: "edit";
export default class LinkOptionsDialogController {
    _editor: any;
    _isOpen: boolean;
    _shouldOpen: boolean;
    _renderId: number;
    get $container(): HTMLElement;
    get isOpen(): boolean;
    showDialogForEditor(editor: any, op: any): void;
    _op: any;
    hideDialog(): void;
    _applyLinkOptions(linkOptions: any): void;
    _dismissDialog: () => void;
    _hasClosed: () => void;
    _renderDialog(): void;
}
