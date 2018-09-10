import { WebstorageService } from './../Services/webstorage.service';
import { WeatherService } from './../Services/weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherRecord } from '../Models/WeatherRecord';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  weather: WeatherRecord;
  constructor(private weatherService: WeatherService, private storageService : WebstorageService) { }

  ngOnInit() {
    let cityId = this.storageService.get('homeCityId');
    if(cityId != null && cityId !="")
    {
      this.weatherService.getWeather(cityId)
      .subscribe(json => this.mapJsonToWeatherRecord(json) );    
    }
  }

  mapJsonToWeatherRecord(json)
  {    
    this.weather = new WeatherRecord(Math.ceil(json.main.temp),json.name,json.weather[0].description, json.weather[0].icon);   
  }
}
