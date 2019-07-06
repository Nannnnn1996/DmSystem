import { Component } from '@angular/core';
import { NavController ,ToastController} from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import {GlobalStorageProvider} from "../../providers/global-storage/global-storage";
import {CommonPage} from "../common/common";
import {KaoqinPage} from "../kaoqin/kaoqin";
import {LoginPage} from "../login/login";
import{WelcomePage} from '../welcome/welcome'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  name:any;
  id:any;
  // numberId:'170327026';

  constructor(public navCtrl: NavController,public toasrCtrl:ToastController,private stuData:RedditDataProvider,
              private localstorage:GlobalStorageProvider) {
    this.localstorage.getStorage('stuId').then((res) => {
      // this.stuInf = res;
      console.log(res);
      this.stuData.getPersonById(res).subscribe(
        result =>{
          this.name = result.personnel.Pname;
          console.log(name);
          this.id = result.personnel.ID;
        }
      );
    });
  }




  common(){
    this.navCtrl.push(CommonPage);
  }

  kaoqin(){
    this.navCtrl.push(KaoqinPage);
  }

  out(){
    // this.localstorage.remove('stuId');
    this.navCtrl.push(LoginPage);
  }

  add_course(){
    this.navCtrl.push(WelcomePage);
  }
}
