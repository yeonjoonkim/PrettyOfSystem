import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemUserPageRoutingModule } from './system-user-routing.module';

import { SystemUserPage } from './system-user.page';

import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';

import { GenderSelectionModule } from 'src/app/component/user/gender-selection/gender-selection.module';
import { LoginOptionSelectionModule } from 'src/app/component/user/login-option-selection/login-option-selection.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemUserPageRoutingModule,
    KendoUiModule,
    SharedFormModule,
    LanguageTransformPipeModule,
    GenderSelectionModule,
    LoginOptionSelectionModule,
  ],
  declarations: [SystemUserPage],
})
export class SystemUserPageModule {}
