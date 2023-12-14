import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateClientInfoPage } from './update-client-info.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateClientInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateClientInfoPageRoutingModule {}
