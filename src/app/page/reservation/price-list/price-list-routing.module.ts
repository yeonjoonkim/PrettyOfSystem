import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriceListPage } from './price-list.page';

const routes: Routes = [
  {
    path: '',
    component: PriceListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriceListPageRoutingModule {}
