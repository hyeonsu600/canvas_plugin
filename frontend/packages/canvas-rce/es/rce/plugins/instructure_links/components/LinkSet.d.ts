export default LinkSet;
declare class LinkSet extends React.Component<any, any, any> {
    constructor(props: any);
    describedByID: string;
    loadMoreButtonRef: any;
    hasLinks(props: any): boolean;
    isEmpty(props: any): boolean;
    compareURLs(url1?: string, url2?: string): boolean;
    renderLinks(lastItemRef: any): React.JSX.Element;
    renderEmptyIndicator(): React.JSX.Element;
    renderLoadingError(): React.JSX.Element | null;
    render(): React.JSX.Element;
}
declare namespace LinkSet {
    namespace propTypes {
        export let type: import("prop-types").Validator<string>;
        export let collection: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
            hasMore: import("prop-types").Requireable<boolean>;
            isLoading: import("prop-types").Requireable<boolean>;
            lastError: import("prop-types").Requireable<object>;
            links: import("prop-types").Validator<(import("prop-types").InferProps<{
                href: import("prop-types").Validator<string>;
                title: import("prop-types").Validator<string>;
                published: import("prop-types").Requireable<boolean>;
                date: import("prop-types").Requireable<string>;
                date_type: import("prop-types").Requireable<string>;
                has_overrides: import("prop-types").Requireable<boolean>;
            }> | null | undefined)[]>;
        }>>>;
        export let onLinkClick: import("prop-types").Validator<(...args: any[]) => any>;
        export let contextType: import("prop-types").Validator<string>;
        export let contextId: import("prop-types").Validator<string>;
        export { func as fetchInitialPage };
        export { func as fetchNextPage };
        export { bool as suppressRenderEmpty };
        export { string as searchString };
        export { bool as editing };
        export { func as onEditClick };
        export { linkShape as selectedLink };
    }
}
import React from 'react';
import { func } from 'prop-types';
import { bool } from 'prop-types';
import { string } from 'prop-types';
import { linkShape } from './propTypes';
