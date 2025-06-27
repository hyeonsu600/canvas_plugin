declare namespace _default {
    let id: string;
    function test(elem: any): boolean;
    function data(elem: any): {
        scope: any;
    };
    function form(): {
        label: string;
        dataKey: string;
        options: string[][];
    }[];
    function update(elem: any, data: any): any;
    function message(): string;
    function why(): string;
    let link: string;
    function linkText(): string;
}
export default _default;
