import { Component, OnInit } from '@angular/core';
import { DaytimeService } from '../Services/daytime.service';
import { WebstorageService } from '../Services/webstorage.service';
import { BirthDayRecord } from '../Models/BirthDayRecord';

@Component({
  selector: 'app-birthday-reminder',
  templateUrl: './birthday-reminder.component.html',
  styleUrls: ['./birthday-reminder.component.css'],
  providers: [WebstorageService]
})
export class BirthdayReminderComponent implements OnInit {
  
  private todaysBirthdays: Array<BirthDayRecord> = [];
  
  constructor(private dayTimeService : DaytimeService, private storageService : WebstorageService) {
     
  }
  
  ngOnInit() {  
    let today = this.dayTimeService.getDate();
    let birthdays= this.storageService.get("birthdays");
    this.todaysBirthdays = birthdays.filter((birthday) => birthday.date == today);
  }
}

