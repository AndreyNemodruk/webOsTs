import { ErrorHandler, Err } from './ErrorHandler';

interface Link {
  url: string;
  params: {
    [key: string]: string;
  };
}

export class Server {
  api: string;
  errorHandler: ErrorHandler;
  constructor(errorHandler: ErrorHandler) {
    this.api = 'https://devmegogoapi.briz.tv';
    this.errorHandler = errorHandler;
  }

  get(link: string, callback?: (d: unknown, status?: number) => void) {
    fetch(this.api.concat(link))
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (callback) callback(data.data);
      })
      .catch((e) => this.errorHandler.syntaxError(e as Err));
  }
}
