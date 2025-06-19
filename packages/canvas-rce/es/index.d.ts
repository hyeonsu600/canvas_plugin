import { Mathml } from './enhance-user-content/mathml';
import type { EditorOptions } from './rce/RCEWrapperProps';
import RCEWrapper from './rce/RCEWrapper';
export type { Editor } from 'tinymce';
export { getContrastStatus, getDefaultColors, isTransparent, } from './rce/plugins/instructure_color/components/colorUtils';
export { ColorPicker, type ColorTab, type ColorSpec, type TabsSpec, type ColorsInUse, } from './rce/plugins/instructure_color/components/ColorPicker';
export * from './enhance-user-content/index';
export declare const defaultConfiguration: {
    auto_focus: boolean;
    block_formats: undefined;
    body_class: string;
    content_css: never[];
    directionality: string;
    height: undefined;
    language: string;
    menubar: undefined;
    menu: undefined;
    toolbar: undefined;
    plugins: undefined;
    branding: boolean;
    browser_spellcheck: boolean;
    content_style: string;
    convert_urls: boolean;
    font_formats: string;
    language_load: boolean;
    language_url: string;
    toolbar_mode: string;
    mobile: {
        theme: string;
    };
    preview_styles: string;
    remove_script_host: boolean;
    resize: boolean;
    skin: boolean;
    statusbar: boolean;
    valid_elements: string;
    extended_valid_elements: string;
    non_empty_elements: string;
    target_list: boolean;
    link_title: boolean;
    default_link_target: string;
    style_formats: {
        title: string;
        items: {
            title: string;
            format: string;
        }[];
    }[];
};
export { instuiPopupMountNodeFn } from './util/fullscreenHelpers';
export { Mathml };
export { RCEVariantValues } from './rce/RCEVariants';
export { UploadFilePanelIds, handleSubmit, UploadFile, type UploadFileProps, } from './rce/plugins/shared/Upload';
export declare function renderIntoDiv(editorEl: HTMLElement, props: EditorOptions, cb?: (ref: RCEWrapper) => void): void;
export declare function getRCSAuthenticationHeaders(jwt: string): {
    Authorization: string;
};
export declare function getRCSOriginFromHost(host: string): any;
