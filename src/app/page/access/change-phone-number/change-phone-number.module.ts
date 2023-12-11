import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePhoneNumberPageRoutingModule } from './change-phone-number-routing.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { ChangePhoneNumberPage } from './change-phone-number.page';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePhoneNumberPageRoutingModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
  ],
  declarations: [ChangePhoneNumberPage],
})
export class ChangePhoneNumberPageModule {}
