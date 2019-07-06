import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FunctionChoosePage} from "../function-choose/function-choose";
import {ContactPage} from "../contact/contact";

import {ToastController} from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import{GlobalStorageProvider} from "../../providers/global-storage/global-storage"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  stuInf: any;
  public temp:string;
  A=[];
  courseList=[];
  finalWeight=[];
  classDate=[];
  dailyWeight=[];
  shape=[];
  picketLine=[];
  classOrder=[];
  classLocation=[];
  classSession=[];
  kong:string;
  pname='老师';
  courseID=[];
  teachername="";
  constructor(public toastCtrl:ToastController,private globalStorage: GlobalStorageProvider, public navCtrl: NavController,public CallData: RedditDataProvider) {
    this.globalStorage.getStorage('stuId').then((res) => {
      //111 loginname
      this.stuInf = res;
      // console.log('home page: ' + this.stuInf);
      this.CallData.getCourseByIDHql(this.stuInf).subscribe(
        result=>{
          // console.log(result);
          this.teachername=result.name;
          this.globalStorage.setStorage('teacherId', result.teacherId);
          // console.log(result.courses.length);
          for(var i=0;i<result.courses.length;i++){
            this.courseID.push(result.courses[i].courseID);
            this.courseList.push(result.courses[i].courseName);
            this.classDate.push(result.courses[i].classDate);
            this.shape.push(result.courses[i].shape);
            this.classOrder.push(result.courses[i].classOrder);
            this.classLocation.push(result.courses[i].classLocation);
            this.classSession.push(result.courses[i].classSession);
          }
          // console.log(this.courseList);
          this.kong='*********';
          for(var y=0;y<result.courses.length;y++) {
            this.A[y] = `
              周序：${this.classDate[y]}
              节次：${this.classOrder[y]}
              上课地点：${this.classLocation[y]}
              学时：${this.classSession[y]}
              布局：${this.shape[y]}
             `;
          }
        }
      )
    });

  }
  getName(){

  }

  courseSelected(course) {
    // this.navCtrl.push(HomePage);
    let toast = this.toastCtrl.create({
      message: '您已成功选择课程:'+course+'！！！请进入侧边栏选择功能',
      duration:3000
    });
    toast.present();
    this.temp=course;
    for (let i=0;i<this.courseList.length;i++){
      if(this.courseList[i]==course){
        this.globalStorage.setStorage('courseid',this.courseID[i]);
      }
    }
    this.globalStorage.setStorage('coursename',this.temp);
  }
  gotoFunctionChoose(){
    this.navCtrl.push(FunctionChoosePage);
  }

  gotoContact(){
    this.navCtrl.push(ContactPage);
  }
}
