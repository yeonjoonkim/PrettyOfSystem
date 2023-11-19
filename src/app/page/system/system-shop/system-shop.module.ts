//Import Ionic Angular Module
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SystemShopPageRoutingModule } from './system-shop-routing.module';
import { SystemShopPage } from './system-shop.page';

import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';

import { SystemShopManagementModule } from 'src/app/component/system/shop/shop-management/shop-management.module';
import { ShopCapacityManagementModule } from 'src/app/component/system/shop-capacity/shop-capacity-management/shop-capacity-management.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemShopPageRoutingModule,
    KendoUiModule,
    SharedFormModule,
    SystemShopManagementModule,
    LanguageTransformPipeModule,
    ShopCapacityManagementModule,
  ],
  declarations: [SystemShopPage],
})
export class SystemShopPageModule {}
