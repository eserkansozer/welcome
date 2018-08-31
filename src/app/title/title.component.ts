import { DaytimeService } from '../Services/daytime.service';
import { Component, OnInit } from '@angular/core';
import { TimeOfDay } from '../Enums';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  constructor(private dayTimeService: DaytimeService) { }

  getTitleClass() {
    let dayTime = this.dayTimeService.getDayTime();

    switch (dayTime) {
      case TimeOfDay.Morning:
        return "morning";
      case TimeOfDay.Afternoon:
        return "afternoon";
      case TimeOfDay.Evening:
        return "evening"
    }
  }

  getWelcomeMessage() {

    let dayTime = this.dayTimeService.getDayTime();

    switch (dayTime) {
      case TimeOfDay.Morning:
        return "Good morning!";
      case TimeOfDay.Afternoon:
        return "Good afternoon!";
      case TimeOfDay.Evening:
        return "Good evening!"
    }
  }
}
