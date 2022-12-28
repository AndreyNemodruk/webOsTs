export interface Err {
    name?: string;
    fileName?: string;
    lineNumber?: number;
    columnNumber?: number;
    message?: string;
    stack?: string;
}
export declare class ErrorHandler {
    constructor();
    syntaxError(err: Err): void;
    errorInfo(): void;
    loadInfo(): void;
    destroyLoadInfo(): void;
    destroyErrorInfo(): void;
}
