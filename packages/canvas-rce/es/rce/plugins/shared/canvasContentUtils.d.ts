import React from 'react';
export declare function DynamicPanel(props: any): React.JSX.Element;
export declare const FILTER_SETTINGS_BY_PLUGIN: {
    user_documents: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
    course_documents: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
    group_documents: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
    user_images: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
    course_images: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
    group_images: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
    user_media: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
    course_media: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
    group_media: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
    course_links: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
    course_link_edit: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
    group_links: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
    list_icon_maker_icons: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
    all: {
        contextType: string;
        contentType: string;
        contentSubtype: string;
        sortValue: string;
        sortDir: string;
        searchString: string;
    };
};
export declare function isLoading(sprops: {
    collections: any;
    documents: any;
    media: any;
    all_files: any;
}): any;
export declare const UploadCanvasPanelIds: readonly ["user_documents", "course_documents", "group_documents", "user_images", "course_images", "group_images", "user_media", "course_media", "group_media", "course_links", "group_links", "list_icon_maker_icons", "all"];
export declare const CanvasPanelTitles: {
    readonly user_documents: string;
    readonly course_documents: string;
    readonly group_documents: string;
    readonly user_images: string;
    readonly course_images: string;
    readonly group_images: string;
    readonly user_media: string;
    readonly course_media: string;
    readonly group_media: string;
    readonly course_links: string;
    readonly group_links: string;
    readonly list_icon_maker_icons: string;
    readonly all: string;
};
