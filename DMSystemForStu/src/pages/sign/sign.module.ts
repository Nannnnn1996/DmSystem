import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignPage } from './sign';

@NgModule({
  declarations: [
    SignPage,
  ],
  imports: [
    IonicPageModule.forChild(SignPage),
  ],
  exports: [
    SignPage
  ]
})

export class SignPageModule {}
