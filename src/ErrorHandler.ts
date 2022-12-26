export interface Err {
  name?: string;
  fileName?: string;
  lineNumber?: number;
  columnNumber?: number;
  message?: string;
  stack?: string;
}

export class ErrorHandler {
  constructor() {}

  syntaxError(err: Err) {
    var error = {
      name: err.name,
      fileName: err.fileName,
      lineNumber: err.lineNumber,
      columnNumber: err.columnNumber,
      message: err.message,
      stack: err.stack,
    };
    console.log(error);
  }
  errorInfo() {
    try {
    } catch (e) {
      console.log(e);
    }
  }
  loadInfo() {
    try {
    } catch (e) {}
  }
  destroyLoadInfo() {
    try {
    } catch (e) {}
  }
  destroyErrorInfo() {
    try {
    } catch (e) {}
  }
}
