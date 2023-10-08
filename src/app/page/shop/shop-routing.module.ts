import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee-management',
    pathMatch: 'full',
  },
  {
    path: 'employee-management',
    loadChildren: () =>
      import('./shop-employee-management/shop-employee-management.module').then(
        m => m.ShopEmployeeManagementPageModule
      ),
  },
  {
    path: 'service-management',
    loadChildren: () =>
      import('./shop-service-management/shop-service-management.module').then(
        m => m.ShopServiceManagementPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopPageRoutingModule {}
