import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import {GlobalStorageProvider} from "../../providers/global-storage/global-storage";
import {SignPage} from "../sign/sign";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: any;
  id: any;

  courses: any;

  constructor(private localstorage:GlobalStorageProvider,public toastCtrl: ToastController, private stuData: RedditDataProvider, private globalStorage: GlobalStorageProvider, public navCtrl: NavController) {
    globalStorage.getStorage('stuId').then((res) => {

      stuData.getPersonById(res).subscribe(
        result => {
          this.name = result.personnel.Pname;
          this.id = result.personnel.ID;
          this.localstorage.setStorage('Studentid', result.personnel.Studentid);

        }
      );


      stuData.getCourseById(res).subscribe(
        result=>{
          this.courses = result.marks;
          // console.log( this.courses);
        }
      );
    });
  }
  ionViewWillEnter() {
    this.localstorage.getStorage('stuId').then((res) => {

      this.stuData.getPersonById(res).subscribe(
        result => {
          this.name = result.personnel.Pname;
          this.id = result.personnel.ID;
          this.localstorage.setStorage('Studentid', result.personnel.Studentid);

        }
      );


      this.stuData.getCourseById(res).subscribe(
        result=>{
          this.courses = result.marks;
          // console.log( this.courses);
        }
      );
    });
  }
  
  courseSelected(event, course) {
    this.navCtrl.push(SignPage, {
      item: course
    })
  }
}
