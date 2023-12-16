import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartViewPage } from './cart-view.page';

const routes: Routes = [
  {
    path: '',
    component: CartViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartViewPageRoutingModule {}
