import { Injectable } from '@angular/core';
import { HttpClient,HttpClientJsonpModule} from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DictionaryOpService {

  constructor(public http: HttpClient) { }
  return_data:any;
  get_dictionary():Promise<any>{
    let url="/api/function/dictionary";
    return this.http.get(url,{observe: 'response'}).toPromise().then(data=>data);

  }

}
