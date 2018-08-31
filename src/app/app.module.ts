import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { MainComponent } from './main/main.component';
import { BirthdayReminderComponent } from './birthday-reminder/birthday-reminder.component';
import { WebstorageService } from './Services/webstorage.service';
import { DaytimeService } from './Services/daytime.service';
import { BirthdayService } from './Services/birthday.service';
import { BirthdayEditorComponent } from './birthday-editor/birthday-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MainComponent,
    BirthdayReminderComponent,
    BirthdayEditorComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    FormsModule
  ],
  providers: [
    WebstorageService, 
    DaytimeService,
    BirthdayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
