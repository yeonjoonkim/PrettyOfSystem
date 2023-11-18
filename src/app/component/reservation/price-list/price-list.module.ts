import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { DatePipeModule } from 'src/app/pipe/date/date.pipe.module';

//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';
import { ExtraPriceListCardModule } from '../../card/price-list-card/extra-price-list-card/extra-price-list-card.module';
import { CouponPriceListCardModule } from '../../card/price-list-card/coupon-price-list-card/coupon-price-list-card.module';
import { ServicePriceListCardModule } from '../../card/price-list-card/service-price-list-card/service-price-list-card.module';
import { PackagePriceListCardModule } from '../../card/price-list-card/package-price-list-card/package-price-list-card.module';

//Import Component
import { PriceListComponent } from './price-list.component';
import { CouponPriceListComponent } from './coupon-price-list/coupon-price-list.component';
import { PackagePriceListComponent } from './package-price-list/package-price-list.component';
import { ServicePriceListComponent } from './service-price-list/service-price-list.component';
import { ExtraPriceListComponent } from './extra-price-list/extra-price-list.component';

@NgModule({
  declarations: [
    PriceListComponent,
    CouponPriceListComponent,
    PackagePriceListComponent,
    ServicePriceListComponent,
    ExtraPriceListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    DatePipeModule,
    ExtraPriceListCardModule,
    CouponPriceListCardModule,
    ServicePriceListCardModule,
    PackagePriceListCardModule,
  ],
  exports: [PriceListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class PriceListModule {}
