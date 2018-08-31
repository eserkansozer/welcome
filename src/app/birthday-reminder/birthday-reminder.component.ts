import { DaytimeService } from './../daytime.service';
import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-birthday-reminder',
  templateUrl: './birthday-reminder.component.html',
  styleUrls: ['./birthday-reminder.component.css']
})
export class BirthdayReminderComponent implements OnInit {
  
  private todaysBirthdays: Array<BirthDayRecord> = [];
  
  constructor(private dayTimeService : DaytimeService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
     
  }
  
  ngOnInit() {  

/*   this.storage.set("birthdays",[ 
    new BirthDayRecord("Ada","Thu Aug 30 2018"), 
    new BirthDayRecord("Ozge", "Fri Aug 31 2018")
]); */


    let today = this.dayTimeService.getDate();
    let birthdays= this.storage.get("birthdays");
    this.todaysBirthdays = birthdays.filter((birthday) => birthday.date == today);
  }
}

export class BirthDayRecord{
  date: string;
  name: string;
  constructor(name, date){
    this.name = name;
    this.date = date;
  }
}