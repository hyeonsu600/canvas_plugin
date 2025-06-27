export const defaultState: {
    shape: string;
    rotation: number;
    scaleRatio: number;
    translateX: number;
    translateY: number;
    direction: number;
};
export namespace actions {
    let SET_SHAPE: string;
    let SET_ROTATION: string;
    let SET_SCALE_RATIO: string;
    let SET_TRANSLATE_X: string;
    let SET_TRANSLATE_Y: string;
    let UPDATE_SETTINGS: string;
    let RESET_SETTINGS: string;
}
export function cropperSettingsReducer(state: any, action: any): any;
