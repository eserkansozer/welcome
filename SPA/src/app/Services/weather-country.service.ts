import { DataApiService } from './data-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class WeatherCountryService extends DataApiService {

  constructor(http: HttpClient) {
    super(http);
    this.url = environment.wcoServiceUrl;
   }

}
