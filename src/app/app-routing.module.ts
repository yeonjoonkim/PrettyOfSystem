import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { loginGuard, isLogin } from './guard/login-gurad/login-guard.guard';
import { receptionGuard, systemAdminGuard } from './guard/role-guard/role.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/booking',
    pathMatch: 'full',
  },
  {
    path: 'system',
    loadChildren: () => import('./page/system/system.module').then(m => m.SystemPageModule),
    canActivate: [systemAdminGuard],
  },

  {
    path: 'no-internet',
    loadChildren: () => import('./page/access/no-internet/no-internet.module').then(m => m.NoInternetPageModule),
  },
  {
    path: 'booking',
    loadChildren: () => import('./page/booking/booking.module').then(m => m.BookingPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./page/access/login/login.module').then(m => m.LoginPageModule),
    canActivate: [loginGuard],
  },
  {
    path: 'shop',
    loadChildren: () => import('./page/shop/shop.module').then(m => m.ShopPageModule),
    canActivate: [receptionGuard],
  },
  {
    path: 'reservation',
    loadChildren: () => import('./page/reservation/reservation.module').then(m => m.ReservationPageModule),
    canActivate: [receptionGuard],
  },
  {
    path: 'waiting-list/:id',
    loadChildren: () => import('./page/waiting-list/waiting-list.module').then(m => m.WaitingListPageModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./page/user/user.module').then(m => m.UserPageModule),
    canActivate: [isLogin],
  },
  {
    path: 'change-phone-number/:id',
    loadChildren: () =>
      import('./page/access/change-phone-number/change-phone-number.module').then(
        m => m.ChangePhoneNumberPageModule
      ),
  },
  {
    path: 'signature-transfer/:id',
    loadChildren: () =>
      import('./page/signature-transfer/signature-transfer.module').then(m => m.SignatureTransferPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
