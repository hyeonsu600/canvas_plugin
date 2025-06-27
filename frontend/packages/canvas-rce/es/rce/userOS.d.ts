export type UserOS = 'Mac' | 'Windows' | 'Other';
export type OSKey = 'OPTION' | 'ALT';
export declare const determineUserOS: () => UserOS;
export declare const determineOSDependentKey: () => OSKey;
