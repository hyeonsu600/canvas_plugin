import React from 'react';
import { SearchReplacePlugin } from '../types';
import { UndoManager } from 'tinymce';
type FindReplaceTrayControllerProps = {
    plugin: SearchReplacePlugin;
    onDismiss: () => void;
    initialText?: string;
    undoManager?: UndoManager;
    getSelectionContext: () => string[];
};
export default function FindReplaceTrayController({ plugin, onDismiss, initialText, undoManager, getSelectionContext, }: FindReplaceTrayControllerProps): React.JSX.Element;
export {};
