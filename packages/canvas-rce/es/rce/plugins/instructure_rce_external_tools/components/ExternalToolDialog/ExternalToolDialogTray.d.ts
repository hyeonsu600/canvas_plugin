import React from 'react';
import type { TrayProps } from '@instructure/ui-tray';
interface ExternalToolDialogTrayProps {
    open: TrayProps['open'];
    label: TrayProps['label'];
    mountNode: TrayProps['mountNode'];
    onOpen?: TrayProps['onOpen'];
    onClose?: TrayProps['onClose'];
    onCloseButton?: () => void;
    name: string;
    children: TrayProps['children'];
}
export declare function ExternalToolDialogTray(props: ExternalToolDialogTrayProps): React.JSX.Element;
export {};
