import React from 'react';
import type { AlertVariant } from './types';
interface AlertMessageAreaProps {
    messages: {
        id: number;
        variant: AlertVariant;
        text: string;
    }[];
    afterDismiss: (messageId: number) => void;
    liveRegion?: () => HTMLElement | null | undefined;
}
/**
 * Shows messages that have been provided to it in the RCE
 */
export default function AlertMessageArea({ messages, afterDismiss, liveRegion, }: AlertMessageAreaProps): React.JSX.Element;
export {};
