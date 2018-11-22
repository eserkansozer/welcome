import { Injectable } from '@angular/core';
import { DataApiService } from './data-api.service';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class WeatherCityService extends DataApiService{

  constructor(http: Http) {
    super(environment.wcServiceUrl, http);
   }
}
