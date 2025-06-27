declare function Filter(props: any): React.JSX.Element;
declare namespace Filter {
    namespace propTypes {
        export let contentSubtype: import("prop-types").Validator<string>;
        export let contentType: import("prop-types").Validator<string>;
        export let mountNode: import("prop-types").Requireable<NonNullable<((...args: any[]) => any) | import("prop-types").ReactElementLike | null | undefined>>;
        export let onChange: import("prop-types").Validator<(...args: any[]) => any>;
        export let sortValue: import("prop-types").Validator<string>;
        export let searchString: import("prop-types").Validator<string>;
        export let userContextType: import("prop-types").Requireable<string>;
        export { bool as isContentLoading };
        export let containingContextType: import("prop-types").Requireable<string>;
        export { bool as use_rce_icon_maker };
    }
}
export default Filter;
import React from 'react';
import { bool } from 'prop-types';
