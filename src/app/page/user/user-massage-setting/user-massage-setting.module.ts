import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserMassageSettingPageRoutingModule } from './user-massage-setting-routing.module';
import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { UserMassageSettingModule } from 'src/app/component/user/user-massage-setting/user-massage-setting.module';

import { UserMassageSettingPage } from './user-massage-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserMassageSettingPageRoutingModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    SharedFormModule,
    UserMassageSettingModule,
  ],
  declarations: [UserMassageSettingPage],
})
export class UserMassageSettingPageModule {}
