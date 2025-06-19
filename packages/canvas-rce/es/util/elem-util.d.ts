/**
 * Utility function to check if a node is Text in a typesafe manner to allow TypeScript type narrowing.
 *
 * @param n
 */
export declare function isTextNode(n: Node | null | undefined): n is Text;
