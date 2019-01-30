import { Injectable } from '@angular/core';
import { DataApiService } from './data-api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class WeatherCityService extends DataApiService {

  constructor(http: HttpClient) {
    super(http);
    this.url = environment.wcServiceUrl;
   }
}
