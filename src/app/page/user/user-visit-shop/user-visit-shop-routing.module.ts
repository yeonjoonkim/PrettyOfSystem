import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserVisitShopPage } from './user-visit-shop.page';

const routes: Routes = [
  {
    path: '',
    component: UserVisitShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserVisitShopPageRoutingModule {}
