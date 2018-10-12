import { Injectable, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable()
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  get(key: string)
  {
    return this.storage.get(key);
  }

  set(key: string, value: any)
  {
    return this.storage.set(key, value);
  }
  
}
