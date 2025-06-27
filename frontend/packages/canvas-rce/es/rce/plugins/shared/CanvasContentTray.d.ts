/**
 * This component is used within various plugins to handle loading in content
 * from Canvas.  It is essentially the main component.
 */
declare function CanvasContentTray(props: any): React.JSX.Element;
declare namespace CanvasContentTray {
    let globalOpenCount: number;
    namespace propTypes {
        export let canUploadFiles: import("prop-types").Validator<boolean>;
        export let contextId: import("prop-types").Validator<string>;
        export let contextType: import("prop-types").Validator<string>;
        export let containingContext: import("prop-types").Requireable<import("prop-types").InferProps<{
            contextType: import("prop-types").Validator<string>;
            contextId: import("prop-types").Validator<string>;
            userId: import("prop-types").Validator<string>;
        }>>;
        export { bool as filesTabDisabled };
        export { string as host };
        export { string as jwt };
        export { func as refreshToken };
        export let source: import("prop-types").Requireable<import("prop-types").InferProps<{
            fetchImages: import("prop-types").Validator<(...args: any[]) => any>;
        }>>;
        export { string as themeUrl };
        export let bridge: import("prop-types").Validator<Bridge>;
        export let editor: import("prop-types").Validator<NonNullable<import("prop-types").InferProps<{
            id: import("prop-types").Requireable<string>;
        }>>>;
        export let mountNode: import("prop-types").Requireable<NonNullable<((...args: any[]) => any) | import("prop-types").ReactElementLike | null | undefined>>;
        export { func as onTrayClosing };
        export { func as onEditClick };
    }
    namespace defaultProps {
        let canUploadFiles_1: boolean;
        export { canUploadFiles_1 as canUploadFiles };
        export let filesTabDisabled: boolean;
        export let refreshToken: null;
        let source_1: null;
        export { source_1 as source };
        export let themeUrl: null;
    }
}
export default CanvasContentTray;
export const trayPropTypes: import("prop-types").Requireable<import("prop-types").InferProps<{
    canUploadFiles: import("prop-types").Validator<boolean>;
    contextId: import("prop-types").Validator<string>;
    contextType: import("prop-types").Validator<string>;
    containingContext: import("prop-types").Requireable<import("prop-types").InferProps<{
        contextType: import("prop-types").Validator<string>;
        contextId: import("prop-types").Validator<string>;
        userId: import("prop-types").Validator<string>;
    }>>;
    filesTabDisabled: import("prop-types").Requireable<boolean>;
    host: import("prop-types").Requireable<string>;
    jwt: import("prop-types").Requireable<string>;
    refreshToken: import("prop-types").Requireable<(...args: any[]) => any>;
    source: import("prop-types").Requireable<import("prop-types").InferProps<{
        fetchImages: import("prop-types").Validator<(...args: any[]) => any>;
    }>>;
    themeUrl: import("prop-types").Requireable<string>;
}>>;
import React from 'react';
import { bool } from 'prop-types';
import { string } from 'prop-types';
import { func } from 'prop-types';
import Bridge from '../../../bridge/Bridge';
