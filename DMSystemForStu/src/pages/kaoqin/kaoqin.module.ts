import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KaoqinPage } from './kaoqin';

@NgModule({
  declarations: [
    KaoqinPage,
  ],
  imports: [
    IonicPageModule.forChild(KaoqinPage),
  ],
  exports: [
    KaoqinPage
  ]
})
export class KaoqinPageModule {}
