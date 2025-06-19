declare namespace _default {
    let id: string;
    function test(elem: any): boolean;
    function data(elem: any): {
        orderedStart: any;
        formatAsList: boolean;
    };
    function form(): {
        label: string;
        checkbox: boolean;
        dataKey: string;
    }[];
    function update(elem: any, data: any): any;
    function rootNode(elem: any): any;
    function message(): string;
    function why(): string;
    let link: string;
    function linkText(): string;
}
export default _default;
