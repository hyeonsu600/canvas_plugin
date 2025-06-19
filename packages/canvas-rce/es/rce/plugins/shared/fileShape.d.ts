export namespace fileShape {
    export let content_type: import("prop-types").Validator<string>;
    export let date: import("prop-types").Validator<string>;
    export let display_name: import("prop-types").Validator<string>;
    export let filename: import("prop-types").Validator<string>;
    export let href: import("prop-types").Validator<string>;
    export let id: import("prop-types").Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
    export { string as thumbnail_url };
    export { string as preview_url };
    export { bool as hidden_to_user };
    export { string as lock_at };
    export { string as unlock_at };
    export { bool as locked_for_user };
    export { bool as published };
}
export namespace imageShape {
    export { string as thumbnail_url };
}
export namespace mediaObjectShape {
    export let title: import("prop-types").Validator<string>;
    export { string as embedded_iframe_url };
    export { string as media_entry_id };
}
export namespace fileOrMediaObjectShape {
    let content_type_1: import("prop-types").Validator<string>;
    export { content_type_1 as content_type };
    let date_1: import("prop-types").Validator<string>;
    export { date_1 as date };
    export { string as display_name };
    export { string as filename };
    export { string as href };
    export { string as embedded_iframe_url };
    let id_1: import("prop-types").Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
    export { id_1 as id };
    export { string as thumbnail_url };
    export { string as preview_url };
    export { bool as hidden_to_user };
    export { string as lock_at };
    export { string as unlock_at };
    export { bool as locked_for_user };
    export { bool as published };
}
export namespace documentQueryReturnShape {
    export let files: import("prop-types").Validator<(import("prop-types").InferProps<{
        content_type: import("prop-types").Validator<string>;
        date: import("prop-types").Validator<string>;
        display_name: import("prop-types").Validator<string>;
        filename: import("prop-types").Validator<string>;
        href: import("prop-types").Validator<string>;
        id: import("prop-types").Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
        thumbnail_url: import("prop-types").Requireable<string>;
        preview_url: import("prop-types").Requireable<string>;
        hidden_to_user: import("prop-types").Requireable<boolean>;
        lock_at: import("prop-types").Requireable<string>;
        unlock_at: import("prop-types").Requireable<string>;
        locked_for_user: import("prop-types").Requireable<boolean>;
        published: import("prop-types").Requireable<boolean>;
    }> | null | undefined)[]>;
    export { string as bookmark };
    export { bool as hasMore };
    export { bool as isLoading };
    export { string as error };
}
export namespace imageQueryReturnShape {
    let files_1: import("prop-types").Validator<(import("prop-types").InferProps<{
        thumbnail_url: import("prop-types").Requireable<string>;
        content_type: import("prop-types").Validator<string>;
        date: import("prop-types").Validator<string>;
        display_name: import("prop-types").Validator<string>;
        filename: import("prop-types").Validator<string>;
        href: import("prop-types").Validator<string>;
        id: import("prop-types").Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
        preview_url: import("prop-types").Requireable<string>;
        hidden_to_user: import("prop-types").Requireable<boolean>;
        lock_at: import("prop-types").Requireable<string>;
        unlock_at: import("prop-types").Requireable<string>;
        locked_for_user: import("prop-types").Requireable<boolean>;
        published: import("prop-types").Requireable<boolean>;
    }> | null | undefined)[]>;
    export { files_1 as files };
    export { string as bookmark };
    export { bool as hasMore };
    export { bool as isLoading };
    export { string as error };
}
export namespace mediaQueryReturnShape {
    let files_2: import("prop-types").Validator<(import("prop-types").InferProps<{
        title: import("prop-types").Validator<string>;
        embedded_iframe_url: import("prop-types").Requireable<string>;
        media_entry_id: import("prop-types").Requireable<string>;
        thumbnail_url: import("prop-types").Requireable<string>;
        content_type: import("prop-types").Validator<string>;
        date: import("prop-types").Validator<string>;
        display_name: import("prop-types").Validator<string>;
        filename: import("prop-types").Validator<string>;
        href: import("prop-types").Validator<string>;
        id: import("prop-types").Validator<NonNullable<NonNullable<string | number | null | undefined>>>;
        preview_url: import("prop-types").Requireable<string>;
        hidden_to_user: import("prop-types").Requireable<boolean>;
        lock_at: import("prop-types").Requireable<string>;
        unlock_at: import("prop-types").Requireable<string>;
        locked_for_user: import("prop-types").Requireable<boolean>;
        published: import("prop-types").Requireable<boolean>;
    }> | null | undefined)[]>;
    export { files_2 as files };
    export { string as bookmark };
    export { bool as hasMore };
    export { bool as isLoading };
    export { string as error };
}
export function contentTrayDocumentShape(props: any, propName: any, componentName: any): Error | undefined;
export namespace contentTrayDocumentShape {
    function isRequired(props: any, propName: any, componentName: any): Error | undefined;
}
import { string } from 'prop-types';
import { bool } from 'prop-types';
