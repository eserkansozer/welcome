import { BirthDayRecord } from './../../Models/BirthDayRecord';
import { BirthdayService } from './../../Services/birthday.service';
import { Component, OnInit, Input } from '@angular/core';
import { DaytimeService } from '../../Services/daytime.service';

@Component({
  selector: 'app-birthday-reminder',
  templateUrl: './birthday-reminder.component.html',
  styleUrls: ['./birthday-reminder.component.css']
})
export class BirthdayReminderComponent implements OnInit {

  @Input() closable: boolean;

  public todaysBirthdays: Array<BirthDayRecord> = [];

  constructor(private dayTimeService: DaytimeService, private birthdayService: BirthdayService) { }

  ngOnInit() {
    const today = this.dayTimeService.getDate().toString();
    const birthdays: Array<BirthDayRecord> = this.birthdayService.getBirthdays();
    this.todaysBirthdays = birthdays.filter((birthday) => birthday.date.toString() === today);
  }

  refresh()  {
    this.ngOnInit();
  }
}

