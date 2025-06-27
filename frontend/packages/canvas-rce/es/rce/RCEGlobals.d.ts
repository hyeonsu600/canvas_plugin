export default instance;
export type Features = {
    file_verifiers_for_quiz_links: boolean;
};
declare const instance: RCEGlobals;
/**
 * @typedef {Object} Features
 * @property {boolean} file_verifiers_for_quiz_links
 */
declare class RCEGlobals {
    _data: {
        features: {};
        config: {};
    } | undefined;
    getFeatures(): Features;
    setFeatures(features: any): void;
    getConfig(): {};
    setConfig(config: any): void;
}
