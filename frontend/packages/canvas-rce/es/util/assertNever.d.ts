/**
 * Used to ensure in a type safe way that some variable cannot ever be in a particular state.
 * Useful for exhaustive switch statements, where the compiler will ensure all possible cases are covered.
 *
 * For example:
 *
 * ```
 * const someValue: 'a' | 'b' = ...
 *
 * switch (someValue) {
 *   case 'a': return whatever();
 *   case 'b': return whatever();
 *
 *   // If all possible values of someValue aren't handled above, this will fail to compile
 *   default: assertNever(someValue);
 * }
 *
 * ```
 *
 * Inspired by https://stackoverflow.com/questions/39419170/how-do-i-check-that-a-switch-block-is-exhaustive-in-typescript
 *
 * @param input
 */
export declare function assertNever(input: never): never;
