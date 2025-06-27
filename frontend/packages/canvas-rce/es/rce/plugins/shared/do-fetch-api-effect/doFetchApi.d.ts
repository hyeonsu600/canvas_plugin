import { type Links } from './parse-link-header';
import type { QueryParameterRecord } from './query-string-encoding';
interface RequestInit {
    signal?: AbortSignal;
}
export type DoFetchApiOpts = {
    path: string;
    method?: string;
    headers?: {
        [k: string]: string;
    };
    params?: QueryParameterRecord;
    body?: BodyInit;
    fetchOpts?: RequestInit;
};
export type DoFetchApiResults<T> = {
    json?: T;
    response: Response;
    link?: Links;
};
export default function doFetchApi<T = unknown>({ path, method, headers, params, body, fetchOpts, }: DoFetchApiOpts): Promise<DoFetchApiResults<T>>;
export {};
