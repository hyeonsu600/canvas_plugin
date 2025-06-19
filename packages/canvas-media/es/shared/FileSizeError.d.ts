export default FileSizeError;
declare class FileSizeError extends Error {
    static get type(): string;
    constructor({ maxBytes, actualBytes }: {
        maxBytes: any;
        actualBytes: any;
    }, ...args: any[]);
    maxBytes: any;
    actualBytes: any;
}
