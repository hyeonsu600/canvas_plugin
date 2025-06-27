declare namespace _default {
    let id: string;
    function test(elem: any, config?: {}): any;
    let data: (elem: any) => {
        color: string;
        id: string;
    };
    let form: () => {
        label: string;
        dataKey: string;
        color: boolean;
    }[];
    let update: (elem: any, data: any) => any;
    function message(): string;
    function why(): string;
    let link: string;
    function linkText(): string;
}
export default _default;
