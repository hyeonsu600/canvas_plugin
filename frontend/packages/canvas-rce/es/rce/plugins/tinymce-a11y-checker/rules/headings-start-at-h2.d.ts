declare namespace _default {
    let id: string;
    function test(elem: any, config?: {}): boolean;
    function data(_elem: any): {
        action: string;
    };
    function form(): ({
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
    function update(elem: any, data: any): any;
    function message(): string;
    function why(): string;
    let link: string;
    function linkText(): string;
}
export default _default;
