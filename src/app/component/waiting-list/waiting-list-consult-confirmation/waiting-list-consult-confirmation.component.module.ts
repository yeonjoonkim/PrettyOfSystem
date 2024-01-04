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
import { WaitingListConsultConfirmationComponent } from './waiting-list-consult-confirmation.component';
import { CartCheckoutListModule } from '../../cart/cart-check-out-list/cart-check-out-list.module';
import { DatePipeModule } from 'src/app/pipe/date/date.pipe.module';
import { DaysTransformPipeModule } from 'src/app/pipe/days/days.pipe.module';
import { WaitingListParentConfirmationComponent } from './waiting-list-parent-confirmation/waiting-list-parent-confirmation.component';
import { WaitingListConsultPrivateInsuranceRequestComponent } from './waiting-list-consult-private-insurance-request/waiting-list-consult-private-insurance-request.component';
import { CurrencyPipeTransformModule } from 'src/app/pipe/currency/currency.pipe.module';
import { ShopAgreementModule } from '../../agreement/shop/shop-agreement/shop-agreement.component.module';
import { WaitingListConsultAgreementComponent } from './waiting-list-consult-agreement/waiting-list-consult-agreement.component';
import { WaitingListStepperModule } from '../waiting-list-stepper/waiting-list-stepper.component.module';
@NgModule({
  declarations: [
    WaitingListConsultConfirmationComponent,
    WaitingListParentConfirmationComponent,
    WaitingListConsultPrivateInsuranceRequestComponent,
    WaitingListConsultAgreementComponent,
  ],
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
    CartCheckoutListModule,
    DatePipeModule,
    DaysTransformPipeModule,
    CurrencyPipeTransformModule,
    ShopAgreementModule,
    WaitingListStepperModule,
  ],
  exports: [WaitingListConsultConfirmationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class WaitingListConsultConfirmationModule {}
