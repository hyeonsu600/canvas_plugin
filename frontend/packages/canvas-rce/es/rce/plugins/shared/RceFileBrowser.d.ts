declare function RceFileBrowser(props: any): React.JSX.Element;
declare namespace RceFileBrowser {
    namespace propTypes {
        export let onFileSelect: import("prop-types").Validator<(...args: any[]) => any>;
        export let onAllFilesLoading: import("prop-types").Validator<(...args: any[]) => any>;
        export let searchString: import("prop-types").Validator<string>;
        export { string as canvasOrigin };
        export let jwt: import("prop-types").Validator<string>;
        export { func as refreshToken };
        export let host: import("prop-types").Validator<string>;
        export { object as source };
        export let context: import("prop-types").Validator<object>;
    }
}
export default RceFileBrowser;
import React from 'react';
import { string } from 'prop-types';
import { func } from 'prop-types';
import { object } from 'prop-types';
