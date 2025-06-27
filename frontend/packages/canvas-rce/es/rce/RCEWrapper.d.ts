import React, { ReactNode } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import tinymce from 'tinymce';
import type { Editor as TinyMCEEditor } from 'tinymce';
import { PlaceHoldableThingInfo } from '../util/loadingPlaceholder';
import EncryptedStorage from '../util/encrypted-storage';
import { RCEVariant } from './RCEVariants';
import { mergeMenu, mergeMenuItems, mergePlugins, mergeToolbar, parsePluginsToExclude } from './RCEWrapper.utils';
import { AlertMessage, EditorOptions, RCETrayProps } from './types';
export declare function storageAvailable(): boolean | undefined;
interface RCEWrapperProps {
    ai_text_tools?: boolean;
    autosave?: {
        enabled?: boolean;
        maxAge?: number;
        interval?: number;
    };
    canvasOrigin: string;
    defaultContent?: string;
    editorOptions: EditorOptions;
    editorView?: string;
    features: Record<string, unknown>;
    handleUnmount?: () => void;
    instRecordDisabled?: boolean;
    language?: string;
    liveRegion?: HTMLElement | null | (() => HTMLElement | null | undefined);
    ltiToolFavorites?: string[];
    maxInitRenderedRCEs: number;
    name?: string;
    onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
    onContentChange?: (content: string) => void;
    onFocus?: (rce: RCEWrapper) => void;
    onInitted?: (editor: TinyMCEEditor) => void;
    onRemove?: (arg1: RCEWrapper) => void;
    readOnly?: boolean;
    renderKBShortcutModal?: boolean;
    textareaClassName?: string;
    textareaId?: string;
    tinymce: typeof tinymce;
    trayProps: RCETrayProps;
    use_rce_icon_maker?: boolean;
    userCacheKey?: string;
}
interface RCEWrapperState {
    a11yErrorsCount: number;
    AIToolsOpen: boolean;
    AITToolsFocusReturn: unknown;
    alertId?: number;
    announcement: string | null;
    autoSavedContent: string;
    confirmAutoSave: boolean;
    editor: Editor;
    editorView: string;
    fullscreenState: {
        prevHeight: number;
        isTinyFullscreen?: boolean;
    };
    height: string;
    id: string;
    KBShortcutFocusReturn?: HTMLElement;
    KBShortcutModalOpen: boolean;
    messages: AlertMessage[];
    path: string[];
    shouldShowEditor: boolean;
    shouldShowOnFocusButton: boolean;
    wordCount: number;
}
declare class RCEWrapper extends React.Component<RCEWrapperProps, RCEWrapperState> {
    _destroyCalled: boolean;
    _editorPlaceholderRef: React.RefObject<HTMLElement>;
    _elementRef: React.RefObject<HTMLElement>;
    _focusRegio?: Element;
    _focusRegion?: Element;
    _mceSerializedInitialHtmlCached?: string | null;
    _showOnFocusButton?: HTMLElement;
    _statusBarId: string;
    _textareaEl?: HTMLTextAreaElement;
    _effectiveContainingContext: RCETrayProps['containingContext'];
    AIToolsTray?: ReactNode;
    editor: TinyMCEEditor | null;
    initialContent?: string;
    intersectionObserver?: IntersectionObserver;
    language: string;
    ltiToolFavorites: unknown[];
    mutationObserver?: MutationObserver;
    pendingEventHandlers: Array<() => void>;
    pluginsToExclude: string[];
    resizeObserver: ResizeObserver;
    storage?: EncryptedStorage;
    variant: RCEVariant;
    style: {
        css: string;
    };
    insert_code: typeof this.insertCode;
    get_code: typeof this.getCode;
    set_code: typeof this.setCode;
    static getByEditor(editor: TinyMCEEditor): any;
    static propTypes: {
        autosave: import("prop-types").Requireable<import("prop-types").InferProps<{
            enabled: import("prop-types").Requireable<boolean>;
            maxAge: import("prop-types").Requireable<number>;
        }>>;
        canvasOrigin: import("prop-types").Requireable<string>;
        defaultContent: import("prop-types").Requireable<string>;
        editorOptions: import("prop-types").Requireable<import("prop-types").InferProps<{
            height: import("prop-types").Requireable<NonNullable<string | number | null | undefined>>;
            toolbar: import("prop-types").Requireable<(import("prop-types").InferProps<{
                name: import("prop-types").Validator<string>;
                items: import("prop-types").Validator<(string | null | undefined)[]>;
            }> | null | undefined)[]>;
            menu: import("prop-types").Requireable<{
                [x: string]: import("prop-types").InferProps<{
                    title: import("prop-types").Requireable<string>;
                    items: import("prop-types").Validator<string>;
                }> | null | undefined;
            }>;
            plugins: import("prop-types").Requireable<(string | null | undefined)[]>;
            readonly: import("prop-types").Requireable<boolean>;
            selector: import("prop-types").Requireable<string>;
            init_instance_callback: import("prop-types").Requireable<(...args: any[]) => any>;
        }>>;
        handleUnmount: import("prop-types").Requireable<(...args: any[]) => any>;
        editorView: import("prop-types").Requireable<string>;
        renderKBShortcutModal: import("prop-types").Requireable<boolean>;
        id: import("prop-types").Requireable<string>;
        language: import("prop-types").Requireable<string>;
        liveRegion: import("prop-types").Validator<(...args: any[]) => any>;
        ltiTools: import("prop-types").Requireable<(import("prop-types").InferProps<{
            id: import("prop-types").Requireable<NonNullable<string | number | null | undefined>>;
            favorite: import("prop-types").Requireable<boolean>;
            on_by_default: import("prop-types").Requireable<boolean>;
            name: import("prop-types").Requireable<string>;
            description: import("prop-types").Requireable<string>;
            icon_url: import("prop-types").Requireable<string>;
            height: import("prop-types").Requireable<number>;
            width: import("prop-types").Requireable<number>;
            use_tray: import("prop-types").Requireable<boolean>;
            canvas_icon_class: import("prop-types").Requireable<any>;
        }> | null | undefined)[]>;
        onContentChange: import("prop-types").Requireable<(...args: any[]) => any>;
        onFocus: import("prop-types").Requireable<(...args: any[]) => any>;
        onBlur: import("prop-types").Requireable<(...args: any[]) => any>;
        onInitted: import("prop-types").Requireable<(...args: any[]) => any>;
        onRemove: import("prop-types").Requireable<(...args: any[]) => any>;
        textareaClassName: import("prop-types").Requireable<string>;
        textareaId: import("prop-types").Validator<string>;
        readOnly: import("prop-types").Requireable<boolean>;
        tinymce: import("prop-types").Requireable<object>;
        trayProps: import("prop-types").Requireable<import("prop-types").InferProps<{
            canUploadFiles: import("prop-types").Validator<boolean>;
            contextId: import("prop-types").Validator<string>;
            contextType: import("prop-types").Validator<string>;
            containingContext: import("prop-types").Requireable<import("prop-types").InferProps<{
                contextType: import("prop-types").Validator<string>;
                contextId: import("prop-types").Validator<string>;
                userId: import("prop-types").Validator<string>;
            }>>;
            filesTabDisabled: import("prop-types").Requireable<boolean>;
            host: import("prop-types").Requireable<string>;
            jwt: import("prop-types").Requireable<string>;
            refreshToken: import("prop-types").Requireable<(...args: any[]) => any>;
            source: import("prop-types").Requireable<import("prop-types").InferProps<{
                fetchImages: import("prop-types").Validator<(...args: any[]) => any>;
            }>>;
            themeUrl: import("prop-types").Requireable<string>;
        }>>;
        toolbar: import("prop-types").Requireable<(import("prop-types").InferProps<{
            name: import("prop-types").Validator<string>;
            items: import("prop-types").Validator<(string | null | undefined)[]>;
        }> | null | undefined)[]>;
        menu: import("prop-types").Requireable<{
            [x: string]: import("prop-types").InferProps<{
                title: import("prop-types").Requireable<string>;
                items: import("prop-types").Validator<string>;
            }> | null | undefined;
        }>;
        instRecordDisabled: import("prop-types").Requireable<boolean>;
        highContrastCSS: import("prop-types").Requireable<(string | null | undefined)[]>;
        maxInitRenderedRCEs: import("prop-types").Requireable<number>;
        use_rce_icon_maker: import("prop-types").Requireable<boolean>;
        features: import("prop-types").Requireable<{
            [x: string]: boolean | null | undefined;
        }>;
        flashAlertTimeout: import("prop-types").Requireable<number>;
        timezone: import("prop-types").Requireable<string>;
        userCacheKey: import("prop-types").Requireable<string>;
        externalToolsConfig: import("prop-types").Requireable<import("prop-types").InferProps<{
            ltiIframeAllowances: import("prop-types").Requireable<(string | null | undefined)[]>;
            containingCanvasLtiToolId: import("prop-types").Requireable<string>;
            resourceSelectionUrlOverride: import("prop-types").Requireable<string>;
            isA2StudentView: import("prop-types").Requireable<boolean>;
            maxMruTools: import("prop-types").Requireable<number>;
        }>>;
        ai_text_tools: import("prop-types").Requireable<boolean>;
        variant: import("prop-types").Requireable<"full" | "lite" | "text-only" | "text-block">;
    };
    static defaultProps: {
        trayProps: null;
        autosave: {
            enabled: boolean;
        };
        highContrastCSS: never[];
        ltiTools: never[];
        maxInitRenderedRCEs: number;
        features: {};
        timezone: string;
        canvasOrigin: string;
        variant: string;
    };
    static skinCssInjected: boolean;
    constructor(props: RCEWrapperProps);
    _tagTinymceAuxDiv(): void;
    _myTinymceAuxDiv(): HTMLElement | null;
    getRequiredFeatureStatuses(): {
        new_math_equation_handling: unknown;
        explicit_latex_typesetting: unknown;
        rce_transform_loaded_content: unknown;
        file_verifiers_for_quiz_links: unknown;
        rce_find_replace: unknown;
        consolidated_media_player: unknown;
    };
    getRequiredConfigValues(): {
        locale: string;
        flashAlertTimeout: any;
        timezone: any;
    };
    getCanvasUrl(): string;
    getResourceIdentifiers(): {
        resourceType: any;
        resourceId: any;
    };
    getCode(): string;
    checkReadyToGetCode(promptFunc: any): boolean;
    setCode(newContent: string): void;
    RCEClosed(): void;
    indicateEditor(element: Element): void;
    contentInserted(element: Element): void;
    sizeEditorForContent(elem: Element): void;
    checkImageLoadError(element: Element): void;
    insertCode(code: string): void;
    replaceCode(code: string): void;
    insertEmbedCode(code: string): void;
    insertImage(image: unknown): {
        imageElem: any;
        loadingPromise: Promise<void>;
    };
    insertImagePlaceholder(fileMetaProps: PlaceHoldableThingInfo): Promise<HTMLElement>;
    insertVideo(video: unknown): void;
    insertAudio(audio: unknown): void;
    insertMathEquation(tex: unknown): void;
    removePlaceholders(name: string): void;
    insertLink(link: unknown): void;
    existingContentToLink(): any;
    existingContentToLinkIsImg(): any;
    tinymceOn(tinymceEventName: any, handler: any): void;
    mceInstance(): TinyMCEEditor;
    onTinyMCEInstance(command: string, ...args: any[]): void;
    destroy(): void;
    onRemove: () => void;
    getTextarea(): HTMLTextAreaElement | null;
    textareaValue(): string;
    get id(): string;
    getHtmlEditorStorage(): any;
    toggleView: (newView: string) => void;
    toggleFullscreen: () => void;
    _isFullscreen(): boolean;
    _enterFullscreen(): void;
    _exitFullscreen(): void;
    _onFullscreenChange: (event: any) => void;
    _handleFullscreenResize: () => void;
    _getStatusBarHeight(): number;
    _setHeight(newHeight: number): void;
    focus(): void;
    focusCurrentView(): void;
    is_dirty(): boolean;
    /**
     * Holds a copy of the initial content of the editor as serialized by tinyMCE to normalize it.
     */
    get _mceSerializedInitialHtml(): string;
    isHtmlView(): boolean;
    isHidden(): boolean;
    get iframe(): HTMLIFrameElement;
    get focused(): boolean;
    handleFocus(): void;
    contentTrayClosing: boolean;
    handleContentTrayClosing(isClosing: boolean): void;
    blurTimer: number;
    handleBlur(event: React.FocusEvent<HTMLElement>): void;
    handleFocusRCE: () => void;
    handleBlurRCE: (event: any) => void;
    handleFocusEditor: (_event: Event) => void;
    handleBlurEditor: (event: React.FocusEvent<HTMLElement>) => void;
    call(methodName: string, ...args: any[]): any;
    handleKey: (event: KeyboardEvent) => void;
    handleClickFullscreen: () => void;
    handleInputChange: () => void;
    onInit: (_event: Event, editor: TinyMCEEditor) => void;
    /**
     * Fix keyboard navigation in the expanded toolbar
     *
     * NOTE: This is a workaround for https://github.com/tinymce/tinymce/issues/8618
     *       and should be removed once that issue is resolved and the tinymce dependency is updated to include it.
     */
    fixToolbarKeyboardNavigation: () => void;
    /**
     * Sets up selection saving and restoration logic.
     *
     * There are certain actions a user can take when the RCE is not focused that clear the selection inside the
     * editor, such as invoking the Find feature of the browser. If the user then tries to insert content without
     * going back to the editor, the content would be inserted at the top of the RCE, instead of where their cursor
     * was.
     *
     * This method adds logic that saves and restores the selection to work around the issue.
     *
     * @private
     */
    _setupSelectionSaving: (editor: any) => void;
    announcing: number;
    announceContextToolbars(editor: TinyMCEEditor): void;
    initAutoSave: (editor: TinyMCEEditor) => void;
    cleanupAutoSave: (deleteAll?: boolean) => void;
    restoreAutoSave: (ans: any) => void;
    getAutoSaved(key: string): any;
    get isAutoSaving(): boolean | null | undefined;
    get autoSaveKey(): string;
    doAutoSave: (e: any, retry?: boolean) => void;
    onWordCountUpdate: (e: {
        wordCount: {
            words: number;
        };
    }) => void;
    onNodeChange: (e: any) => void;
    onEditorChange: (content: string, _editor: unknown) => void;
    onResize: (_e: unknown, coordinates: {
        deltaY: number;
    }) => void;
    onA11yChecker: (triggerElementId: string) => void;
    checkAccessibility: () => void;
    openKBShortcutModal: () => void;
    closeKBShortcutModal: () => void;
    KBShortcutModalExited: () => void;
    handleAIClick: () => void;
    closeAITools: () => void;
    AIToolsExited: () => void;
    handleInsertAIContent: (content: string) => void;
    handleReplaceAIContent: (content: string) => void;
    getCurrentContentForAI: () => {
        type: string;
        content: string;
    };
    componentWillUnmount(): void;
    wrapOptions(options?: {}): {
        readonly: boolean | undefined;
        theme: string;
        height: any;
        language: string | undefined;
        document_base_url: string;
        block_formats: any;
        setup: (editor: TinyMCEEditor) => void;
        content_css: any;
        content_style: string;
        menubar: string;
        menu: Record<string, {
            items: string;
        }>;
        toolbar: {
            items: string[];
            name: string;
        }[];
        contextmenu: string;
        toolbar_mode: string;
        toolbar_sticky: boolean;
        plugins: string[];
        textpattern_patterns: {
            start: string;
            cmd: string;
        }[];
        auto_focus: boolean;
        body_class: string;
        directionality: string;
        branding: boolean;
        browser_spellcheck: boolean;
        convert_urls: boolean;
        font_formats: string;
        language_load: boolean;
        language_url: string;
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
    handleTextareaChange: () => void;
    unhandleTextareaChange(): void;
    registerTextareaChange(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: RCEWrapperProps, prevState: RCEWrapperState): void;
    editorReallyDidMount(): void;
    setEditorView(view: any): void;
    addAlert: (alert: AlertMessage) => void;
    removeAlert: (messageId: number) => void;
    /**
     * Used for reseting the value during tests
     */
    resetAlertId: () => void;
    renderHtmlEditor(): React.JSX.Element;
    render(): React.JSX.Element;
}
export default RCEWrapper;
export { mergeMenuItems, mergeMenu, mergeToolbar, mergePlugins, parsePluginsToExclude };
