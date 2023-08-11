import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'configuration',
    pathMatch: 'full'
  },
  {
    path: 'configuration',
    loadChildren: () => import('./system-configuration/system-configuration.module').then( m => m.SystemConfigurationPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./system-shop/system-shop.module').then( m => m.SystemShopPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./system-language/system-language.module').then( m => m.SystemLanguagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemPageRoutingModule {}
