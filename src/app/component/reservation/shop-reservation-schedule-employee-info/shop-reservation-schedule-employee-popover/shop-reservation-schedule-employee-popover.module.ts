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
import { KendoUiModule } from '../../../global/kendo-ui-module/kendo-ui-module.module';

import { ShopReservationScheduleEmployeePopoverComponent } from './shop-reservation-schedule-employee-popover.component';
import { ShopReservationScheduleEditorModule } from './shop-reservation-schedule-editor/shop-reservation-schedule-editor.component.module';
import { ShopReservationScheduleEmployeeNewBreakPopoverComponent } from './shop-reservation-schedule-employee-new-break-popover/shop-reservation-schedule-employee-new-break-popover.component';
@NgModule({
  declarations: [
    ShopReservationScheduleEmployeePopoverComponent,
    ShopReservationScheduleEmployeeNewBreakPopoverComponent,
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
    ShopReservationScheduleEditorModule,
  ],
  exports: [ShopReservationScheduleEmployeePopoverComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopReservationScheduleEmployeePopoverModule {}
