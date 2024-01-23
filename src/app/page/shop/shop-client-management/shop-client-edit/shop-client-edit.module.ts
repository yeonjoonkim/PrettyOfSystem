import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopClientEditPageRoutingModule } from './shop-client-edit-routing.module';

import { ShopClientEditPage } from './shop-client-edit.page';

import { ShopClientEditorModule } from 'src/app/component/shop/shop-client-management/shop-client-editor/shop-client-editor.module';
import { LanguageTransformPipeModule } from '../../../../pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopClientEditPageRoutingModule,
    ShopClientEditorModule,
    LanguageTransformPipeModule,
    KendoUiModule,
  ],
  declarations: [ShopClientEditPage],
})
export class ShopClientEditPageModule {}
