declare function UrlPanel({ fileUrl, setFileUrl, urlHasError, urlRef }: {
    fileUrl: any;
    setFileUrl: any;
    urlHasError: any;
    urlRef: any;
}): React.JSX.Element;
declare namespace UrlPanel {
    namespace propTypes {
        export let fileUrl: import("prop-types").Validator<string>;
        export let setFileUrl: import("prop-types").Validator<(...args: any[]) => any>;
        export { bool as urlHasError };
        export { object as urlRef };
    }
}
export default UrlPanel;
import React from 'react';
import { bool } from 'prop-types';
import { object } from 'prop-types';
