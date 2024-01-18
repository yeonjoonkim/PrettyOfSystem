import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingListConsultRequestPageRoutingModule } from './waiting-list-consult-request-routing.module';

import { WaitingListConsultRequestPage } from './waiting-list-consult-request.page';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { SuccessCheckMarkModule } from 'src/app/component/animation/success-check-mark/success-check-mark.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingListConsultRequestPageRoutingModule,
    KendoUiModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    SuccessCheckMarkModule,
  ],
  declarations: [WaitingListConsultRequestPage],
})
export class WaitingListConsultRequestPageModule {}
