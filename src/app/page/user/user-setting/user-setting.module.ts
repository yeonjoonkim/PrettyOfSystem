import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserSettingPageRoutingModule } from './user-setting-routing.module';
import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { UserSettingPage } from './user-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSettingPageRoutingModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
  ],
  declarations: [UserSettingPage],
})
export class UserSettingPageModule {}
