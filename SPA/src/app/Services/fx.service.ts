import { HttpClient } from '@angular/common/http';
import { DataApiService } from './data-api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable()
export class FxService extends DataApiService {

  constructor(http: HttpClient) {
    super(http);
    this.url = 'http://data.fixer.io/api/latest';
   }

   getFX() {
     const parameters: Array<{key: string, value: any}> = [];
     parameters.push({key: 'access_key', value: environment.fxApiId});

     return this.getByParameters(parameters);
   }

}
