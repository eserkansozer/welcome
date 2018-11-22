import { DataApiService } from './data-api.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class WeatherCountryService extends DataApiService {

  constructor(http: Http) {
    super(environment.wcoServiceUrl, http);
   }

}
