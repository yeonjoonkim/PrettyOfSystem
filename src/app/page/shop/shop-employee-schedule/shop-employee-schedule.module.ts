import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopEmployeeSchedulePageRoutingModule } from './shop-employee-schedule-routing.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { ShopEmployeeSchedulePage } from './shop-employee-schedule.page';
import { ShopEmployeeRosterManagementModule } from 'src/app/component/shop/shop-employee-roster-management/shop-employee-roster-management.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopEmployeeSchedulePageRoutingModule,
    LanguageTransformPipeModule,
    ShopEmployeeRosterManagementModule,
    KendoUiModule,
  ],
  declarations: [ShopEmployeeSchedulePage],
})
export class ShopEmployeeSchedulePageModule {}
