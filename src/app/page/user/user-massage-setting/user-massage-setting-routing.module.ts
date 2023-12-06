import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserMassageSettingPage } from './user-massage-setting.page';

const routes: Routes = [
  {
    path: '',
    component: UserMassageSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserMassageSettingPageRoutingModule {}
