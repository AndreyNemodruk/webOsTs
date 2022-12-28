import { Server } from './server';
import { Navigation } from './Navigation';
import { ErrorHandler } from './ErrorHandler';
import '../src/assets/app.css';
export declare class App {
    server: Server;
    configuration: any;
    navigation: Navigation;
    errorHandler: ErrorHandler;
    constructor();
    init: () => void;
    render: () => void;
    get config(): any;
}
export declare const app: App;
