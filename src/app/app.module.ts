import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { MainComponent } from './main/main.component';
import { BirthdayReminderComponent } from './birthday-reminder/birthday-reminder.component';
import { WebstorageService } from './Services/webstorage.service';
import { DaytimeService } from './Services/daytime.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MainComponent,
    BirthdayReminderComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule
  ],
  providers: [
    WebstorageService, 
    DaytimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
