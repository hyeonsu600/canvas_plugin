export default LinksPanel;
declare function LinksPanel(props: any): React.JSX.Element;
declare namespace LinksPanel {
    namespace propTypes {
        export { string as selectedAccordionIndex };
        export { func as onChangeAccordion };
        export let contextType: import("prop-types").Validator<string>;
        export let contextId: import("prop-types").Validator<string>;
        export { string as searchString };
        export let collections: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
            announcements: import("prop-types").Requireable<import("prop-types").InferProps<{
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
            }>>;
            assignments: import("prop-types").Requireable<import("prop-types").InferProps<{
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
            }>>;
            discussions: import("prop-types").Requireable<import("prop-types").InferProps<{
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
            }>>;
            modules: import("prop-types").Requireable<import("prop-types").InferProps<{
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
            }>>;
            quizzes: import("prop-types").Requireable<import("prop-types").InferProps<{
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
            }>>;
            wikiPages: import("prop-types").Requireable<import("prop-types").InferProps<{
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
            }>>;
        }>>>;
        export { func as fetchInitialPage };
        export { func as fetchNextPage };
        export { func as onLinkClick };
        export { bool as canCreatePages };
        export { bool as editing };
        export { func as onEditClick };
        export { linkShape as selectedLink };
    }
    namespace defaultProps {
        let selectedAccordionIndex: string;
        let editing: boolean;
    }
}
import React from 'react';
import { string } from 'prop-types';
import { func } from 'prop-types';
import { bool } from 'prop-types';
import { linkShape } from './propTypes';
