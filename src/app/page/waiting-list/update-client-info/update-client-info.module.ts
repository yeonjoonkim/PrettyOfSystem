import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { BookingLanguageSelectionModule } from 'src/app/component/booking/booking/booking-header/booking-language/booking-language-selection.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { UpdateClientInfoPageRoutingModule } from './update-client-info-routing.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { UpdateClientInfoPage } from './update-client-info.page';
import { UserInformationModule } from 'src/app/component/user/user-information/user-information.module';
import { WaitingListStepperModule } from 'src/app/component/waiting-list/waiting-list-stepper/waiting-list-stepper.component.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateClientInfoPageRoutingModule,
    KendoUiModule,
    BookingLanguageSelectionModule,
    LanguageTransformPipeModule,
    UserInformationModule,
    SharedFormModule,
    WaitingListStepperModule,
  ],
  declarations: [UpdateClientInfoPage],
})
export class UpdateClientInfoPageModule {}
