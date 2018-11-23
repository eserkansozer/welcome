import { BirthdayService } from './../../Services/birthday.service';
import { BirthDayRecord } from './../../Models/BirthDayRecord';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-birthday-editor',
  templateUrl: './birthday-editor.component.html',
  styleUrls: ['./birthday-editor.component.css']
})
export class BirthdayEditorComponent implements OnInit {

  @Input() mode : string;
  @Output() refresh = new EventEmitter<string>();

  allBirthDays : Array<BirthDayRecord>;
  bDayOnEdit : BirthDayRecord;

  constructor(private birthdayService: BirthdayService) { }

  ngOnInit() {
     this.allBirthDays = this.birthdayService.getBirthdays();
  }

  onAdd(newBday : BirthDayRecord) {
    this.birthdayService.addBirthday(newBday);
    this.allBirthDays = this.birthdayService.getBirthdays();
    this.refresh.emit("birthday");
  }

  onDelete(bid: Number)
  {
    this.birthdayService.removeBirthday(bid);
    this.allBirthDays = this.birthdayService.getBirthdays();
    this.refresh.emit("birthday");
  }

  onEdit(bid: Number)
  {
    this.bDayOnEdit = this.birthdayService.getBirthday(bid);
    this.mode = 'edit';
  }

  onUpdate() {
    this.birthdayService.updateBirthday(this.bDayOnEdit);
    this.allBirthDays = this.birthdayService.getBirthdays();
    this.mode = 'list';
    this.refresh.emit("birthday");
  }
}
