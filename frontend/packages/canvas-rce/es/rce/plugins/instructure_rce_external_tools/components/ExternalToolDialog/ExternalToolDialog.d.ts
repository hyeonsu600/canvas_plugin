import React from 'react';
import { ExternalToolsEnv } from '../../ExternalToolsEnv';
import { RceToolWrapper } from '../../RceToolWrapper';
export interface ExternalToolDialogProps {
    env: ExternalToolsEnv;
    iframeAllowances: string;
    resourceSelectionUrlOverride?: string | null;
}
export default class ExternalToolDialog extends React.Component<ExternalToolDialogProps, ExternalToolDialogState> {
    static defaultProps: Partial<ExternalToolDialogProps>;
    state: ExternalToolDialogState;
    formRef: React.RefObject<HTMLFormElement>;
    iframeRef: React.RefObject<HTMLIFrameElement>;
    open(button: RceToolWrapper): void;
    close(): void;
    handleBeforeUnload: (ev: Event) => string;
    private handleExternalContentReady;
    get resourceSelectionOrigin(): string;
    handlePostedMessage: (ev: Pick<MessageEvent, "origin" | "data">) => void;
    handleClose: () => void;
    handleOpen: () => void;
    handleRemove: () => void;
    calcIFrameHeight: () => string;
    render(): React.JSX.Element;
}
interface ExternalToolDialogState {
    open: boolean;
    button: RceToolWrapper | null;
    form: ExternalToolDialogForm;
    iframeLoaded: boolean;
}
export interface ExternalToolDialogForm {
    url: string;
    selection: string;
    contents: string;
    parent_frame_context: string | null;
}
export {};
