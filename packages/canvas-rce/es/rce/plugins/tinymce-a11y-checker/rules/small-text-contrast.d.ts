declare namespace _default {
    let id: string;
    function test(elem: any, config?: {}): any;
    function data(elem: any): {
        color: string;
        id: string;
    };
    function form(): {
        label: string;
        dataKey: string;
        color: boolean;
    }[];
    function update(elem: any, data: any): any;
    function message(): string;
    function why(): string;
    let link: string;
    function linkText(): string;
}
export default _default;
