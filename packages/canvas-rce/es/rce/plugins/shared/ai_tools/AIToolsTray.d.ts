import React from 'react';
type AIToolsTrayContent = {
    type: 'selection' | 'full';
    content: string;
};
type AIToolsTrayProps = {
    open: boolean;
    container: HTMLElement;
    mountNode: HTMLElement;
    contextId: string;
    contextType: string;
    currentContent: AIToolsTrayContent;
    onClose: () => void;
    onInsertContent: (content: string) => void;
    onReplaceContent: (content: string) => void;
};
export declare const AIToolsTray: ({ open, container, mountNode, contextId, contextType, currentContent, onClose, onInsertContent, onReplaceContent, }: AIToolsTrayProps) => React.JSX.Element;
export {};
