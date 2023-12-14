import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMedicalInfoPage } from './update-medical-info.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMedicalInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMedicalInfoPageRoutingModule {}
