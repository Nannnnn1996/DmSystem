import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Injectable()
export class GlobalStorageProvider {

  constructor(private storage:Storage) {
    console.log('Hello GlobalStorageProvider Provider');
  }

  setStorage(key, val) {
    this.storage.set(key, val);
  }
  getStorage(key) {
    return this.storage.get(key);
  }

}
