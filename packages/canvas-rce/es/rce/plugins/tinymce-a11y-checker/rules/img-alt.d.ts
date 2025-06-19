declare namespace _default {
    let id: string;
    function test(elem: any): boolean;
    function data(elem: any): {
        alt: any;
        decorative: boolean;
    };
    function form(): ({
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
    function update(elem: any, data: any): any;
    function message(): string;
    function why(): string;
    let link: string;
    function linkText(): string;
}
export default _default;
