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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopPageRoutingModule {}
