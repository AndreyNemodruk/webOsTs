import { ErrorHandler } from './ErrorHandler';
import { IList } from './interfaces/interfaces';
export declare class Navigation {
    errorHandler: ErrorHandler;
    activeComponent: IList;
    constructor(errorHandler: ErrorHandler);
    controlRemote: (e: KeyboardEvent) => void;
    setActive: (activeComponent: IList) => void;
}
