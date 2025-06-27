/**
 * This class acts as a store/registry of sorts.  This enables us to
 * talk between the UI components of the RCE and the API pieces.
 *
 * @class AlertHandler
 */
export class AlertHandler {
    constructor(alertFunc: any);
    alertFunc: any;
    /**
     * Calls the registered alertFunc assuming one has been set, otherwise
     * it throws.
     *
     * @memberof AlertHandler
     */
    handleAlert: (alert: any) => void;
}
declare const _default: AlertHandler;
export default _default;
