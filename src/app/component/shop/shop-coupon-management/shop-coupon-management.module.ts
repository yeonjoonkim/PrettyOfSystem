import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';
import { ShopLanguagePackageModule } from '../shop-language-package/shop-language-package.module';
import { ShopLimitedProgressModule } from '../shop-limited-progressbar/shop-limited-progressbar.module.ts';
import { DaysTransformPipeModule } from 'src/app/pipe/days/days.pipe.module';
import { CurrencyPipeTransformModule } from 'src/app/pipe/currency/currency.pipe.module';
import { MintueTransformPipeModule } from 'src/app/pipe/mintue/mintue.pipe.module';
import { PercentTransformPipeModule } from 'src/app/pipe/percent/percent-transform.pipe.module';

//Import Component
import { ShopCouponManagementComponent } from './shop-coupon-management.component';
import { ShopCouponGridComponent } from './shop-coupon-grid/shop-coupon-grid.component';
import { ShopCouponComponent } from './shop-coupon/shop-coupon.component';

@NgModule({
  declarations: [ShopCouponManagementComponent, ShopCouponGridComponent, ShopCouponComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    ShopLanguagePackageModule,
    ShopLimitedProgressModule,
    PercentTransformPipeModule,
    MintueTransformPipeModule,
    CurrencyPipeTransformModule,
    DaysTransformPipeModule,
  ],
  exports: [ShopCouponManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopCouponManagementModule {}
