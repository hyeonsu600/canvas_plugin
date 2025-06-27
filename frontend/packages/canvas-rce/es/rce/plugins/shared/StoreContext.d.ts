export function StoreProvider({ children, ...storeProps }: {
    [x: string]: any;
    children: any;
}): React.JSX.Element;
export function useStoreProps(): any;
export const StoreConsumer: import("react-redux").ConnectedComponent<typeof Consumer, import("react-redux").Omit<{
    [x: string]: any;
    children: any;
}, string | number>>;
import React from 'react';
declare function Consumer({ children, ...props }: {
    [x: string]: any;
    children: any;
}): any;
export {};
