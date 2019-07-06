import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import {GlobalStorageProvider} from "../../providers/global-storage/global-storage";

@IonicPage()
@Component({
  selector: 'page-kaoqin',
  templateUrl: 'kaoqin.html',
})
export class KaoqinPage {


  id:any;
  courses:any;
  all_data:any;
  record:Array<{c:string, k:string, l:string}>
  constructor(public navCtrl: NavController, public navParams: NavParams,public redditData: RedditDataProvider, public globalStorage: GlobalStorageProvider) {
    this.globalStorage.getStorage('Studentid').then(res=>{
      this.redditData.get_kaoqin(res).subscribe(result=>{
        console.log(result);
        this.all_data=result.data;
      })



    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KaoqinPage');
  }

}
