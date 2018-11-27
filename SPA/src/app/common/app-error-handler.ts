import { AppError } from './app-error';
import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {

    handleError(error) {
      if (error instanceof AppError) {
        alert('An application error occured.');
      } else {
        alert('A user error occured.');
      }
        console.log(error);
    }

}
