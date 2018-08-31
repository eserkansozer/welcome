import { BirthdayService } from './../Services/birthday.service';
import { BirthDayRecord } from './../Models/BirthDayRecord';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-editor',
  templateUrl: './birthday-editor.component.html',
  styleUrls: ['./birthday-editor.component.css']
})
export class BirthdayEditorComponent implements OnInit {

  constructor(private birthdayService: BirthdayService) { }

  ngOnInit() {
  }

  submit(newBday : BirthDayRecord) {
    this.birthdayService.addBirthday(newBday);
  }

}
