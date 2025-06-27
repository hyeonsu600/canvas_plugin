import { Lti13ContentItemJson } from './Lti13ContentItemJson';
import { ExternalToolsEnv } from '../ExternalToolsEnv';
export default function processEditorContentItems(event: {
    data?: {
        content_items?: Lti13ContentItemJson[] | null;
        ltiEndpoint?: string | null;
        replaceEditorContents?: boolean | null;
        msg?: string | null;
        errorMsg?: string | null;
    };
}, env: ExternalToolsEnv, dialog: {
    close(): any;
} | null): void;
