import { FxComponent } from './../fx/fx.component';
import { TimeOfDay } from '../Enums';
import { DaytimeService } from '../Services/daytime.service';
import { Component, trigger, state, style, transition, animate, ViewChild } from '@angular/core';
import { BirthdayReminderComponent } from '../birthday-reminder/birthday-reminder.component';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';

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

  @ViewChild(BirthdayReminderComponent)
  private birthdayComponent: BirthdayReminderComponent;

  @ViewChild(WeatherForecastComponent)
  private weatherComponent: WeatherForecastComponent;

  @ViewChild(FxComponent)
  private fxComponent: FxComponent;

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
  
  refreshPanes(event)
  {
    switch (event) {
      case "birthday":
        this.birthdayComponent.refresh();
        break;
      case "weather":
        this.weatherComponent.refresh();
        break;
      case "fx":
        this.fxComponent.refresh();
        break;
    }    
  }
}
