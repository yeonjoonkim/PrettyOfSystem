import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMassagePreferencePage } from './update-massage-preference.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMassagePreferencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMassagePreferencePageRoutingModule {}
