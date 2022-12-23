import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ShopPageRoutingModule } from './shop-routing.module';
import { ShopPage } from './shop.page';

//import Pipe
import { UiLanguagePipeModule } from '../../shared/pipes/language-transform-pipe/language-transform.pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopPageRoutingModule,
    UiLanguagePipeModule
  ],
  declarations: [ShopPage]
})
export class ShopPageModule {}
