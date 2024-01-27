import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../../global/kendo-ui-module/kendo-ui-module.module';
import { ShopLanguagePackageModule } from '../../shop-language-package/shop-language-package.module';
import { ShopLimitedProgressModule } from '../../shop-limited-progressbar/shop-limited-progressbar.module.ts';
import { DaysTransformPipeModule } from 'src/app/pipe/days/days.pipe.module';
import { CurrencyPipeTransformModule } from 'src/app/pipe/currency/currency.pipe.module';
import { MintueTransformPipeModule } from 'src/app/pipe/mintue/mintue.pipe.module';
import { PercentTransformPipeModule } from 'src/app/pipe/percent/percent-transform.pipe.module';
import { GenderSelectionModule } from '../../../user/gender-selection/gender-selection.module';
import { DatePipeModule } from 'src/app/pipe/date/date.pipe.module';
import { LanguageSelectionModule } from 'src/app/component/global/langauge-selection/language-selection.module';
import { MedicalHistoryListModule } from 'src/app/component/medical/medical-histroy-list/medical-history-list.module';
import { MedicalHistoryChipModule } from 'src/app/component/medical/medical-histroy-chip/medical-history-chip.module';
import { ShopAgreementModule } from 'src/app/component/agreement/shop/shop-agreement/shop-agreement.component.module';
import { MedicalHsitoryOtherStatusPipeModule } from 'src/app/pipe/medical-history-other-status/medical-history-other-status.pipe.module';
import { MassagePressureLevelSelectorModule } from '../../../massage/massage-pressure-level-selector/massage-pressure-level-selector.module';
import { MassageBodyFrontSelectorModule } from '../../../massage/massage-body-front-selector/massage-body-front-selector.module';
import { MassageBodyBackSelectorModule } from '../../../massage/massage-body-back-selector/massage-body-back-selector.module';
import { DesktopVersionBodySelectorModule } from '../../../massage/desktop-version-body-selector/desktop-version-body-selector.module';
import { MobileVersionBodySelectorModule } from '../../../massage/mobile-version-body-selector/mobile-version-body-selector.module';
import { ClientMassageBodySummaryModule } from '../../../massage/client-massage-body-summary/client-massage-body-summary.module';
import { MassageDifficultChangePositionModule } from '../../../massage/massage-difficult-change-position/massage-difficult-change-position.module';
//Import Component
import { ShopClientEditorComponent } from './shop-client-editor.component';
import { ClientInfoEditorComponent } from './client-info-editor/client-info-editor.component';
import { ClientMedicalEditorComponent } from './client-medical-editor/client-medical-editor.component';
import { ClientConsentEditorComponent } from './client-consent-editor/client-consent-editor.component';
import { ClientMassagePreferenceEditorComponent } from './client-massage-preference-editor/client-massage-preference-editor.component';
import { SignatureTransferReceiverModule } from 'src/app/component/signature-transfer/signature-transfer-receiver/signature-transfer-receiver.component.module';
import { SignatureTransferUploadPhotoModule } from 'src/app/component/signature-transfer/signature-transfer-upload-photo/signature-transfer-upload.component.module';
import { AppPrivacyPolicyModule } from 'src/app/component/agreement/app/app-privacy-policy/app-privacy-policy.module';
import { AppTermsAndConditionModule } from 'src/app/component/agreement/app/app-terms-and-conditions/app-terms-and-condition.module';
@NgModule({
  declarations: [
    ShopClientEditorComponent,
    ClientInfoEditorComponent,
    ClientMedicalEditorComponent,
    ClientConsentEditorComponent,
    ClientMassagePreferenceEditorComponent,
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
    LanguageSelectionModule,
    MedicalHistoryListModule,
    MedicalHistoryChipModule,
    ShopAgreementModule,
    MedicalHsitoryOtherStatusPipeModule,
    MassagePressureLevelSelectorModule,
    MassageBodyFrontSelectorModule,
    MassageBodyBackSelectorModule,
    DesktopVersionBodySelectorModule,
    MobileVersionBodySelectorModule,
    ClientMassageBodySummaryModule,
    MassageDifficultChangePositionModule,
    SignatureTransferReceiverModule,
    SignatureTransferUploadPhotoModule,
    AppTermsAndConditionModule,
    AppPrivacyPolicyModule,
  ],
  exports: [ShopClientEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopClientEditorModule {}
