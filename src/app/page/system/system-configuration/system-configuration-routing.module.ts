import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemConfigurationPage } from './system-configuration.page';

const routes: Routes = [
  {
    path: '',
    component: SystemConfigurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemConfigurationPageRoutingModule {}
