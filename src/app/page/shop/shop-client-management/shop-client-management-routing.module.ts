import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopClientManagementPage } from './shop-client-management.page';

const routes: Routes = [
  {
    path: '',
    component: ShopClientManagementPage,
  },
  {
    path: 'create/:phoneNumber',
    loadChildren: () =>
      import('./shop-client-create/shop-client-create.module').then(m => m.ShopClientCreatePageModule),
  },
  {
    path: 'edit/:clientId',
    loadChildren: () => import('./shop-client-edit/shop-client-edit.module').then(m => m.ShopClientEditPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopClientManagementPageRoutingModule {}
