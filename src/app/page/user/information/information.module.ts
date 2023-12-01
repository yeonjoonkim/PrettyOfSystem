import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InformationPageRoutingModule } from './information-routing.module';
import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { UserInformationModule } from 'src/app/component/user/user-information/user-information.module';
import { InformationPage } from './information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationPageRoutingModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    SharedFormModule,
    UserInformationModule,
  ],
  declarations: [InformationPage],
})
export class InformationPageModule {}
