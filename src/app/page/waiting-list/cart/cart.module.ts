import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { UserInformationModule } from 'src/app/component/user/user-information/user-information.module';
import { WaitingListCartModule } from 'src/app/component/waiting-list/waiting-list-cart/waiting-list-cart.component.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    KendoUiModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    UserInformationModule,
    WaitingListCartModule,
  ],
  declarations: [CartPage],
})
export class CartPageModule {}
