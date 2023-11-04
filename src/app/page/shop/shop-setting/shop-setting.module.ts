import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopSettingPageRoutingModule } from './shop-setting-routing.module';

import { ShopSettingPage } from './shop-setting.page';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { ShopSettingCompnentModule } from 'src/app/component/shop/shop-setting/shop-setting.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopSettingPageRoutingModule,
    KendoUiModule,
    SharedFormModule,
    LanguageTransformPipeModule,
    ShopSettingCompnentModule,
  ],
  declarations: [ShopSettingPage],
})
export class ShopSettingPageModule {}
