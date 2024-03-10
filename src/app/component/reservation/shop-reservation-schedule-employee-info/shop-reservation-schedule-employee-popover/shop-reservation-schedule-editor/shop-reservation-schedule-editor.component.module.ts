import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { DatePipeModule } from 'src/app/pipe/date/date.pipe.module';
import { DaysTransformPipeModule } from 'src/app/pipe/days/days.pipe.module';
//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../../../global/kendo-ui-module/kendo-ui-module.module';

import { ShopReservationScheduleEditorComponent } from './shop-reservation-schedule-editor.component';
import { ShopReservationScheduleAddBreakPopoverComponent } from './shop-reservation-schedule-add-break-popover/shop-reservation-schedule-add-break-popover.component';
import { ShopReservationScheduleEditBreakPopoverComponent } from './shop-reservation-schedule-edit-break-popover/shop-reservation-schedule-edit-break-popover.component';
@NgModule({
  declarations: [
    ShopReservationScheduleEditorComponent,
    ShopReservationScheduleAddBreakPopoverComponent,
    ShopReservationScheduleEditBreakPopoverComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    DatePipeModule,
    DaysTransformPipeModule,
  ],
  exports: [ShopReservationScheduleEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopReservationScheduleEditorModule {}
