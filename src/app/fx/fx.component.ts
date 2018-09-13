import { FxService } from './../Services/fx.service';
import { Component, OnInit, Input } from '@angular/core';
import { WebstorageService } from '../Services/webstorage.service';
import { FxRecord } from '../Models/FxRecord';

@Component({
  selector: 'app-fx',
  templateUrl: './fx.component.html',
  styleUrls: ['./fx.component.css']
})
export class FxComponent implements OnInit {

  fx: FxRecord;
  @Input() refreshTriggerInput;
  
  constructor(private fxService: FxService, private storageService : WebstorageService) { }

  ngOnInit() {
    let fxConfig = this.storageService.get('fx');
    if(fxConfig)
    {
      this.fxService.getFX(fxConfig.fromCurrency, fxConfig.toCurrency)
      .subscribe(json => this.mapJsonToFxRecord(json));
    }
  }

  mapJsonToFxRecord(json: any): any {
    this.fx = new FxRecord(json.base, Object.keys(json.rates)[0], json.rates[Object.keys(json.rates)[0]]);
  }

  ngOnChanges() 
  {
    this.ngOnInit();
  }
}
