import { Injectable } from '@angular/core';
import { DataApiService } from './data-api.service';
import { Http } from '@angular/http';

@Injectable()
export class WeatherCityService extends DataApiService{

  constructor(http: Http) {
    super('assets/city-list.json', http);
   }
}
