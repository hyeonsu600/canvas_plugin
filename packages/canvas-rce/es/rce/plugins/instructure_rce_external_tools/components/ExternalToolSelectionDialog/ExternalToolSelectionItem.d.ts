import React from 'react';
export interface LtiToolProps {
    title: string;
    image?: string | null;
    onAction: () => void;
    description?: string | null;
}
export default function ExternalToolSelectionItem(props: LtiToolProps): React.JSX.Element;
export declare const styles: {
    appTitle: object;
    appButton: object;
};
