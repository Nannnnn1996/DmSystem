import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { RedditDataProvider } from '../providers/reddit-data/reddit-data';
import {HttpModule} from "@angular/http";
import {IonicStorageModule} from "@ionic/storage";
import { GlobalStorageProvider } from '../providers/global-storage/global-storage';
import {WelcomePage} from "../pages/welcome/welcome";
import {SignPage} from "../pages/sign/sign";
import {CommonPage} from "../pages/common/common";
import {KaoqinPage} from "../pages/kaoqin/kaoqin";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage,
    SignPage,
    CommonPage,
    KaoqinPage
  ],
  imports: [

    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage,
    SignPage,
    CommonPage,
    KaoqinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalStorageProvider,
    RedditDataProvider,
    GlobalStorageProvider
  ]
})
export class AppModule {}
