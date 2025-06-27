import React from 'react';
import { Header, CountRow } from '../utils/tableContent';
export type WordCountModalProps = {
    readonly headers: Header[];
    readonly rows: CountRow[];
    readonly onDismiss: () => void;
};
export declare const WordCountModal: ({ headers, rows, onDismiss }: WordCountModalProps) => React.JSX.Element;
