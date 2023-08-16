//Import Ionic Angular Module
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SystemShopPageRoutingModule } from './system-shop-routing.module';
import { SystemShopPage } from './system-shop.page';

import { LanguageTransformPipeModule } from '../../../shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { KendoUiModule } from 'src/app/shared/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/shared/components/form/form.module';
import { IonicIconSelectionModule } from 'src/app/shared/components/ionic-icon-selection/ionic-icon-selection.module';

import { SystemShopManagementModule } from '../../../component/system/shop/shop-management/shop-management.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemShopPageRoutingModule,
    KendoUiModule,
    SharedFormModule,
    IonicIconSelectionModule,
    SystemShopManagementModule,
    LanguageTransformPipeModule,
    Ng2SearchPipeModule
  ],
  declarations: [SystemShopPage]
})
export class SystemShopPageModule {}
