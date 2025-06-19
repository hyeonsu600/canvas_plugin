declare function Link(props: any): React.JSX.Element;
declare namespace Link {
    let propTypes: {
        onClick: import("prop-types").Validator<(...args: any[]) => any>;
        content_type: import("prop-types").Validator<string>;
        date: import("prop-types").Validator<string>;
        display_name: import("prop-types").Requireable<string>;
        filename: import("prop-types").Requireable<string>;
        href: import("prop-types").Requireable<string>;
        embedded_iframe_url: import("prop-types").Requireable<string>;
        id: import("prop-types").Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
        thumbnail_url: import("prop-types").Requireable<string>;
        preview_url: import("prop-types").Requireable<string>;
        hidden_to_user: import("prop-types").Requireable<boolean>;
        lock_at: import("prop-types").Requireable<string>;
        unlock_at: import("prop-types").Requireable<string>;
        locked_for_user: import("prop-types").Requireable<boolean>;
        published: import("prop-types").Requireable<boolean>;
        focusRef: import("prop-types").Requireable<import("prop-types").InferProps<{
            current: import("prop-types").Requireable<Element>;
        }>>;
    };
    namespace defaultProps {
        let focusRef: null;
    }
}
export default Link;
import React from 'react';
