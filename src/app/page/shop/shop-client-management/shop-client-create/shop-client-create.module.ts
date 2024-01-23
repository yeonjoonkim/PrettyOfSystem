import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopClientCreatePageRoutingModule } from './shop-client-create-routing.module';

import { ShopClientCreatePage } from './shop-client-create.page';

import { ShopClientEditorModule } from 'src/app/component/shop/shop-client-management/shop-client-editor/shop-client-editor.module';
import { LanguageTransformPipeModule } from '../../../../pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopClientCreatePageRoutingModule,
    ShopClientEditorModule,
    LanguageTransformPipeModule,
    KendoUiModule,
  ],
  declarations: [ShopClientCreatePage],
})
export class ShopClientCreatePageModule {}
