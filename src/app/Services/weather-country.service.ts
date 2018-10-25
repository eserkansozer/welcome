import { DataApiService } from './data-api.service';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class WeatherCountryService extends DataApiService {

  constructor(http: Http) {
    super(environment.wcoServiceUrl, http);
   }

}
