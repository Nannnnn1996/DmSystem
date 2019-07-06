import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import{GlobalStorageProvider} from "../../providers/global-storage/global-storage"

@Component({
  selector: 'page-position',
  templateUrl: 'position.html'
})
export class PositionPage {
  score:any;
  testRadioOpen: boolean;
  testRadioResult;
  due:boolean;
  due2:boolean;
  judge1:boolean=true;
  judge2:boolean;
  coursename: string;
  id:any;
  bcalldate:any;
  acalldate:any;
  ccalldate:any;
  result:any;
  result2:any;
  callposition:any;
  call1=[];
  call2=[];
  pname=[];
  hang:any;
  lie:any;
  position:any;
  hangT=[];
  lieT=[];
  final:any;
  now = new Date();
  courseId:any;
  constructor(public toastCtrl:ToastController,public alerCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,
              public CallData: RedditDataProvider,public globalStorage:GlobalStorageProvider) {

    this.globalStorage.getStorage('coursename').then((res) => {
      this.coursename = res;
      console.log(this.coursename);
    });
    this.globalStorage.getStorage('teacherId').then((res) => {
      this.courseId = res;
      console.log(this.courseId);
    });

  }
  judge11(){this.judge1=true;this.judge2=false;}
  judge22(){this.judge2=true;this.judge1=false;}
  
  find() {
    this.due=true;
    this.due2=false;
    this.bcalldate=""+this.now.getFullYear()+"-"+(this.now.getMonth()+1)+"-"+this.now.getDate();//this.now;
    this.acalldate=this.bcalldate;//this.now;
    this.ccalldate=this.bcalldate;

    this.CallData.getCourseByNameHql(this.coursename).subscribe(
      result=>{

        this.result=result.course;
        this.callposition=result.course.shape;
        this.hang=parseInt(this.callposition.split("*")[0]);
        this.lie=parseInt(this.callposition.split("*")[1]);
        for(var j=0;j<this.hang;j++){  this.hangT[j]=j;}
        for(var x=0;x<this.lie;x++){  this.lieT[x]=x;}
        
        var n=this.hang,m=this.lie;
        var hhh=new Array();
        for(var i=0; i<n; i++) {
          hhh[i] = new Array();
          for (var j = 0; j < m; j++)
          {
            hhh[i][j]=new Array();
            hhh[i][j][0]="null";
            hhh[i][j][1]=0;
            hhh[i][j][2]=0;
          }
        }
        this.position=hhh;
        this.CallData.getCourseByID(this.courseId).subscribe(result=>{
          console.log(result);
          if(result.status=="sucess"){
          let all_data=result.data;
          for (let i = 0 ;i<all_data.length;i++ ){
            if(all_data[i].Status=="签到"){
              let place=all_data[i].Place;
              let H=parseInt(place.split("*")[0]);
              let L=parseInt(place.split("*")[1]);
              this.position[H][L][0]=all_data[i].StudentName;
              this.position[H][L][1]=1;
              this.position[H][L][2]=all_data[i].Studentid;
            }
          }
        }else{
          let toast = this.toastCtrl.create({
            message: result.error,
            duration:3000
          });
          toast.present();
        }

        })
      }
      

    );
    
  }
  find2(){ this.due2=true;
    this.due=false;
    this.bcalldate=""+this.now.getFullYear()+"-"+(this.now.getMonth()+1)+"-"+this.now.getDate();//this.now;
    this.acalldate=this.bcalldate;//"2017-4-6";//this.now;
    this.ccalldate=this.bcalldate;//"2017-4-6";
    // console.log(this.bcalldate);
    this.CallData.getCourseByID(this.courseId).subscribe(
      result=>{
        this.result2=result.data;
        for (let i = 0 ;i<this.result2.length;i++ ){
          if(this.result2[i].SignData!=null)
          this.result2[i].SignData=this.result2[i].SignData.substring(0,this.result2[i].SignData.length-3);
          
        }
      }
    )

  }


  start(){
    this.CallData.callOverByCoursenameAndDate(this.courseId).subscribe(
      result=>{
        if( result.status=='sucess'){
          let toast = this.toastCtrl.create({
            message: '开启签到',
            duration:3000
          });
          toast.present();
        }else{
          let toast = this.toastCtrl.create({
            message: result.error,
            duration:3000
          });
          toast.present();
        }
      }
    )
  }



}
