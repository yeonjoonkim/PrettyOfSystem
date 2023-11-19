import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopEmployeeSchedulePage } from './shop-employee-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: ShopEmployeeSchedulePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopEmployeeSchedulePageRoutingModule {}
