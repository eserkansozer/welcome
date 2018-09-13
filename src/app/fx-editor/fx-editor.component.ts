import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WebstorageService } from '../Services/webstorage.service';
import { FxRecord } from '../Models/FxRecord';


@Component({
  selector: 'app-fx-editor',
  templateUrl: './fx-editor.component.html',
  styleUrls: ['./fx-editor.component.css']
})
export class FxEditorComponent implements OnInit {
  @Output() refresh = new EventEmitter<string>();

  fxOnEdit: FxRecord;

  constructor(private storageService: WebstorageService) { }

  ngOnInit() {
    this.fxOnEdit = this.storageService.get('fx') as FxRecord  || new FxRecord("","",0);        
  }

  onSave(){
    this.storageService.set('fx', this.fxOnEdit);
    this.refresh.emit("fx");
  }
}
