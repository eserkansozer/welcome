import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Output() editorRefresh = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onSettingsChanged(){
    this.editorRefresh.emit();
  }

}
