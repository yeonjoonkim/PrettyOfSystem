import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitingListPage } from './waiting-list.page';

const routes: Routes = [
  {
    path: '',
    component: WaitingListPage
  },
  {
    path: 'update-client-info',
    loadChildren: () => import('./update-client-info/update-client-info.module').then( m => m.UpdateClientInfoPageModule)
  },
  {
    path: 'update-medical-info',
    loadChildren: () => import('./update-medical-info/update-medical-info.module').then( m => m.UpdateMedicalInfoPageModule)
  },
  {
    path: 'update-massage-preference',
    loadChildren: () => import('./update-massage-preference/update-massage-preference.module').then( m => m.UpdateMassagePreferencePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingListPageRoutingModule {}
