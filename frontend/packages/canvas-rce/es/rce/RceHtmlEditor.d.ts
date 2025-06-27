import React from 'react';
interface RceHtmlEditorProps {
    code: string;
    height?: string;
    onChange?: (value: string) => void;
}
declare const RceHtmlEditor: React.ForwardRefExoticComponent<RceHtmlEditorProps & React.RefAttributes<HTMLDivElement>>;
export default RceHtmlEditor;
