declare const _default: {
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
};
export default _default;
