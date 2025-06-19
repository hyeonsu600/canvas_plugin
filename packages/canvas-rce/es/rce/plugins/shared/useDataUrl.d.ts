export default useDataUrl;
declare function useDataUrl(): {
    setUrl: import("react").Dispatch<import("react").SetStateAction<string>>;
    dataUrl: string;
    dataLoading: boolean;
    dataError: undefined;
    dataBlob: null;
};
