/**
 * Helper type that takes an input Record type and produces a copy where all properties are optional and nullable,
 * recursively.
 *
 * Useful for declaring the type of unsafe input JSON to ensure that proper null checking is handled.
 */
export type DeepPartialNullable<T> = {
    [K in keyof T]?: (T[K] extends object ? DeepPartialNullable<T[K]> : T[K]) | null;
};
/**
 * Implementation of DeepPartial that handles children that may be optional or nullable.
 */
export type DeepPartialOptional<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartialOptional<T[K]> : T[K] extends object | null ? DeepPartialOptional<T[K]> | null : T[K] extends object | undefined ? DeepPartialOptional<T[K]> | undefined : T[K] extends object | null | undefined ? DeepPartialOptional<T[K]> | null | undefined : T[K];
};
