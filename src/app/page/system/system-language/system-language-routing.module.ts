import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemLanguagePage } from './system-language.page';

const routes: Routes = [
  {
    path: '',
    component: SystemLanguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemLanguagePageRoutingModule {}
