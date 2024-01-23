import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopClientEditPage } from './shop-client-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ShopClientEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopClientEditPageRoutingModule {}
