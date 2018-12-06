import { Injectable } from '@angular/core';

declare let alertify: any; // This variable is created externally elsewhere. This is just declaration for the compiler.

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  error(message: string) {
    alertify.error(message);
  }
}
