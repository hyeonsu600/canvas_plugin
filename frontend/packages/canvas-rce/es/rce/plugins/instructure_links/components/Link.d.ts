declare function Link(props: any): React.JSX.Element;
declare namespace Link {
    namespace propTypes {
        export let link: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
            href: import("prop-types").Validator<string>;
            title: import("prop-types").Validator<string>;
            published: import("prop-types").Requireable<boolean>;
            date: import("prop-types").Requireable<string>;
            date_type: import("prop-types").Requireable<string>;
            has_overrides: import("prop-types").Requireable<boolean>;
        }>>>;
        export let type: import("prop-types").Validator<string>;
        export let onClick: import("prop-types").Validator<(...args: any[]) => any>;
        export let describedByID: import("prop-types").Validator<string>;
        export { func as elementRef };
        export { bool as editing };
        export { func as onEditClick };
        export { bool as isSelected };
    }
}
export default Link;
import React from 'react';
import { func } from 'prop-types';
import { bool } from 'prop-types';
