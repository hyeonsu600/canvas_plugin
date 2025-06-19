import { ExternalToolsEditor } from '../../types';
/**
 * This plugin adds the "Apps" toolbar button and the "Apps" menu item. It is a rewrite of 'instructure_external_tools'
 * to live fully in the canvas-rce package. It supports running in an iframe as part of an LTI tool, such as
 * new quizzes.
 *
 * @param editor
 */
export declare function initExternalToolsLocalPlugin(editor: ExternalToolsEditor): void;
