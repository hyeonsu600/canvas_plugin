import React from 'react';
type Props = {
    label: string;
    name: string;
    value: string;
    onChange: (e: {
        target: {
            name: string;
            value: string;
        };
    }) => void;
};
export default class ColorField extends React.Component<Props> {
    state: {
        textValue: string;
    };
    handleTextChange: (event: React.ChangeEvent<HTMLInputElement> & {
        target: {
            name: string;
            value: string;
        };
    }) => void;
    handlePickerChange: (color: {
        rgb: {
            r: number;
            g: number;
            b: number;
            a: number;
        };
    }) => void;
    render(): React.JSX.Element;
}
export {};
