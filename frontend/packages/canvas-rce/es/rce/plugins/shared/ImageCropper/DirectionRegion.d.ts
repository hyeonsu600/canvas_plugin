import React from 'react';
export declare enum Direction {
    LEFT = 37,
    UP = 38,
    RIGHT = 39,
    DOWN = 40,
    NONE = 0
}
type ComponentProps = {
    readonly direction: Direction;
};
export declare const DirectionRegion: ({ direction }: ComponentProps) => React.JSX.Element;
export {};
