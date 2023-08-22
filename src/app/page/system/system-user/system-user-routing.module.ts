import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemUserPage } from './system-user.page';

const routes: Routes = [
  {
    path: '',
    component: SystemUserPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemUserPageRoutingModule {}
