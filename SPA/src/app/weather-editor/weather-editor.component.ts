import { WeatherCountryService } from './../Services/weather-country.service';
import { WeatherCityRecord } from './../Models/WeatherCityRecord';
import { WeatherCityService } from './../Services/weather-city.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from '../Services/webstorage.service';
import { WeatherCountryRecord } from './../Models/WeatherCountryRecord';

@Component({
  selector: 'app-weather-editor',
  templateUrl: './weather-editor.component.html',
  styleUrls: ['./weather-editor.component.css'],
})
export class WeatherEditorComponent implements OnInit {

  @Output() refresh = new EventEmitter<string>();

  weatherCityList: Array<WeatherCityRecord>;
  weatherCountryList: Array<WeatherCountryRecord>;
  homeCity: number;
  homeCountryCode: string;

  constructor(private weatherCityService: WeatherCityService, private weatherCountryService: WeatherCountryService,
    private storageService: LocalStorageService) { }

  ngOnInit() {
    this.homeCountryCode = this.storageService.get('homeCountry') || '';
    this.weatherCountryService.getAll()
        .subscribe(json => this.mapJsonToWeatherCountryRecord(json));

    this.homeCity = this.storageService.get('homeCity') || null;
    if (this.homeCountryCode !== '') {
      this.weatherCityService.getByParameters([{key: 'countryCode', value: this.homeCountryCode}])
        .subscribe(json => this.mapJsonToWeatherCityRecord(json));
    }
  }

  mapJsonToWeatherCityRecord(json) {
    this.weatherCityList = Array.from(json as Array<any>, w => new WeatherCityRecord(w.id, w.name, w.country));
  }

  mapJsonToWeatherCountryRecord(json) {
    this.weatherCountryList = Array.from(json as Array<any>, w => new WeatherCountryRecord(w.name, w.code));
  }

  onCountrySelect() {
    this.homeCity = null;
    this.weatherCityList = null;
    this.weatherCityService.getByParameters([{key: 'countryCode', value: this.homeCountryCode}])
    .subscribe(json => this.mapJsonToWeatherCityRecord(json));
  }

  onSave() {
    this.storageService.set('homeCity', this.homeCity);
    this.storageService.set('homeCountry', this.homeCountryCode);
    this.refresh.emit('weather');
  }
}
