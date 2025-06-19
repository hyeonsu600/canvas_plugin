import React from 'react';
type AIResponseModaProps = {
    open: boolean;
    html: string;
    onClose: () => void;
    onInsert: () => void;
    onReplace: () => void;
};
declare const AIResponseModal: ({ open, html, onClose, onInsert, onReplace }: AIResponseModaProps) => React.JSX.Element;
export { AIResponseModal };
