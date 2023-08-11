import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemShopPage } from './system-shop.page';

const routes: Routes = [
  {
    path: '',
    component: SystemShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemShopPageRoutingModule {}
