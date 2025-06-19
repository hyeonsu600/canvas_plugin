declare const _default: ({
    id: string;
    test: (elem: any, config?: {}) => any;
    data: (elem: any) => {
        color: string;
        id: string;
    };
    form: () => {
        label: string;
        dataKey: string;
        color: boolean;
    }[];
    update: (elem: any, data: any) => any;
    message: () => string;
    why: () => string;
    link: string;
    linkText: () => string;
} | {
    id: string;
    test: (elem: any) => boolean;
    data: (elem: any) => {
        alt: any;
        decorative: boolean;
    };
    form: () => ({
        label: string;
        dataKey: string;
        disabledIf: (data: any) => any;
        checkbox?: undefined;
    } | {
        label: string;
        dataKey: string;
        checkbox: boolean;
        disabledIf?: undefined;
    })[];
    update: (elem: any, data: any) => any;
    message: () => string;
    why: () => string;
    link: string;
    linkText: () => string;
} | {
    id: string;
    test: (elem: any) => boolean;
    data: (_elem: any) => {
        caption: string;
    };
    form: () => {
        label: string;
        dataKey: string;
    }[];
    update: (elem: any, data: any) => any;
    message: () => string;
    why: () => string;
    link: string;
    linkText: () => string;
} | {
    id: string;
    test: (elem: any) => any;
    data: (_elem: any) => {
        header: string;
    };
    form: () => {
        label: string;
        dataKey: string;
        options: string[][];
    }[];
    update: (elem: any, data: any) => any;
    message: () => string;
    why: () => string;
    link: string;
    linkText: () => string;
} | {
    id: string;
    test: (elem: any) => boolean;
    data: (elem: any) => {
        scope: any;
    };
    form: () => {
        label: string;
        dataKey: string;
        options: string[][];
    }[];
    update: (elem: any, data: any) => any;
    message: () => string;
    why: () => string;
    link: string;
    linkText: () => string;
} | {
    id: string;
    test(elem: any): boolean;
    data: (_elem: any) => {
        combine: boolean;
    };
    form: () => {
        label: string;
        checkbox: boolean;
        dataKey: string;
    }[];
    update(elem: any, data: any): any;
    rootNode(elem: any): any;
    message: () => string;
    why: () => string;
    link: string;
    linkText: () => string;
} | {
    id: string;
    test: (elem: any) => any;
    data: (_elem: any) => {
        action: string;
    };
    form: () => {
        label: string;
        dataKey: string;
        options: string[][];
    }[];
    update: (elem: any, data: any) => any;
    message: () => string;
    why: () => string;
    link: string;
    linkText: () => string;
} | {
    'max-alt-length': number;
    id: string;
    test: (elem: any) => boolean;
    data: (elem: any) => {
        alt: any;
    };
    form: () => {
        label: string;
        dataKey: string;
        textarea: boolean;
    }[];
    update: (elem: any, data: any) => any;
    message: () => string;
    why: () => string;
    link: string;
} | {
    'max-heading-length': number;
    id: string;
    test: (elem: any) => boolean;
    data: (_elem: any) => {
        change: boolean;
    };
    form: () => {
        label: string;
        checkbox: boolean;
        dataKey: string;
    }[];
    update: (elem: any, data: any) => any;
    message: () => string;
    why: () => string;
    link: string;
} | {
    id: string;
    test(elem: any): boolean;
    data: (elem: any) => {
        orderedStart: any;
        formatAsList: boolean;
    };
    form: () => {
        label: string;
        checkbox: boolean;
        dataKey: string;
    }[];
    update(elem: any, data: any): any;
    rootNode(elem: any): any;
    message: () => string;
    why: () => string;
    link: string;
    linkText: () => string;
} | {
    id: string;
    test: (elem: any, config?: {}) => boolean;
    data: (_elem: any) => {
        action: string;
    };
    form: () => ({
        label: string;
        dataKey: string;
        options: string[][];
        alert?: undefined;
        variant?: undefined;
        message?: undefined;
    } | {
        label: string;
        alert: boolean;
        dataKey: string;
        variant: string;
        message: string;
        options?: undefined;
    })[];
    update: (elem: any, data: any) => any;
    message: () => string;
    why: () => string;
    link: string;
    linkText: () => string;
})[];
export default _default;
