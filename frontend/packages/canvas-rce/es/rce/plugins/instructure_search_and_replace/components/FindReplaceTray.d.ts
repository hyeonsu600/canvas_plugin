import React from 'react';
type FindReplaceTrayProps = {
    onNext: () => void;
    onPrevious: () => void;
    onFind: (text: string) => void;
    onRequestClose: () => void;
    onReplace: (newText: string, forward?: boolean, all?: boolean) => void;
    index: number;
    max: number;
    initialText?: string;
    selectionContext?: string[];
};
export default function FindReplaceTray({ onNext, onPrevious, onFind, onRequestClose, onReplace, index, max, initialText, selectionContext, }: FindReplaceTrayProps): React.JSX.Element;
export {};
