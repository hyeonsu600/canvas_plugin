import type { ExternalToolsEditor, RCEWrapperInterface, RCEWrapperProps } from '../../types';
/**
 * Type of the "editor buttons" that come from Canvas.
 *
 * They're actually the available LTI Tool configurations, so we give them a more reasonable name here.
 */
export type RceLtiToolInfo = NonNullable<NonNullable<RCEWrapperProps['ltiTools']>[number]>;
export interface ExternalToolsEnv {
    editor: ExternalToolsEditor | null;
    rceWrapper: RCEWrapperInterface | null;
    availableRceLtiTools: RceLtiToolInfo[];
    contextAssetInfo: {
        contextType: string;
        contextId: string;
    } | null;
    resourceSelectionUrlOverride: string | null;
    ltiIframeAllowPolicy: string;
    isA2StudentView: boolean;
    maxMruTools: number;
    canvasOrigin: string;
    containingCanvasLtiToolId: string | null;
    editorSelection: string | null;
    editorContent: string | null;
    insertCode(code: string): any;
    replaceCode(code: string): any;
}
/**
 * Gets the environment information for the external tools dialog for a given tinyMCE editor.
 */
export declare function externalToolsEnvFor(editor: ExternalToolsEditor | null | undefined): ExternalToolsEnv;
