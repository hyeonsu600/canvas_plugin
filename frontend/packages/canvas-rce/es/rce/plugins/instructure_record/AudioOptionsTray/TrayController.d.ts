export const CONTAINER_ID: "instructure-audio-options-tray-container";
export default class TrayController {
    _isOpen: boolean;
    _shouldOpen: boolean;
    _editor: any;
    _audioContainer: any;
    get container(): HTMLElement;
    get isOpen(): boolean;
    showTrayForEditor(editor: any): void;
    hideTrayForEditor(editor: any): void;
    _dismissTray(): void;
    _resetController(): Node;
    _applyAudioOptions(audioOptions: any): any;
    requestSubtitlesFromIframe(cb: any): void;
    _subtitleListener: AbortController | undefined;
    _renderTray(trayProps: any): void;
}
