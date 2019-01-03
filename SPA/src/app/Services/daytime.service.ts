import { Injectable } from '@angular/core';
import { TimeOfDay } from '../Enums';

@Injectable()
export class DaytimeService {

  constructor() { }

  getDayTime(): Number {

    const NOON_TIME: Number = 12;
    const DUSK_TIME: Number = 19;
    const hours: Number = new Date().getHours() as Number;

    if (hours < NOON_TIME) {
      return TimeOfDay.Morning;
    } else if (hours >= NOON_TIME && hours <= DUSK_TIME) {
      return TimeOfDay.Afternoon;
    } else {
      return TimeOfDay.Evening;
    }
  }

  getDate(): String {
    return new Date(new Date().toISOString().split('T')[0]).toISOString();
  }
}
