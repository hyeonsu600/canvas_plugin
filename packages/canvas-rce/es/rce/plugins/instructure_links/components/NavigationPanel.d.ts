declare function NavigationPanel(props: any): React.JSX.Element | null;
declare namespace NavigationPanel {
    namespace propTypes {
        export let contextType: import("prop-types").Validator<string>;
        export let contextId: import("prop-types").Validator<string>;
        export let onChangeAccordion: import("prop-types").Validator<(...args: any[]) => any>;
        export { string as selectedAccordionIndex };
        export { func as onLinkClick };
        export { bool as editing };
        export { func as onEditClick };
    }
}
export default NavigationPanel;
import React from 'react';
import { string } from 'prop-types';
import { func } from 'prop-types';
import { bool } from 'prop-types';
