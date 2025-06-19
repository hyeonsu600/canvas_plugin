export declare function useFilterSettings(default_settings?: FilterSetting): [FilterSetting, (nextSettings: FilterSetting) => void];
type FilterSetting = {
    contentType: string;
    contentSubtype: string;
    sortValue: string;
    searchString: string;
    sortDir?: string;
    contextType?: string;
};
export {};
