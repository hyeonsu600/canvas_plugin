export default UsageRightsSelectBox;
declare function UsageRightsSelectBox({ contextType, contextId, showMessage: showMessageProp, usageRightsState, setUsageRightsState, }: {
    contextType: any;
    contextId: any;
    showMessage: any;
    usageRightsState: any;
    setUsageRightsState: any;
}): React.JSX.Element;
declare namespace UsageRightsSelectBox {
    namespace propTypes {
        let usageRightsState: PropTypes.Requireable<PropTypes.InferProps<{
            ccLicense: PropTypes.Requireable<string>;
            usageRight: PropTypes.Requireable<string>;
            copyrightHolder: PropTypes.Requireable<string>;
        }>>;
        let setUsageRightsState: PropTypes.Requireable<(...args: any[]) => any>;
        let showMessage: PropTypes.Requireable<boolean>;
        let contextType: PropTypes.Requireable<string>;
        let contextId: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
