import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FunctionChoosePage } from './function-choose';

@NgModule({
  declarations: [
    FunctionChoosePage,
  ],
  imports: [
    IonicPageModule.forChild(FunctionChoosePage),
  ],
  exports: [
    FunctionChoosePage
  ]
})
export class FunctionChoosePageModule {}
