import { FxService } from './../Services/fx.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { LocalStorageService } from '../Services/webstorage.service';
import { FxRecord } from '../Models/FxRecord';

@Component({
  selector: 'app-fx',
  templateUrl: './fx.component.html',
  styleUrls: ['./fx.component.css']
})
export class FxComponent implements OnInit {

  fx: FxRecord;
  @Input() refreshTriggerInput;
  
  constructor(private fxService: FxService, private storageService : LocalStorageService) { }

  ngOnInit() {
    let fxConfig = this.storageService.get('fx') as FxRecord;
    if(fxConfig)
    {
      this.fxService.getFX()
      .subscribe(json => this.mapJsonToFxRecord(json, fxConfig));
    }
  }

  mapJsonToFxRecord(json: any, fxConfig: FxRecord) {
    let rate =  json.rates[fxConfig.toCurrency] / json.rates[fxConfig.fromCurrency];
    this.fx = new FxRecord(fxConfig.fromCurrency, fxConfig.toCurrency, rate);
  }

  ngOnChanges(changes: SimpleChanges) 
  {
    if(!changes.refreshTriggerInput.firstChange)
    {
      this.ngOnInit();
    }
  }
}
