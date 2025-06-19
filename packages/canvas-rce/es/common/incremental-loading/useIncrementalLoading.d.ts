export default function useIncrementalLoading(options: any): {
    hasMore: any;
    isLoading: any;
    lastRecordsLoaded: number;
    onLoadInitial: any;
    sortBy: any;
    searchString: any;
    contextType: any;
    onLoadMore(): void;
};
