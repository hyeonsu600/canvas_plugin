export const CONTAINER_ID: "instructure-video-options-tray-container";
export namespace VIDEO_SIZE_DEFAULT {
    let height: string;
    let width: string;
}
export namespace STUDIO_PLAYER_VIDEO_SIZE_DEFAULT {
    let height_1: string;
    export { height_1 as height };
    let width_1: string;
    export { width_1 as width };
}
export namespace AUDIO_PLAYER_SIZE {
    let width_2: string;
    export { width_2 as width };
    let height_2: string;
    export { height_2 as height };
}
export function videoDefaultSize(): {
    height: string;
    width: string;
};
export default class TrayController {
    _editor: any;
    _isOpen: boolean;
    _shouldOpen: boolean;
    _renderId: number;
    get $container(): HTMLElement;
    get isOpen(): boolean;
    showTrayForEditor(editor: any): void;
    $videoContainer: any;
    hideTrayForEditor(editor: any): void;
    _applyVideoOptions(videoOptions: any): void;
    _dismissTray(): void;
    requestSubtitlesFromIframe(cb: any): void;
    _subtitleListener: AbortController | undefined;
    _renderTray(trayProps: any): void;
}
