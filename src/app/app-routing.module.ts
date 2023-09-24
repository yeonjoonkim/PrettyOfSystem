import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/booking',
    pathMatch: 'full',
  },
  {
    path: 'system',
    loadChildren: () => import('./page/system/system.module').then(m => m.SystemPageModule),
  },
  {
    path: 'no-internet',
    loadChildren: () =>
      import('./page/access/no-internet/no-internet.module').then(m => m.NoInternetPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./page/access/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'booking',
    loadChildren: () => import('./page/booking/booking.module').then(m => m.BookingPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
