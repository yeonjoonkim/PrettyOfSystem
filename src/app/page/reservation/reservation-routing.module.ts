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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationPageRoutingModule {}
