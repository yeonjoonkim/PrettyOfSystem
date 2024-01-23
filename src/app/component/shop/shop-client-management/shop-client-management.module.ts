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
import { GenderSelectionModule } from '../../user/gender-selection/gender-selection.module';
import { DatePipeModule } from 'src/app/pipe/date/date.pipe.module';
import { PhoneNumberPipeModule } from 'src/app/pipe/phone-number/phone-number.pipe.module';
//Import Component
import { ShopClientManagementComponent } from './shop-client-management.component';
import { ShopClientGridComponent } from './shop-client-grid/shop-client-grid.component';
import { ShopClientFilterComponent } from './shop-client-filter/shop-client-filter.component';
import { ShopVerifyNewClientPhoneNumberPopoverComponent } from './shop-verify-new-client-phone-number-popover/shop-verify-new-client-phone-number-popover.component';
import { GenderIconNamePipeMoudle } from 'src/app/pipe/gender-icon-name/gender-icon.pipe.module';
@NgModule({
  declarations: [
    ShopClientManagementComponent,
    ShopClientGridComponent,
    ShopClientFilterComponent,
    ShopVerifyNewClientPhoneNumberPopoverComponent,
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
    PercentTransformPipeModule,
    MintueTransformPipeModule,
    CurrencyPipeTransformModule,
    DaysTransformPipeModule,
    DatePipeModule,
    GenderSelectionModule,
    PhoneNumberPipeModule,
    GenderIconNamePipeMoudle,
  ],
  exports: [ShopClientManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopClientManagementModule {}
