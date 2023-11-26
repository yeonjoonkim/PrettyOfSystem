import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

import { IonicModule } from '@ionic/angular';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { CheckInPageRoutingModule } from './check-in-routing.module';
import { BookingLanguageSelectionModule } from 'src/app/component/booking/booking/booking-header/booking-language/booking-language-selection.module';
import { CheckInPage } from './check-in.page';
import { CheckInModule } from 'src/app/component/check-in/check-in/check-in.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KendoUiModule,
    CheckInPageRoutingModule,
    LanguageTransformPipeModule,
    BookingLanguageSelectionModule,
    CheckInModule,
  ],
  declarations: [CheckInPage],
})
export class CheckInPageModule {}
