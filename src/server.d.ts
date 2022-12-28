import { ErrorHandler } from './ErrorHandler';
export declare class Server {
    api: string;
    errorHandler: ErrorHandler;
    constructor(errorHandler: ErrorHandler);
    get(link: string, callback?: (d: unknown, status?: number) => void): void;
}
