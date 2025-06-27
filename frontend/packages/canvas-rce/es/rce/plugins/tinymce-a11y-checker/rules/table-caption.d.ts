declare namespace _default {
    let id: string;
    function test(elem: any): boolean;
    function data(_elem: any): {
        caption: string;
    };
    function form(): {
        label: string;
        dataKey: string;
    }[];
    function update(elem: any, data: any): any;
    function message(): string;
    function why(): string;
    let link: string;
    function linkText(): string;
}
export default _default;
