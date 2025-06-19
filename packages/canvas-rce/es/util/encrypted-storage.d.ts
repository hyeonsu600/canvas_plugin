export default class EncryptedStorage {
    passphrase: import("crypto-es/lib/core").WordArray;
    constructor(passphrase: string);
    setItem(key: string, content: string): void | null;
    getItem(key: string): any;
    key(index: number): string | null;
    removeItem(key: string): void | null;
    errorHandlerWrapper: <T>(callback: () => T) => T | null;
}
