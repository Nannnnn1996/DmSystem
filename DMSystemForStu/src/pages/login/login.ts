import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,App,LoadingController,ToastController} from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import {TabsPage} from "../tabs/tabs";
import {GlobalStorageProvider} from "../../providers/global-storage/global-storage";




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    name: '',
    pwd: ''
  };
  isPass = '';
  stuInf: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private localstorage:GlobalStorageProvider,
              public loginData:RedditDataProvider,public toastCtrl:ToastController,public loadingCtrl:LoadingController,
              public alertCtrl:AlertController,public app:App) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    let loading = this.loadingCtrl.create({
      duration: 1000
    });

    

    this.loginData.postLogin(this.user.name, this.user.pwd).subscribe(
      result => {

        // console.log(result);
        this.isPass = result.state;

        if (this.isPass == '1') {
          // console.log('setRoot stage');
          this.localstorage.setStorage('stuId', this.user.name);
          let toast = this.toastCtrl.create({
            message: '登录成功',
            duration: 1000,
            position: 'bottom',
          });
          toast.present();
          loading.present();
          this.navCtrl.setRoot(TabsPage);
        }
        else if (this.isPass == '0') {
          let toast = this.toastCtrl.create({
            message: '学号不存在，请确认输入',
            duration: 2000,
            position: 'middle',
            showCloseButton: true,
            closeButtonText: 'OK'
          });
          toast.present();
        }
        else {
          let toast = this.toastCtrl.create({
            message: '密码错误，请重输',
            duration: 2000,
            position: 'middle',
            showCloseButton: true,
            closeButtonText: 'OK'
          });
          toast.present();
        }

        console.log("Success : " + this.isPass);
      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        console.log('postLogin completed');
      }
    );


    // console.log(this.user);
  }

  getID() {
    return this.user.name;
  }
}
