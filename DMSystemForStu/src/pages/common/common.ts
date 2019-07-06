import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import {GlobalStorageProvider} from "../../providers/global-storage/global-storage";
import { ToastController } from 'ionic-angular';
import { MD5} from "crypto-js";

@IonicPage()
@Component({
  selector: 'page-common',
  templateUrl: 'common.html',
})
export class CommonPage {
  newpassword:any="";
  check_password:any="";
  loginname:any;
  constructor(private localstorage:GlobalStorageProvider,public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public redditData: RedditDataProvider, public globalStorage: GlobalStorageProvider) {
    this.localstorage.getStorage('stuId').then(res=>{
      this.loginname=res;
    })
  }


  post(){
    if (this.newpassword != this.check_password){
      let toast = this.toastCtrl.create({
        message: '密码不一致',
        duration: 2000,
        position: 'middle',
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toast.present();
      return 0;
    }
    if (this.newpassword ==""){
      let toast = this.toastCtrl.create({
        message: '密码不能为空',
        duration: 2000,
        position: 'middle',
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toast.present();
      return 0;
    }
    let updata={
      'password':MD5(this.newpassword).toString(),
      'loginname':this.loginname
    }

    this.redditData.change_password(updata).subscribe(result=>{
      if(result.status="success"){
      let toast = this.toastCtrl.create({
        message: '修改成功',
        duration: 2000,
        position: 'middle',
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toast.present();
    }
    })
  }
}
