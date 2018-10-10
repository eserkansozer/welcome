import { BirthDayRecord } from './../Models/BirthDayRecord';
import { BirthdayService } from './../Services/birthday.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DaytimeService } from '../Services/daytime.service';

@Component({
  selector: 'app-birthday-reminder',
  templateUrl: './birthday-reminder.component.html',
  styleUrls: ['./birthday-reminder.component.css']
})
export class BirthdayReminderComponent implements OnInit {
  
  @Input() closable : boolean;
  @Input() refreshTriggerInput;
  
  private todaysBirthdays: Array<BirthDayRecord> = [];
  
  constructor(private dayTimeService : DaytimeService, private birthdayService : BirthdayService) { }
  
  ngOnInit() {  
    let today = this.dayTimeService.getDate();
    let birthdays : Array<BirthDayRecord> = this.birthdayService.getBirthdays();
    this.todaysBirthdays = birthdays.filter((birthday) => birthday.date == today);
  }

  ngOnChanges(changes: SimpleChanges) 
  {
    if(!changes.refreshTriggerInput.firstChange)
    {
      this.ngOnInit();
    }
  }
}

