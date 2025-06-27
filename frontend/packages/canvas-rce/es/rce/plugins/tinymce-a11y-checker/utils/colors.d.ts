type Color = {
    r: number;
    g: number;
    b: number;
    a: number;
};
export declare function stringifyRGBA(rgba: Color): string;
export declare function parseRGBA(rgba: string): Color | null;
export declare function restrictColorValues(rgba: Color): Color;
export {};
