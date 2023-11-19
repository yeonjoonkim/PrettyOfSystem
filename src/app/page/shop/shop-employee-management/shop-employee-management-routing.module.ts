import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopEmployeeManagementPage } from './shop-employee-management.page';

const routes: Routes = [
  {
    path: '',
    component: ShopEmployeeManagementPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopEmployeeManagementPageRoutingModule {}
