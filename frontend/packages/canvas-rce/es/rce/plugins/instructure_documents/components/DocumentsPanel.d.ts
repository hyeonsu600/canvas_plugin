declare function DocumentsPanel(props: any): React.JSX.Element;
declare namespace DocumentsPanel {
    namespace propTypes {
        export let contextType: import("prop-types").Validator<string>;
        export let fetchInitialDocs: import("prop-types").Validator<(...args: any[]) => any>;
        export let fetchNextDocs: import("prop-types").Validator<(...args: any[]) => any>;
        export let onLinkClick: import("prop-types").Validator<(...args: any[]) => any>;
        export let documents: any;
        export let sortBy: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
            sort: import("prop-types").Validator<string>;
            order: import("prop-types").Validator<string>;
        }>>>;
        export { string as searchString };
    }
}
export default DocumentsPanel;
import React from 'react';
import { string } from 'prop-types';
