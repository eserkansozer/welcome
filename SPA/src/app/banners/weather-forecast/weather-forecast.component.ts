import { LocalStorageService } from './../../Services/webstorage.service';
import { WeatherService } from './../../Services/weather.service';
import { Component, OnInit } from '@angular/core';
import { WeatherRecord } from '../../Models/WeatherRecord';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  weather: WeatherRecord;
  constructor(private weatherService: WeatherService, private storageService: LocalStorageService) { }

  ngOnInit() {
    const homeCity = this.storageService.get('homeCity');
    if (homeCity != null) {
      this.weatherService.getWeather(homeCity)
      .subscribe(json => this.mapJsonToWeatherRecord(json) );
    }
  }

  refresh() {
    this.ngOnInit();
  }

  mapJsonToWeatherRecord(json: any) {
    this.weather = new WeatherRecord(Math.ceil(json.main.temp), json.name, json.weather[0].description, json.weather[0].icon);
  }
}
