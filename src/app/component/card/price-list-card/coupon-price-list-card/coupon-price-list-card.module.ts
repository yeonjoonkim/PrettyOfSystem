import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { DatePipeModule } from 'src/app/pipe/date/date.pipe.module';
import { DaysTransformPipeModule } from 'src/app/pipe/days/days.pipe.module';
import { CurrencyPipeTransformModule } from 'src/app/pipe/currency/currency.pipe.module';
import { MintueTransformPipeModule } from 'src/app/pipe/mintue/mintue.pipe.module';
import { PercentTransformPipeModule } from 'src/app/pipe/percent/percent-transform.pipe.module';

//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../../global/kendo-ui-module/kendo-ui-module.module';
import { PriceCardTooltipModule } from '../price-card-tooltip/price-card-tooltip.module';

import { CouponPriceListCardComponent } from './coupon-price-list-card.component';

@NgModule({
  declarations: [CouponPriceListCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    PriceCardTooltipModule,
    KendoUiModule,
    DatePipeModule,
    DaysTransformPipeModule,
    CurrencyPipeTransformModule,
    PercentTransformPipeModule,
    MintueTransformPipeModule,
  ],
  exports: [CouponPriceListCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CouponPriceListCardModule {}
