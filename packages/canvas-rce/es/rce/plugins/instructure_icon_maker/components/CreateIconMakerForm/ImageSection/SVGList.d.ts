export function svgSourceFor(type: any): {
    art: {
        source: () => string;
        label: string;
    };
    engineering: {
        source: () => string;
        label: string;
    };
    english: {
        source: () => string;
        label: string;
    };
    health: {
        source: () => string;
        label: string;
    };
    languageArts: {
        source: () => string;
        label: string;
    };
    languages: {
        source: () => string;
        label: string;
    };
    library: {
        source: () => string;
        label: string;
    };
    math: {
        source: () => string;
        label: string;
    };
    music: {
        source: () => string;
        label: string;
    };
    performingArts: {
        source: () => string;
        label: string;
    };
    physicalEducation: {
        source: () => string;
        label: string;
    };
    religion: {
        source: () => string;
        label: string;
    };
    science: {
        source: () => string;
        label: string;
    };
    socialStudies: {
        source: () => string;
        label: string;
    };
    technology: {
        source: () => string;
        label: string;
    };
} | {
    art: {
        source: (color?: string) => string;
        label: string;
    };
    engineering: {
        source: (color?: string) => string;
        label: string;
    };
    english: {
        source: (color?: string) => string;
        label: string;
    };
    extracurricular: {
        source: (color?: string) => string;
        label: string;
    };
    health: {
        source: (color?: string) => string;
        label: string;
    };
    languageArts: {
        source: (color?: string) => string;
        label: string;
    };
    languages: {
        source: (color?: string) => string;
        label: string;
    };
    library: {
        source: (color?: string) => string;
        label: string;
    };
    math: {
        source: (color?: string) => string;
        label: string;
    };
    music: {
        source: (color?: string) => string;
        label: string;
    };
    performingArts: {
        source: (color?: string) => string;
        label: string;
    };
    physicalEducation: {
        source: (color?: string) => string;
        label: string;
    };
    religion: {
        source: (color?: string) => string;
        label: string;
    };
    science: {
        source: (color?: string) => string;
        label: string;
    };
    socialStudies: {
        source: (color?: string) => string;
        label: string;
    };
    technology: {
        source: (color?: string) => string;
        label: string;
    };
};
export namespace TYPE {
    let Singlecolor: string;
    let Multicolor: string;
}
export default SVGList;
declare function SVGList({ type, onSelect, fillColor, onMount }: {
    type: any;
    onSelect: any;
    fillColor: any;
    onMount: any;
}): React.JSX.Element;
declare namespace SVGList {
    namespace propTypes {
        let fillColor: PropTypes.Requireable<string>;
        let type: PropTypes.Validator<string>;
        let onSelect: PropTypes.Validator<(...args: any[]) => any>;
        let onMount: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        let fillColor_1: string;
        export { fillColor_1 as fillColor };
        export function onMount_1(): void;
        export { onMount_1 as onMount };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
