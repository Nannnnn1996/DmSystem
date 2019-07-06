import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import{GlobalStorageProvider} from "../../providers/global-storage/global-storage"

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {

  due:boolean;
  due2:boolean;
  judge1:boolean;
  judge2:boolean;
  coursename: string;
  oldcoursename:any;
  id:any;
  result:any;
  // 本地数据
  ID:any;
  dailyWeight:any;
  finalWeight=1-this.dailyWeight;
  picketLine:any;
  classSession:any;
  classLocation:any;
  classDate:any;
  classOrder:any;
  shape:any;
  teacherName:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public CallData: RedditDataProvider,public globalStorage:GlobalStorageProvider,public toastCtrl:ToastController) {


    this.globalStorage.getStorage('coursename').then((res) => {
      this.coursename = res;
      // console.log(this.coursename);
      this.due=true;
    this.due2=false;
    this.globalStorage.getStorage('stuId').then((res)=>{
      let stuId=res;
      // console.log(stuId);
      this.CallData.getCourseByIDHql(stuId).subscribe(
        result => {
          for(let i=0;i<result.courses.length;i++){
            if(result.courses[i].courseName==this.coursename){
                this.teacherName=result.name;
                this.result=result.courses[i];
                this.ID=result.courses[i].courseID;
                this.classSession=result.courses[i].classOrder;
                this.classLocation=result.courses[i].classLocation;
                this.classDate=result.courses[i].classDate;
                this.classOrder=result.courses[i].CourseWeek;
                this.shape=result.courses[i].shape;
            }
          }
        }
      );
    });
    
    });
  }
  judge11(){this.judge1=true;this.judge2=false;}
  judge22(){this.judge2=true;this.judge1=false;}

  find() {
    this.due2=false;
    this.due=true;
  }
  find2(){
    this.due2=true;
    this.due=false;
    this.globalStorage.getStorage('stuId').then((res)=>{
      let stuId=res;
      // console.log(stuId);
      this.CallData.getCourseByIDHql(stuId).subscribe(
        result => {
          for(let i=0;i<result.courses.length;i++){
            if(result.courses[i].courseName==this.coursename){
                this.result=result.courses[i];
                this.ID=result.courses[i].courseID;
                this.classSession=result.courses[i].classOrder;
                this.classLocation=result.courses[i].classLocation;
                this.classDate=result.courses[i].classDate;
                this.classOrder=result.courses[i].CourseWeek;
                this.shape=result.courses[i].shape;
            }
          }
        }
      );
    });

    // this.CallData.updateCourse(this.oldcoursename,this.coursename,this.shape,this.ID,this.classDate,this.classLocation,this.classOrder,this.classSession,this.dailyWeight,this.finalWeight,this.picketLine).subscribe(
    //   result=>{
    //     console.log("成功");
    //   }
    // )
  }
  post(){
    this.finalWeight=1-this.dailyWeight;
    this.oldcoursename=this.coursename;
      let updata={
        'CourseId':this.ID,
        'CourseName':this.coursename,
        'TeacherName':this.teacherName,
        'CourseWeek':this.classOrder,
        'CourseDay':this.classDate,
        'CourseTime':this.classSession,
        'CoursePlace':this.classLocation,
        'Layout':this.shape
      }
    this.CallData.updateCourse(updata).subscribe(result=>{
      console.log(result);
    }
     
      
    )
    this.due=true;
    this.due2=false;
  }

}
