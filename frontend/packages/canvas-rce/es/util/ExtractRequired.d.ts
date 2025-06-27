/**
 * Extract from `T` those types that are assignable to `U`, but only allows values present in `T`
 *
 * This is a more type safe version of the built-in `Extract`.
 *
 *
 * @example
 * // Imagine a type encoding the valid CSS border-style values:
 *
 * type CssBorderStyle = 'dotted'
 *                     | 'dashed'
 *                     | 'solid'
 *                     | 'double'
 *                     | 'groove'
 *                     | 'ridge'
 *                     | 'inset'
 *                     | 'outset'
 *                     | 'none'
 *                     | 'hidden'
 *
 *
 * // We might want to have a function that only supports a subset of that list, but we want the compiler to ensure
 * // we didn't make a mistake. The following would compile:
 *
 *
 * function applyValidBorder(
 *   style: ExtractRequired<CssBorderStyle, 'solid' | 'none' | 'dashed'>
 * ){  }
 *
 *
 * // But this would not compile, since 'unsolid' isn't in `CssBorderStyle`:
 *
 *
 * function applyValidBorder(
 *   style: ExtractRequired<CssBorderStyle, 'unsolid' | 'none' | 'dashed'>
 * ) {  }
 *
 *
 * // This is helpful if a value is later removed from `CssBorderStyle`: All uses of that value will become compiler
 * // errors.
 */
export type ExtractRequired<TSuperset, TSubset extends TSuperset> = TSuperset extends TSubset ? TSuperset : never;
