type ContainingContext = {
    contextType: string;
    contextId: string;
    userId: string;
};
export declare const normalizeContainingContext: (context?: ContainingContext) => ContainingContext | undefined;
export {};
