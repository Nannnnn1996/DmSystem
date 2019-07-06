import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import {GlobalStorageProvider} from "../../providers/global-storage/global-storage";
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  all_data:any;
  Studentid:any;
  constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public redditData: RedditDataProvider, public globalStorage: GlobalStorageProvider) {
    this.globalStorage.getStorage('Studentid').then(res=>{
      this.Studentid=res;
      this.redditData.get_add_course(res).subscribe(result=>{
        this.all_data=result.data;
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  addcourse(course:any){
    this.redditData.add_course(course.courseid,this.Studentid).subscribe(result=>{
      if (result.status=="success"){
        let toast = this.toastCtrl.create({
          message: '添加成功',
          duration: 2000,
          position: 'middle',
          showCloseButton: true,
          closeButtonText: 'OK'
        });
        toast.present();
      }
      this.redditData.get_add_course(this.Studentid).subscribe(result=>{
        this.all_data=result.data;
      })
    })

  }
}
