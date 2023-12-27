import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectSpecialistTimePage } from './select-specialist-time.page';

const routes: Routes = [
  {
    path: '',
    component: SelectSpecialistTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectSpecialistTimePageRoutingModule {}
