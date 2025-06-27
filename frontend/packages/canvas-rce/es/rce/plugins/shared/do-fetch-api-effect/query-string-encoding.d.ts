type QueryParameterElement = string | number | boolean | null | undefined | (() => string) | Array<QueryParameterElement> | QueryParameterRecord;
export type QueryParameterRecord = {
    [k: string]: QueryParameterElement;
};
export declare function toQueryString(params: QueryParameterRecord): string;
export {};
