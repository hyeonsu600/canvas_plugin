export function isVideo(type: any): boolean;
export function isAudio(type: any): boolean;
export function sizeMediaPlayer(player: any, type: any, container: any): {
    width: any;
    height: any;
};
export namespace AUDIO_PLAYER_SIZE {
    let width: string;
    let height: string;
}
export const NON_PREVIEWABLE_TYPES: string[];
export function isPreviewable(type: any): boolean;
