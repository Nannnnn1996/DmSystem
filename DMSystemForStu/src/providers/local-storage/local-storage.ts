import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class LocalStorageProvider {

  private storage = window.localStorage;
  constructor() {
    console.log('Hello LocalStorageProvider Provider');
  }

  setStorage(key:string, val:any) {
    this.storage.set(key,JSON.stringify(val));
  }

  getStorage(key:string):any{
    return this.storage.getItem(key);
  }

  get(key:string, defaultValue:any):any{
    let value:any = this.storage.getItem(key);
    try{
      value = JSON.parse(value);
    }
    catch(error){
      value = null;
    }
    if(value===null && defaultValue){
      value = defaultValue;
    }
    return value;
  }
}
