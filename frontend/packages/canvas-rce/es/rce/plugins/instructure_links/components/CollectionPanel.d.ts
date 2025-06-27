declare function CollectionPanel(props: any): React.JSX.Element;
declare namespace CollectionPanel {
    namespace propTypes {
        export let contextId: import("prop-types").Validator<string>;
        export let contextType: import("prop-types").Validator<string>;
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
        export let collection: import("prop-types").Validator<string>;
        export let label: import("prop-types").Validator<string>;
        export { bool as renderNewPageLink };
        export { bool as suppressRenderEmpty };
        export { func as fetchInitialPage };
        export { func as fetchNextPage };
        export { func as onLinkClick };
        export { bool as newPageLinkExpanded };
        export { func as toggleNewPageForm };
        export let onChangeAccordion: import("prop-types").Validator<(...args: any[]) => any>;
        export { string as selectedAccordionIndex };
        export { bool as editing };
        export { func as onEditClick };
        export { linkShape as selectedLink };
    }
    namespace defaultProps {
        let renderNewPageLink: boolean;
        let suppressRenderEmpty: boolean;
        let editing: boolean;
    }
}
export default CollectionPanel;
import React from 'react';
import { string } from 'prop-types';
import { bool } from 'prop-types';
import { func } from 'prop-types';
import { linkShape } from './propTypes';
