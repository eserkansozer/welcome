import { BirthDayRecord } from './../Models/BirthDayRecord';
import { WebstorageService } from './webstorage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BirthdayService {
  KEY = "birthdays";
  constructor(private storageService : WebstorageService) { }

  getBirthdays(): Array<BirthDayRecord>{
    let birthdays = (this.storageService.get(this.KEY) as Array<BirthDayRecord>) || new Array<BirthDayRecord>();
    return birthdays;
  }

  addBirthday(newBDay: BirthDayRecord){
    let birthdays = (this.storageService.get(this.KEY) as Array<BirthDayRecord>) || new Array<BirthDayRecord>();
    newBDay.id =  birthdays.length + 1 ;
    birthdays.push(newBDay);
    this.storageService.set(this.KEY, birthdays);
  }

  removeBirthday(bDayToDelete: BirthDayRecord){
    let birthdays = this.storageService.get(this.KEY) as Array<BirthDayRecord>;
    let newBirthdays = birthdays.filter(bDay => bDay.name != bDayToDelete.name);
    this.storageService.set(this.KEY, newBirthdays);
  }

  editBirthday(bDayToEdit: BirthDayRecord){
    let birthdays = this.storageService.get(this.KEY) as Array<BirthDayRecord>;
    let foundBDay = birthdays.find(bDay => bDay.name == bDayToEdit.name);
    foundBDay.name = bDayToEdit.name;
    foundBDay.date = bDayToEdit.date;
    this.storageService.set(this.KEY, birthdays); 
  }

}
