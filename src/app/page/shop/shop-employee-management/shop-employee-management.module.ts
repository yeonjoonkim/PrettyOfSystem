import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';

import { ShopEmployeeManagementPageRoutingModule } from './shop-employee-management-routing.module';

import { ShopEmployeeManagementPage } from './shop-employee-management.page';
import { ShopEmployeeManagementModule } from 'src/app/component/shop/shop-employee-management/shop-employee-management.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    ShopEmployeeManagementModule,
    ShopEmployeeManagementPageRoutingModule,
  ],
  declarations: [ShopEmployeeManagementPage],
})
export class ShopEmployeeManagementPageModule {}
