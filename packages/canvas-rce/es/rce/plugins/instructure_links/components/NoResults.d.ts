import React from 'react';
type ContextType = 'course' | 'group';
export type CollectionType = 'wikiPages' | 'assignments' | 'quizzes' | 'announcements' | 'discussions' | 'modules';
type NoResultsProps = {
    contextType: ContextType;
    contextId: string;
    collectionType: CollectionType;
    isSearchResult: boolean;
};
export declare function buildUrl(contextType: ContextType, contextId: string, collectionType: CollectionType): string;
export declare function getMessage(collectionType: CollectionType, isSearchResult: boolean): string;
export declare const NoResults: ({ contextType, contextId, collectionType, isSearchResult, }: NoResultsProps) => React.JSX.Element;
export {};
