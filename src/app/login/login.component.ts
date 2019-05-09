import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private router: Router,private message: NzMessageService) { }

  form: FormGroup;
  error = '';
  loading = false;
  loadingdesc = '登录';
  submitTime = new Date();
  ngOnInit() {
    this.form = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }


  submitForm(): void {
    this.error = '';
    const loginParams = {
      loginId: this.userName.value,
      passcode: this.password.value,
      oneTimeCode: this.submitTime.getTime()
    };
    if (this.form.valid) {
      this.loading = true;
      this.loadingdesc = '登录中...';
      if (loginParams.loginId === 'admin' && loginParams.passcode === '12345678') {
        sessionStorage.setItem('login_status', 'True');
        this.router.navigate(['function']);
  
      }else{
        this.form.get('password').setValue("");
        sessionStorage.setItem('login_status', 'False');
        this.createBasicMessage();
      }
      this.loading = false;
      this.loadingdesc = '登录';

   }
  }
  get userName() { return this.form.controls.userName; }
  get password() { return this.form.controls.password; }
  createBasicMessage(): void {
    this.message.create('error', `输入的账号或密码错误`);
  }
}
