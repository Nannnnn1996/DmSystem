import { Component } from '@angular/core';
import {MenuController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
// import {LocalStorageProvider} from "../providers/local-storage/local-storage";
//import {HomePage} from "../pages/home/home";
// import {WelcomePage} from "../pages/welcome/welcome";
import {GlobalStorageProvider} from "../providers/global-storage/global-storage";
// import {SignPage} from "../pages/sign/sign";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public menuCtrl:MenuController,
              private storage:GlobalStorageProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    storage.getStorage('stuId').then((res) => {
      // this.stuInf = res;
      // console.log(res);
      if(res){
        this.rootPage = TabsPage;
      }
      else {
        this.rootPage = LoginPage;
      }
    });
  }
}
