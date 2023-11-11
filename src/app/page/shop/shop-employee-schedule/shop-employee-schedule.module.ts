import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopEmployeeSchedulePageRoutingModule } from './shop-employee-schedule-routing.module';

import { ShopEmployeeSchedulePage } from './shop-employee-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopEmployeeSchedulePageRoutingModule
  ],
  declarations: [ShopEmployeeSchedulePage]
})
export class ShopEmployeeSchedulePageModule {}
