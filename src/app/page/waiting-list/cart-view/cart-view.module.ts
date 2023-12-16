import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartViewPageRoutingModule } from './cart-view-routing.module';

import { CartViewPage } from './cart-view.page';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { SharedFormModule } from 'src/app/component/form/form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartViewPageRoutingModule,
    KendoUiModule,
    LanguageTransformPipeModule,
    SharedFormModule,
  ],
  declarations: [CartViewPage],
})
export class CartViewPageModule {}
