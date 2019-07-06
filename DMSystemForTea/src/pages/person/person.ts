import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import{GlobalStorageProvider} from "../../providers/global-storage/global-storage"
/**
 * Generated class for the PersonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  due:boolean;
  due2:boolean;
  judge1:boolean;
  judge2:boolean;
  coursename: string;
  courseid:any;
  result:any;
  // 本地数据
  ID:any;
  dailyScore:any;
  finalScore:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public CallData: RedditDataProvider,public globalStorage:GlobalStorageProvider) {

    this.globalStorage.getStorage('coursename').then((res) => {
      this.coursename = res;
      // console.log(this.coursename);
    });
    this.globalStorage.getStorage('courseid').then((res) => {
      this.courseid = res;
      // console.log(this.courseid);
      this.due=true;
    this.due2=false;
    this.CallData.getMarkByName(this.courseid).subscribe(
      result => {
        this.result=result.data;
      }
    );
    });

  }
  judge11(){this.judge1=true;this.judge2=false;}
  judge22(){this.judge2=true;this.judge1=false;}

  find() {
    
  }



}
