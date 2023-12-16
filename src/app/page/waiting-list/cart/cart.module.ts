import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { WaitingListCartModule } from 'src/app/component/waiting-list/waiting-list-cart/waiting-list-cart.component.module';
import { ExtraPriceListCardModule } from 'src/app/component/card/price-list-card/extra-price-list-card/extra-price-list-card.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    KendoUiModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    WaitingListCartModule,
    ExtraPriceListCardModule,
  ],
  providers: [LanguageTransformPipeModule],
  declarations: [CartPage],
})
export class CartPageModule {}
