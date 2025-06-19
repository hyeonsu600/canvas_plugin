declare const _default: {
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
};
export default _default;
