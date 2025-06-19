declare function AccordionSection({ collection, children, onToggle, expanded, label }: {
    collection: any;
    children: any;
    onToggle: any;
    expanded: any;
    label: any;
}): React.JSX.Element;
declare namespace AccordionSection {
    namespace propTypes {
        let collection: import("prop-types").Validator<string>;
        let children: import("prop-types").Validator<NonNullable<import("prop-types").ReactNodeLike>>;
        let onToggle: import("prop-types").Validator<(...args: any[]) => any>;
        let expanded: import("prop-types").Validator<boolean>;
        let label: import("prop-types").Validator<string>;
    }
}
export default AccordionSection;
import React from 'react';
