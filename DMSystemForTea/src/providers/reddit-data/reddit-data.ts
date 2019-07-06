import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MD5} from "crypto-js";
/*
  Generated class for the RedditDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RedditDataProvider {

  hurl = '/api';
  constructor(public http: Http) {
    console.log('Hello SignInData Provider');
  }

  postLogin(id, password) {
    let url = this.hurl + '/app/teacher/login_check';
    let logindata={
      id:id,
      password: MD5(password).toString(),
    }
    return this.http.post(url,JSON.stringify(logindata)).map(res => res.json());
  }

  getPersonById(id) {
    let url = this.hurl + '/app/teacher/' + id;
    return this.http.get(url).map(res => res.json());
  }

  //获取签到分布
  getCourseByNameHql(coursrname) {
    let url = this.hurl + '/app/teacher/course_shape/'+coursrname.toString();
    return this.http.get(url).map(res => res.json());
  }
  //获取最新签到信息
  getCourseByID(courseId) {
    let url = this.hurl + '/app/teacher/new_sign/'+courseId.toString();
    return this.http.get(url).map(res => res.json());
  }

  //更新课程
  updateCourse(updata){

    let url=this.hurl+'/app/teacher/course';
    return this.http.put(url,JSON.stringify(updata)).map(res => res.json());
  }
  //获取课程名，学生名
  getMarkByName(courseid){
    let url=this.hurl+'/app/teacher/courseid/'+courseid;
    return this.http.get(url).map(res => res.json());
  }

 
  //考勤统计
  countAllCallTheRoll(courseid){
    let url=this.hurl+'/app/teacher/kaoqin/'+courseid;
    return this.http.get(url).map(res => res.json());
  }
  //开始签到
  callOverByCoursenameAndDate(courseId){
    let url=this.hurl+'/app/teacher/sign/'+courseId;
    return this.http.get(url).map(res => res.json());
  }
 
  getCourseByIDHql(id){
    let url=this.hurl+'/app/teacher_course/'+id;
    return this.http.get(url).map(res => res.json());
  }
//修改密码
  change_password(updata){
    let url=this.hurl+'/app/teacher/change_pass';
    return this.http.put(url,JSON.stringify(updata)).map(res => res.json());
  }
}
