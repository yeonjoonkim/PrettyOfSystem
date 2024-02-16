import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopReservationSchedulerPage } from './shop-reservation-scheduler.page';

const routes: Routes = [
  {
    path: '',
    component: ShopReservationSchedulerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopReservationSchedulerPageRoutingModule {}
