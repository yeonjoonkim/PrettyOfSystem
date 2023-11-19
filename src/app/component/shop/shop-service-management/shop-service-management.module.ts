import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { CurrencyPipeTransformModule } from 'src/app/pipe/currency/currency.pipe.module';
import { DaysTransformPipeModule } from 'src/app/pipe/days/days.pipe.module';
import { MintueTransformPipeModule } from 'src/app/pipe/mintue/mintue.pipe.module';
import { PercentTransformPipeModule } from 'src/app/pipe/percent/percent-transform.pipe.module';

//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';
import { ShopLimitedProgressModule } from '../shop-limited-progressbar/shop-limited-progressbar.module.ts';

//Import Component
import { ShopServiceManagementComponent } from './shop-service-management.component';
import { ShopServiceGridComponent } from './shop-service-grid/shop-service-grid.component';
import { ShopServiceComponent } from './shop-service/shop-service.component';
import { ShopLanguagePackageModule } from '../shop-language-package/shop-language-package.module';
import { ShopPackageServicePopoverComponent } from '../shop-package-management/shop-package-service-popover/shop-package-service-popover.component';
import { ShopServiceOptionPopoverComponent } from './shop-service-option-popover/shop-service-option-popover.component';
@NgModule({
  declarations: [
    ShopServiceManagementComponent,
    ShopServiceGridComponent,
    ShopServiceComponent,
    ShopPackageServicePopoverComponent,
    ShopServiceOptionPopoverComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    ShopLanguagePackageModule,
    ShopLimitedProgressModule,
    DaysTransformPipeModule,
    CurrencyPipeTransformModule,
    MintueTransformPipeModule,
    PercentTransformPipeModule,
  ],
  exports: [ShopServiceManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopServiceManagementModule {}
