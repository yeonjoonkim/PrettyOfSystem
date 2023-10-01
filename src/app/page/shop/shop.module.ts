import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopPageRoutingModule } from './shop-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ShopPageRoutingModule],
})
export class ShopPageModule {}
