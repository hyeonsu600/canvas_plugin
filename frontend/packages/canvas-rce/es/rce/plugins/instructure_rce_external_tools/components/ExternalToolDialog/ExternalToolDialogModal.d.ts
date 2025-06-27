import React from 'react';
import { ModalProps } from '@instructure/ui-modal/types';
export declare function ExternalToolDialogModal(props: Pick<ModalProps, 'label' | 'open' | 'onOpen' | 'onClose' | 'mountNode'> & {
    onCloseButton: () => void;
    name: string;
    children: React.ReactNode;
}): React.JSX.Element;
