import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitingListPage } from './waiting-list.page';

const routes: Routes = [
  {
    path: '',
    component: WaitingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingListPageRoutingModule {}
