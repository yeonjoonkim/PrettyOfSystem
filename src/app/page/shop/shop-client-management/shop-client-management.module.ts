import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopClientManagementPageRoutingModule } from './shop-client-management-routing.module';

import { ShopClientManagementPage } from './shop-client-management.page';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { ShopClientManagementModule } from 'src/app/component/shop/shop-client-management/shop-client-management.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    SharedFormModule,
    IonicModule,
    ShopClientManagementPageRoutingModule,
    ShopClientManagementModule,
  ],
  declarations: [ShopClientManagementPage],
})
export class ShopClientManagementPageModule {}
