import { DataApiService } from './data-api.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService extends DataApiService {

  constructor(http: Http) {
    super('https://api.openweathermap.org/data/2.5/weather', http);
   }

   getWeather(cityId: number)
   {
     let parameters : Array<{key:string, value: any}> = [];
     parameters.push({key:'id', value: cityId})
     parameters.push({key:'units', value: 'metric'});
     parameters.push({key:'appid', value: environment.weatherApiId});

     return this.getByParameters(parameters);        
   }
}
