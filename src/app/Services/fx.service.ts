import { DataApiService } from './data-api.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FxService extends DataApiService{

  constructor(http: Http) {
    super('https://api.exchangeratesapi.io/latest', http);
   }

   getFX(fromCurrency: string, toCurrency: string)
   {
     let parameters : Array<{key:string, value: any}> = [];
     parameters.push({key:'base', value: fromCurrency})
     parameters.push({key:'symbols', value: toCurrency});

     return this.getByParameters(parameters);        
   }

}
