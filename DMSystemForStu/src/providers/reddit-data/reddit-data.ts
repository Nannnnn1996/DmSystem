import {Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { MD5} from "crypto-js";
/*
  Generated class for the RedditDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedditDataProvider {

  hurl = '/api';
  constructor(public http: Http) {
    console.log('Hello RedditDataProvider Provider');
  }

  postLogin(id, password){
    let url = this.hurl + '/app/student/login_check';
    let logindata={
      id:id,
      password: MD5(password).toString(),
    }
    return this.http.post(url,JSON.stringify(logindata)).map(res => res.json());
  }

  getPersonById(id){
    let url = this.hurl + '/app/student/'+id;
    return this.http.get(url).map(res => res.json());
  }


  getCourseById(id){
    let url = this.hurl + '/app/student_course/'+id;
    return this.http.get(url).map(res => res.json());
  }

  getCourseShape(id) {
    let url = this.hurl + '/app/course_shape/' + id;
    return this.http.get(url).map(res => res.json());
  }

//签到
  updateSignIn(Studentid,position,courseID){
    let url =  this.hurl+'/app/student/sign/';
    let sign_data={
      'Studentid':Studentid,
      'position':position,
      'courseID':courseID
    }
    return this.http.put(url,JSON.stringify(sign_data)).map(res => res.json());
  }
//修改密码
change_password(updata){
  let url=this.hurl+'/app/student/change_pass';
  return this.http.put(url,JSON.stringify(updata)).map(res => res.json());
}
  
get_kaoqin(Studentid){
  let url = this.hurl + '/app/student/kaoqin/'+Studentid;
  return this.http.get(url).map(res => res.json());
}

//获取添加课程
get_add_course(Studentid){
  let url = this.hurl + '/app/student/nocourse/'+Studentid;
  return this.http.get(url).map(res => res.json());
}

//addcourse
add_course(courseid,studentid){
  let url=this.hurl+'/app/student/add_course/'+courseid;
  return this.http.post(url,JSON.stringify({'studentid':studentid})).map(res => res.json());
}
}
