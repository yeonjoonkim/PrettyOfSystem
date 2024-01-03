import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitingListPage } from './waiting-list.page';

const routes: Routes = [
  {
    path: '',
    component: WaitingListPage,
  },
  {
    path: 'update-client-info',
    loadChildren: () =>
      import('./update-client-info/update-client-info.module').then(m => m.UpdateClientInfoPageModule),
  },
  {
    path: 'update-massage-preference',
    loadChildren: () =>
      import('./update-massage-preference/update-massage-preference.module').then(
        m => m.UpdateMassagePreferencePageModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule),
  },
  {
    path: 'cart-view',
    loadChildren: () => import('./cart-view/cart-view.module').then(m => m.CartViewPageModule),
  },
  {
    path: 'select-specialist-time',
    loadChildren: () =>
      import('./select-specialist-time/select-specialist-time.module').then(m => m.SelectSpecialistTimePageModule),
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingListPageRoutingModule {}
