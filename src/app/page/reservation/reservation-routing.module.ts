import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'price-list',
    pathMatch: 'full',
  },
  {
    path: 'price-list',
    loadChildren: () => import('./price-list/price-list.module').then(m => m.PriceListPageModule),
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./shop-reservation-scheduler/shop-reservation-scheduler.module').then(
        m => m.ShopReservationSchedulerPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationPageRoutingModule {}
