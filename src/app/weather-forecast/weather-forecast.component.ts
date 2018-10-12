import { LocalStorageService } from './../Services/webstorage.service';
import { WeatherService } from './../Services/weather.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { WeatherRecord } from '../Models/WeatherRecord';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  @Input() refreshTriggerInput;

  weather: WeatherRecord;
  constructor(private weatherService: WeatherService, private storageService : LocalStorageService) { }

  ngOnInit() {
    let cityId = this.storageService.get('homeCityId');
    if(cityId != null && cityId !="")
    {
      this.weatherService.getWeather(cityId)
      .subscribe(json => this.mapJsonToWeatherRecord(json) );    
    }
  }

  ngOnChanges(changes: SimpleChanges) 
  {
    if(!changes.refreshTriggerInput.firstChange)
    {
      this.ngOnInit();
    }
  }
  
  mapJsonToWeatherRecord(json: any)
  {    
    this.weather = new WeatherRecord(Math.ceil(json.main.temp),json.name,json.weather[0].description, json.weather[0].icon);   
  }
}
