import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopServiceManagementPage } from './shop-service-management.page';

const routes: Routes = [
  {
    path: '',
    component: ShopServiceManagementPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopServiceManagementPageRoutingModule {}
