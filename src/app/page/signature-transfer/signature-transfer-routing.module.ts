import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignatureTransferPage } from './signature-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: SignatureTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignatureTransferPageRoutingModule {}
