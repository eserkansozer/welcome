import { TimeOfDay } from '../Enums';
import { DaytimeService } from '../Services/daytime.service';
import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('expansionState', [
      state('inactive', style({
        display: 'none',
        opacity: 0
      })),
      state('active', style({        
        opacity: 1,
        display: 'block',
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-in'))
    ])
  ]
})
export class MainComponent {
  settingsPaneExpanded : string = 'inactive';
  weatherRefreshToggle : Boolean = false;
  birthdayRefreshToggle : Boolean = false;
  fxRefreshToggle : Boolean = false;

  constructor(private dayTimeService: DaytimeService) { }

  getDesktopImageUrl() : string {

    let dayTime = this.dayTimeService.getDayTime();

    switch (dayTime) {
      case TimeOfDay.Morning:
        return "https://images.pexels.com/photos/1125769/pexels-photo-1125769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
      case TimeOfDay.Afternoon:
        return "https://images.pexels.com/photos/858241/pexels-photo-858241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
      case TimeOfDay.Evening:
        return "https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    }
  }

  onSettingsClicked(){
    this.settingsPaneExpanded = this.settingsPaneExpanded == 'active' ? 'inactive' : 'active';
  }

  onRefreshPanes(event){
    switch (event) {
      case "birthday":
        this.birthdayRefreshToggle = !this.birthdayRefreshToggle;
        break;
      case "weather":
        this.weatherRefreshToggle = !this.weatherRefreshToggle;
        break;
      case "fx":
        this.fxRefreshToggle = !this.fxRefreshToggle;
        break;
    }
  }
}
