import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/information',
    pathMatch: 'full',
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then(m => m.InformationPageModule),
  },
  {
    path: 'user-massage-setting',
    loadChildren: () =>
      import('./user-massage-setting/user-massage-setting.module').then(m => m.UserMassageSettingPageModule),
  },
  {
    path: 'visit-shop',
    loadChildren: () => import('./user-visit-shop/user-visit-shop.module').then(m => m.UserVisitShopPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
