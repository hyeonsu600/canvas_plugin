/**
 * Takes a dictionary with explicit keys and returns an object with three type-safe properties:
 *
 * - `byKey`: The original dictionary, but with the key of each value added to it as `[keyProp]`
 * - `values`: An array of the values in the original dictionary
 * - `keys`: An array of the keys in the original dictionary
 * - `TKey`: A placeholder value that holds the type of the keys
 * - `TValue`: A placeholder value that holds the type of the values
 *
 * This is useful to add explicit type checking to the pattern where a literal dictionary is used to define
 * a relationship between a known set of keys to some value type.
 *
 * For example:
 *
 * ```
 * const {
 *   byKey: itemDict,
 *   values: items,
 *   keys: itemSlugs,
 * } = typedKeyDict(
 *   {
 *     undo: {
 *       label: 'Undo',
 *       description: 'Undo the last action',
 *       performAction: () => {
 *         // Do work
 *       },
 *     },
 *     redo: {
 *       label: 'Redo',
 *       description: 'Redo the last undone action, or repeat the last action',
 *       performAction: () => {
 *         // Do work
 *       },
 *     },
 *   },
 *   'slug'
 * )
 *
 * // Values of itemDict now have a `slug` property with type `'undo' | 'redo'`
 *
 * const slug: 'undo' | 'redo' = itemDict.undo.slug
 *
 * // Key and value iteration are now type safe:
 *
 * items.forEach(item => {
 *   // item is the correct type, unlike what Object.values gives
 * })
 *
 * itemSlugs.forEach(slug => {
 *   // slug is the correct type ('undo' | 'redo'), unlike what Object.values gives
 * })
 *
 * ```
 *
 * Additionally, explicit type arguments can be provided, ensuring that an interface is implemented, or that all keys
 * in a union type are implemented.
 *
 * For example:
 *
 * ```
 * type ItemSlug = 'undo' | 'redo'
 *
 * interface ActionItem {
 *   label: string
 *   description: string
 *   performAction: () => void
 * }
 *
 * typedKeyDict<ItemSlug, ActionItem, 'slug'>(
 *   {
 *     undo: {
 *       label: 'Undo',
 *       description: 'Undo the last action',
 *       performAction: () => {
 *         // Do work
 *       },
 *     },
 *   },
 *   'key'
 * )
 * ```
 *
 * Will not compile, because `redo` is not specified in the map, but is defined as a valid value for `ItemSlug`.
 * This can be very helpful if `ItemSlug` is defined in another file. Adding an additional key to it will force
 * you to fix anywhere it is used in this way.
 *
 * @param dict The input dictionary
 * @param keyProp The name of the property to add to the resulting objects containing the key for each value. Defaults to 'key'
 */
export declare function typedKeyDict<TKey extends string, TValue extends object, TKeyProp extends string = 'key'>(dict: {
    [key in TKey]: Omit<TValue, TKeyProp>;
}, keyProp?: TKeyProp): {
    byKey: Record<TKey, TValue & Record<TKeyProp, TKey>>;
    keys: Array<TKey>;
    values: Array<TValue & Record<TKeyProp, TKey>>;
    TKey: TKey;
    TValue: TValue & Record<TKeyProp, TKey>;
};
