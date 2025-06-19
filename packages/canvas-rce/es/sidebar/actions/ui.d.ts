export function changeTab(index: any): {
    type: string;
    index: any;
};
export function changeAccordion(index: any): {
    type: string;
    index: any;
};
export function resetUI(): {
    type: string;
};
export function hideSidebar(): {
    type: string;
};
export function showSidebar(): {
    type: string;
};
export const CHANGE_TAB: "CHANGE_TAB";
export const CHANGE_ACCORDION: "CHANGE_ACCORDION";
export const RESET_UI: "RESET_UI";
export const HIDE_SIDEBAR: "HIDE_SIDEBAR";
export const SHOW_SIDEBAR: "SHOW_SIDEBAR";
