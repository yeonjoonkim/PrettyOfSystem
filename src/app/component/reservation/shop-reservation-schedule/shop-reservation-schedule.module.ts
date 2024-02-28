import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { DatePipeModule } from 'src/app/pipe/date/date.pipe.module';

//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';
import { ShopReservationScheduleEmployeeInfoModule } from '../shop-reservation-schedule-employee-info/shop-reservation-schedule-employee-info.module';

import { ShopReservationScheduleComponent } from './shop-reservation-schedule.component';
import { ShopReservationSchedulerToolbarComponent } from './shop-reservation-scheduler-toolbar/shop-reservation-scheduler-toolbar.component';
import { ShopReservationSchedulerMobileToolbarPopoverComponent } from './shop-reservation-scheduler-mobile-toolbar-popover/shop-reservation-scheduler-mobile-toolbar-popover.component';

@NgModule({
  declarations: [
    ShopReservationScheduleComponent,
    ShopReservationSchedulerToolbarComponent,
    ShopReservationSchedulerMobileToolbarPopoverComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    DatePipeModule,
    ShopReservationScheduleEmployeeInfoModule,
  ],
  exports: [ShopReservationScheduleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopReservationScheduleModule {}
