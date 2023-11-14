import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';

import { PriceListPageRoutingModule } from './price-list-routing.module';
import { PriceListPage } from './price-list.page';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriceListPageRoutingModule,
    KendoUiModule,
    SharedFormModule,
    LanguageTransformPipeModule,
  ],
  declarations: [PriceListPage],
})
export class PriceListPageModule {}
