/**
 * TL;DR: Remove this file when possible.
 *
 * Please note that this file is considered very legacy.  All instances of it
 * should be evaluated and replaced with the newer and far better looking
 * KyleMenu.  The only other place that I've seen it in used is the file
 * attendance.js which is on the chopping block at some point in the future.
 * Once that file has been axed, then this file should be able to be removed.
 */
interface DropdownListOptions {
    height: number;
    width: 'auto' | number;
}
declare global {
    interface Window {
        jQuery?: JQuery;
        $?: JQuery;
    }
    interface JQuery {
        dropdownList: ((this: JQuery, options: 'hide' | 'remove' | (Partial<DropdownListOptions> & {
            options?: Record<string, Function | undefined>;
        })) => this) & {
            defaults: DropdownListOptions;
        };
    }
}
export {};
