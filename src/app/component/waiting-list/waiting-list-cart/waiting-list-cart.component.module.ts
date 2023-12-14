import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { ExtraPriceListCardModule } from '../../card/price-list-card/extra-price-list-card/extra-price-list-card.module';
import { CouponPriceListCardModule } from '../../card/price-list-card/coupon-price-list-card/coupon-price-list-card.module';
import { ServicePriceListCardModule } from '../../card/price-list-card/service-price-list-card/service-price-list-card.module';
import { PackagePriceListCardModule } from '../../card/price-list-card/package-price-list-card/package-price-list-card.module';
import { WaitingListCartComponent } from './waiting-list-cart.component';

@NgModule({
  declarations: [WaitingListCartComponent],
  imports: [
    CommonModule,
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    ExtraPriceListCardModule,
    CouponPriceListCardModule,
    PackagePriceListCardModule,
    ServicePriceListCardModule,
  ],
  exports: [WaitingListCartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class WaitingListCartModule {}
