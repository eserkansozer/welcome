import { WeatherCityRecord } from './../Models/WeatherCityRecord';
import { WeatherCityService } from './../Services/weather-city.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from '../Services/webstorage.service';

@Component({
  selector: 'app-weather-editor',
  templateUrl: './weather-editor.component.html',
  styleUrls: ['./weather-editor.component.css'],
})
export class WeatherEditorComponent implements OnInit {

  @Output() refresh = new EventEmitter<string>();

  weatherCityList:Array<WeatherCityRecord>;
  homeCity: number;
  
  constructor(private weatherCityService: WeatherCityService, private storageService: LocalStorageService) { }

  ngOnInit() {
    this.homeCity = this.storageService.get('homeCity') || "";

    this.weatherCityService.getAll()
      .subscribe(json => this.mapJsonToWeatherCityRecord(json));
  }

  mapJsonToWeatherCityRecord(json)
  {       
    this.weatherCityList = Array.from(json as Array<any>, w => new WeatherCityRecord(w.id, w.name, w.country));  
  }

  onCitySelect(){
    this.storageService.set('homeCity', this.homeCity);
    this.refresh.emit("weather");
  }
}
