import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';

import { SignatureTransferSenderComponent } from './signature-transfer-sender.component';
import { SignatureTransferUploadPhotoModule } from '../signature-transfer-upload-photo/signature-transfer-upload.component.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KendoUiModule,
    SharedFormModule,
    LanguageTransformPipeModule,
    SignatureTransferUploadPhotoModule,
  ],
  declarations: [SignatureTransferSenderComponent],
  exports: [SignatureTransferSenderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SignatureTransferSenderMoudle {}
