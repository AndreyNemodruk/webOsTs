import { ErrorHandler } from './ErrorHandler';
import { IList } from './interfaces/interfaces';
import { TVKeyValue } from './tvKeyValue/tvKeyValue';

export class Navigation {
  errorHandler: ErrorHandler;
  activeComponent: IList;
  constructor(errorHandler: ErrorHandler) {
    this.errorHandler = errorHandler;
  }

  controlRemote = (e: KeyboardEvent) => {
    const key = e.keyCode;
    switch (key) {
      case TVKeyValue.KEY_RIGHT:
        this.activeComponent.goRight();
        break;
      case TVKeyValue.KEY_LEFT:
        this.activeComponent.goLeft();
        break;
    }
  };

  setActive = (activeComponent: IList) => {
    this.activeComponent = activeComponent;
  };
}
