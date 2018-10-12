import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { MainComponent } from './main/main.component';
import { BirthdayReminderComponent } from './birthday-reminder/birthday-reminder.component';
import { LocalStorageService } from './Services/webstorage.service';
import { DaytimeService } from './Services/daytime.service';
import { BirthdayService } from './Services/birthday.service';
import { BirthdayEditorComponent } from './birthday-editor/birthday-editor.component';
import { DataApiService } from './Services/data-api.service';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherEditorComponent } from './weather-editor/weather-editor.component';
import { EditorComponent } from './editor/editor.component';
import { WeatherCityService } from './Services/weather-city.service';
import { CreditsComponent } from './credits/credits.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FxComponent } from './fx/fx.component';
import { FxService } from './Services/fx.service';
import { FxEditorComponent } from './fx-editor/fx-editor.component';
import { WeatherService } from './Services/weather.service';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [//the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
    AppComponent,
    TitleComponent,
    MainComponent,
    BirthdayReminderComponent,
    BirthdayEditorComponent,
    WeatherForecastComponent,
    WeatherEditorComponent,
    EditorComponent,
    CreditsComponent,
    NotFoundComponent,
    FxComponent,
    FxEditorComponent
  ],
  imports: [//other modules whose exported classes are needed by component templates declared in this module.
    BrowserModule,
    StorageServiceModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'', component: MainComponent},
      {path:'about', component: CreditsComponent},
      {path:'**', component: NotFoundComponent}]
    )
  ],
  //exports: the subset of declarations that should be visible and usable in the component templates of other modules.
  providers: [//creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
    LocalStorageService, 
    DaytimeService,
    BirthdayService,
    DataApiService,
    WeatherService,
    WeatherCityService,
    FxService,
    {provide: ErrorHandler, useClass: AppErrorHandler}//replacing standard error handler with custom global error handler
  ],
  bootstrap: [AppComponent]// the main application view, called the root component, that hosts all other app views. Only the root module should set this bootstrap property.
})
export class AppModule { }
