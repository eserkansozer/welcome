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

  getBirthday(id : Number) : BirthDayRecord {
    let birthdays = this.storageService.get(this.KEY) as Array<BirthDayRecord>;
    let foundBDay = birthdays.find(bDay => bDay.id == id);
    return foundBDay;
  }

  addBirthday(newBDay: BirthDayRecord){
    debugger;
    let birthdays = (this.storageService.get(this.KEY) as Array<BirthDayRecord>) || new Array<BirthDayRecord>();
    if(birthdays.length == 0)
    {
      newBDay.id = 1; 
    }else{
      newBDay.id =  Math.max.apply(Math, birthdays.map(function(b) { return b.id; })) + 1 ;
    }
    birthdays.push(newBDay);
    this.storageService.set(this.KEY, birthdays);
  }

  removeBirthday(id : Number){
    let birthdays = this.storageService.get(this.KEY) as Array<BirthDayRecord>;
    let newBirthdays = birthdays.filter(bDay => bDay.id != id);
    this.storageService.set(this.KEY, newBirthdays);
  }

  updateBirthday(bDayToEdit: BirthDayRecord){
    let birthdays = this.storageService.get(this.KEY) as Array<BirthDayRecord>;
    let foundBDay = birthdays.find(bDay => bDay.id == bDayToEdit.id);
    foundBDay.name = bDayToEdit.name;
    foundBDay.date = bDayToEdit.date;
    this.storageService.set(this.KEY, birthdays); 
  }

}
