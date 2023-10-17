import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopServiceManagementPageRoutingModule } from './shop-service-management-routing.module';
//Import Pipe
import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';

import { ShopServiceManagementPage } from './shop-service-management.page';
import { ShopServiceManagementModule } from 'src/app/component/shop/shop-service-management/shop-service-management.module';
import { ShopExtraManagementModule } from 'src/app/component/shop/shop-extra-management/shop-extra-management.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopServiceManagementPageRoutingModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    SharedFormModule,
    ShopServiceManagementModule,
    ShopExtraManagementModule,
  ],
  declarations: [ShopServiceManagementPage],
})
export class ShopServiceManagementPageModule {}
