import { AppError } from './app-error';
import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {

    constructor() { }

    handleError(error) {
      if (error instanceof AppError) {
        console.log('Application error: ' + error);
      } else {
        console.log('Unexpected error: ' + error);
      }

    }

}
