export default function useDimensionsState(initialDimensions: any, constraints: any): {
    widthState: {
        inputValue: string;
        addOffset(offset: any): void;
        setInputValue(value: any): void;
    };
    heightState: {
        inputValue: string;
        addOffset(offset: any): void;
        setInputValue(value: any): void;
    };
    percentageState: {
        inputValue: string;
        addOffset(offset: any): void;
        setInputValue(value: any): void;
    };
    isAtLeastMinimums: boolean;
    isNumeric: boolean;
    width: any;
    height: any;
    percentage: any;
    usePercentageUnits: any;
    setUsePercentageUnits: (value: any) => void;
    isValid: boolean;
};
