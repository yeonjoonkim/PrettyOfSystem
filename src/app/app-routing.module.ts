import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/management/system',
    pathMatch: 'full'
  },
  {
    path: 'management/system',
    loadChildren: () => import('./management/system/system.module').then( m => m.SystemPageModule)
  },
  {
    path: 'management/shop',
    loadChildren: () => import('./management/shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'management/user',
    loadChildren: () => import('./management/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'management/payment',
    loadChildren: () => import('./management/payment/payment.module').then( m => m.PaymentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
