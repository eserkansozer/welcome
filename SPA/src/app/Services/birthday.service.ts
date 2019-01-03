import { BirthDayRecord } from './../Models/BirthDayRecord';
import { LocalStorageService } from './webstorage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BirthdayService {
  private KEY = 'birthdays';
  constructor(private storageService: LocalStorageService) { }

  getBirthdays(): Array<BirthDayRecord> {
    const birthdays = (this.storageService.get(this.KEY) as Array<BirthDayRecord>) || new Array<BirthDayRecord>();
    return birthdays;
  }

  getBirthday(id: Number): BirthDayRecord {
    const birthdays = this.storageService.get(this.KEY) as Array<BirthDayRecord>;
    const foundBDay = birthdays.find(bDay => bDay.id === id);
    return foundBDay;
  }

  addBirthday(newBDay: BirthDayRecord) {
    const birthdays = (this.storageService.get(this.KEY) as Array<BirthDayRecord>) || new Array<BirthDayRecord>();
    if (birthdays.length === 0) {
      newBDay.id = 1;
    } else {
      newBDay.id =  Math.max.apply(Math, birthdays.map(function(b) { return b.id; })) + 1 ;
    }
    newBDay.date = new Date(newBDay.date.toISOString().split('T')[0]);
    birthdays.push(newBDay);
    this.storageService.set(this.KEY, birthdays);
  }

  removeBirthday(id: Number) {
    const birthdays = this.storageService.get(this.KEY) as Array<BirthDayRecord>;
    const newBirthdays = birthdays.filter(bDay => bDay.id !== id);
    this.storageService.set(this.KEY, newBirthdays);
  }

  updateBirthday(bDayToEdit: BirthDayRecord) {
    const birthdays = this.storageService.get(this.KEY) as Array<BirthDayRecord>;
    const foundBDay = birthdays.find(bDay => bDay.id === bDayToEdit.id);
    foundBDay.name = bDayToEdit.name;
    foundBDay.date = new Date(bDayToEdit.date.toISOString().split('T')[0]);
    this.storageService.set(this.KEY, birthdays);
  }

}
