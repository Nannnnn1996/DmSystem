import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import{GlobalStorageProvider} from "../../providers/global-storage/global-storage"


@IonicPage()
@Component({
  selector: 'page-count',
  templateUrl: 'count.html',
})
export class CountPage {
  due:boolean;
  due2:boolean;
  judge1:boolean;
  judge2:boolean;
  courseid: string;
  result:any;
  // 本地数据
  length:any;
  ID=[];
  qiandao=[];
  kuangke=[];
  chidao=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public CallData: RedditDataProvider,public globalStorage:GlobalStorageProvider,public toastCtrl:ToastController) {


    this.globalStorage.getStorage('courseid').then((res) => {
      this.courseid = res;
      // console.log(this.courseid);
      this.due=true;
    this.due2=false;
    this.CallData.countAllCallTheRoll(this.courseid).subscribe(
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
