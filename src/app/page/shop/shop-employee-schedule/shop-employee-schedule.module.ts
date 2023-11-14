import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopEmployeeSchedulePageRoutingModule } from './shop-employee-schedule-routing.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { ShopEmployeeSchedulePage } from './shop-employee-schedule.page';
import { ShopEmployeeScheduleModule } from 'src/app/component/shop/shop-employee-schedule/shop-employee-schedule.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopEmployeeSchedulePageRoutingModule,
    ShopEmployeeScheduleModule,
    LanguageTransformPipeModule,
  ],
  declarations: [ShopEmployeeSchedulePage],
})
export class ShopEmployeeSchedulePageModule {}
