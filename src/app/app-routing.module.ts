import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { loginGuard } from './guard/login-gurad/login-guard.guard';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
