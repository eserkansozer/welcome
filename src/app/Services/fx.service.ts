import { DataApiService } from './data-api.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class FxService extends DataApiService{

  constructor(http: Http) {
    super('http://data.fixer.io/api/latest', http);
   }

   getFX()
   {
     let parameters : Array<{key:string, value: any}> = [];
     parameters.push({key:'access_key', value: environment.fxApiId});

     return this.getByParameters(parameters);        
   }

}
