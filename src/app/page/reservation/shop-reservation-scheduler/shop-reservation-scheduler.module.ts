import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopReservationSchedulerPageRoutingModule } from './shop-reservation-scheduler-routing.module';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';

import { ShopReservationSchedulerPage } from './shop-reservation-scheduler.page';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { ShopReservationScheduleModule } from 'src/app/component/reservation/shop-reservation-schedule/shop-reservation-schedule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopReservationSchedulerPageRoutingModule,
    KendoUiModule,
    ShopReservationScheduleModule,
    LanguageTransformPipeModule,
    SharedFormModule,
  ],
  declarations: [ShopReservationSchedulerPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopReservationSchedulerPageModule {}
