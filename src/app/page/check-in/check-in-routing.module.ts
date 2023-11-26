import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckInPage } from './check-in.page';
import { createCheckInClientAccountGuard } from 'src/app/guard/login-gurad/login-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: CheckInPage,
  },
  {
    path: 'create-account/:phone',
    loadChildren: () => import('./create-account/create-account.module').then(m => m.CreateAccountPageModule),
    canActivate: [createCheckInClientAccountGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckInPageRoutingModule {}
