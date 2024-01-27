import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignatureTransferPageRoutingModule } from './signature-transfer-routing.module';

import { SignatureTransferPage } from './signature-transfer.page';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { SignatureTransferUploadPhotoModule } from 'src/app/component/signature-transfer/signature-transfer-upload-photo/signature-transfer-upload.component.module';
import { SignatureTransferSenderMoudle } from 'src/app/component/signature-transfer/signature-transfer-sender/signature-transfer-sender.component.module';
import { ShopAgreementModule } from 'src/app/component/agreement/shop/shop-agreement/shop-agreement.component.module';
import { BookingLanguageSelectionModule } from 'src/app/component/booking/booking/booking-header/booking-language/booking-language-selection.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KendoUiModule,
    SharedFormModule,
    LanguageTransformPipeModule,
    SignatureTransferUploadPhotoModule,
    SignatureTransferSenderMoudle,
    SignatureTransferPageRoutingModule,
    ShopAgreementModule,
    BookingLanguageSelectionModule,
  ],
  declarations: [SignatureTransferPage],
  exports: [SignatureTransferPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SignatureTransferPageModule {}
