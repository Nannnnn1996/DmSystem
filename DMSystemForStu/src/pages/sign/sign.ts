import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {GlobalStorageProvider} from "../../providers/global-storage/global-storage";
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";


@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {

  courseID:any;
  course:any;
  homeItem: any;
  site: string[];
  row: any;
  col: any;
  rows: number[];
  cols: number[];

  pai: string='';
  lie: string='';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public toastCtrl: ToastController, public loadingCtrl: LoadingController,public globalStorage:GlobalStorageProvider,
               public redditService: RedditDataProvider) {
    this.homeItem = navParams.get('item');
    this.course = this.homeItem.cnameAndID.courseName;
    this.courseID = this.homeItem.cnameAndID.courseID;
    console.log(this.homeItem.cnameAndID.courseName);
    redditService.getCourseShape(this.homeItem.cnameAndID.courseID).subscribe(result => {
      this.site = result.shape.split('*');
      this.row = this.site[0];
      this.col = this.site[1];
      this.cols = [];
      this.rows = [];
      for (let i = 1; i <= this.col; i++) {
        this.cols.push(i);
      }
      for (let i = 1; i <= this.row; i++) {
        this.rows.push(i);
      }
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }

  qiandao(){
    let loading = this.loadingCtrl.create({
      duration: 1000
    });

    let position = this.pai + '*' +this.lie;

    this.globalStorage.getStorage('Studentid').then(Studentid=>{
      this.redditService.updateSignIn(Studentid, position, this.courseID).subscribe(result => {
        console.log(result);
        if (result.status=='success'){
            let toast = this.toastCtrl.create({
            message: '签到成功',
            duration: 1000,
            position: 'bottom',
          });
          toast.present();
          loading.present()
        }else{
        let toast = this.toastCtrl.create({
            message: result.error,
            duration: 1000,
            position: 'middle',
          });
          toast.present();
          loading.present();

        }
      });
    });
  }
}
