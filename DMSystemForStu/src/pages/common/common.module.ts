import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonPage } from './common';

@NgModule({
  declarations: [
    CommonPage,
  ],
  imports: [
    IonicPageModule.forChild(CommonPage),
  ],
  exports: [
    CommonPage
  ]

})
export class CommonPageModule {}
