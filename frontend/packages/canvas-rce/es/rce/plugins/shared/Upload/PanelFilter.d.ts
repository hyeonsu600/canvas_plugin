import React from 'react';
interface PanelFilterProps {
    mountNode?: HTMLElement;
    onChange: Function;
    sortValue: string;
    searchString: string;
    contentType: string;
}
export default function PanelFilter({ mountNode, onChange, sortValue, searchString, contentType, }: PanelFilterProps): React.JSX.Element;
export {};
