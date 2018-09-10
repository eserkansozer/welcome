import { WebStorageService } from 'angular-webstorage-service';
import { WeatherCityRecord } from './../Models/WeatherCityRecord';
import { WeatherCityService } from './../Services/weather-city.service';
import { Component, OnInit } from '@angular/core';
import { WebstorageService } from '../Services/webstorage.service';

@Component({
  selector: 'app-weather-editor',
  templateUrl: './weather-editor.component.html',
  styleUrls: ['./weather-editor.component.css'],
})
export class WeatherEditorComponent implements OnInit {

  weatherCityList:Array<WeatherCityRecord>;
  homeCityId: number;
  
  constructor(private weatherCityService: WeatherCityService, private storageService: WebstorageService) { }

  ngOnInit() {
    this.homeCityId = this.storageService.get('homeCityId') || "";

    this.weatherCityService.getAll()
      .subscribe(json => this.mapJsonToWeatherCityRecord(json));
  }

  mapJsonToWeatherCityRecord(json)
  {       
    this.weatherCityList = Array.from(json as Array<any>, w => new WeatherCityRecord(w.id, w.name, w.country));  
  }

  onCitySelect(){
    this.storageService.set('homeCityId', this.homeCityId);
  }
}
