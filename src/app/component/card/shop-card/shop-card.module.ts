import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { CurrencyPipeTransformModule } from 'src/app/pipe/currency/currency.pipe.module';
import { MintueTransformPipeModule } from 'src/app/pipe/mintue/mintue.pipe.module';
import { TimeItemTransformPipeModule } from 'src/app/pipe/time-item/time-item.pipe.module';
//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';

//Import Component
import { ShopCardComponent } from './shop-card.component';

import { register } from 'swiper/element/bundle';
register();
@NgModule({
  declarations: [ShopCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    CurrencyPipeTransformModule,
    MintueTransformPipeModule,
    KendoUiModule,
    TimeItemTransformPipeModule,
  ],
  exports: [ShopCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopCardModule {}
