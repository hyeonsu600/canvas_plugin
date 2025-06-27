declare function StatusBar(props: any): React.JSX.Element;
declare namespace StatusBar {
    namespace propTypes {
        export let id: import("prop-types").Validator<string>;
        export { bool as rceIsFullscreen };
        export let onChangeView: import("prop-types").Validator<(...args: any[]) => any>;
        export let path: import("prop-types").Requireable<(string | null | undefined)[]>;
        export { number as wordCount };
        export let editorView: import("prop-types").Requireable<string>;
        export { func as onResize };
        export let onKBShortcutModalOpen: import("prop-types").Validator<(...args: any[]) => any>;
        export let onA11yChecker: import("prop-types").Validator<(...args: any[]) => any>;
        export let onFullscreen: import("prop-types").Validator<(...args: any[]) => any>;
        export let preferredHtmlEditor: import("prop-types").Requireable<string>;
        export { bool as readOnly };
        export { string as a11yBadgeColor };
        export { number as a11yErrorsCount };
        export let onWordcountModalOpen: import("prop-types").Validator<(...args: any[]) => any>;
        export let disabledPlugins: import("prop-types").Requireable<(string | null | undefined)[]>;
        export let features: import("prop-types").Requireable<(string | null | undefined)[]>;
        export { func as onAI };
    }
    namespace defaultProps {
        export let a11yBadgeColor: string;
        export let a11yErrorsCount: number;
        let disabledPlugins_1: never[];
        export { disabledPlugins_1 as disabledPlugins };
    }
}
export default StatusBar;
export const WYSIWYG_VIEW: "WYSIWYG";
export const PRETTY_HTML_EDITOR_VIEW: "PRETTY";
export const RAW_HTML_EDITOR_VIEW: "RAW";
import React from 'react';
import { bool } from 'prop-types';
import { number } from 'prop-types';
import { func } from 'prop-types';
import { string } from 'prop-types';
