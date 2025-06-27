export function ConditionalTooltip({ condition, children, ...tooltipProps }: {
    [x: string]: any;
    condition: any;
    children: any;
}): React.JSX.Element;
export namespace ConditionalTooltip {
    namespace propTypes {
        let condition: import("prop-types").Validator<boolean>;
        let children: import("prop-types").Validator<NonNullable<NonNullable<import("prop-types").ReactElementLike | (import("prop-types").ReactElementLike | null | undefined)[] | null | undefined>>>;
    }
}
import React from 'react';
