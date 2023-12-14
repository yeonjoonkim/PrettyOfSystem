import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMedicalInfoPageRoutingModule } from './update-medical-info-routing.module';

import { UpdateMedicalInfoPage } from './update-medical-info.page';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { UserInformationModule } from 'src/app/component/user/user-information/user-information.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMedicalInfoPageRoutingModule,
    KendoUiModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    UserInformationModule,
  ],
  declarations: [UpdateMedicalInfoPage],
})
export class UpdateMedicalInfoPageModule {}
