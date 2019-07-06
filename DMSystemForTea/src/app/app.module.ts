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
import { RedditDataProvider } from '../providers/reddit-data/reddit-data';
import {LoginPage} from "../pages/login/login";
import {HttpModule} from "@angular/http";
import {IonicStorageModule} from "@ionic/storage";
import {FunctionChoosePage} from "../pages/function-choose/function-choose";
import { GlobalStorageProvider } from '../providers/global-storage/global-storage';
import {PositionPage} from "../pages/position/position";
import {CoursePage} from "../pages/course/course";
import {MarkPage} from "../pages/mark/mark";
import {HistoryPage} from "../pages/history/history";
import {PersonPage} from "../pages/person/person";
import {ClassPage} from "../pages/class/class";
import {CountPage} from "../pages/count/count";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    FunctionChoosePage,
    PositionPage,
    CoursePage,
    MarkPage,
    HistoryPage,
    PersonPage,
    ClassPage,
    CountPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    FunctionChoosePage,
    PositionPage,
    CoursePage,
    MarkPage,
    HistoryPage,
    PersonPage,
    ClassPage,
    CountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RedditDataProvider,
    GlobalStorageProvider
  ]
})
export class AppModule {}
