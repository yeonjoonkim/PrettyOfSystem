import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { DaysTransformPipeModule } from 'src/app/pipe/days/days.pipe.module';
import { CurrencyPipeTransformModule } from 'src/app/pipe/currency/currency.pipe.module';
import { MintueTransformPipeModule } from 'src/app/pipe/mintue/mintue.pipe.module';
import { PercentTransformPipeModule } from 'src/app/pipe/percent/percent-transform.pipe.module';

//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';
import { ShopLimitedProgressModule } from '../shop-limited-progressbar/shop-limited-progressbar.module.ts';

//Import Component
import { ShopPackageManagementComponent } from './shop-package-management.component';
import { ShopPackageComponent } from './shop-package/shop-package.component';
import { ShopLanguagePackageModule } from '../shop-language-package/shop-language-package.module';
import { ShopPackageGridComponent } from './shop-package-grid/shop-package-grid.component';
import { ShopPackageExtraPopoverComponent } from './shop-package-extra-popover/shop-package-extra-popover.component';

@NgModule({
  declarations: [
    ShopPackageManagementComponent,
    ShopPackageComponent,
    ShopPackageGridComponent,
    ShopPackageExtraPopoverComponent,
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
  exports: [ShopPackageManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopPackageManagementModule {}
