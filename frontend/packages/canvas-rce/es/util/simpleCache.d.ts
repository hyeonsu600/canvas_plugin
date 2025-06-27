/**
 * Builds a simple cache using a map and a compute function.
 *
 * @param compute The function to compute values in the cache
 * @param cache The map to use as a cache
 */
export declare function simpleCache<K, V>(compute: (value: K) => V, cache?: Map<K, V>): SimpleCache<K, V>;
export interface SimpleCache<K, V> {
    cache: Map<K, V>;
    get(key: K): V;
}
