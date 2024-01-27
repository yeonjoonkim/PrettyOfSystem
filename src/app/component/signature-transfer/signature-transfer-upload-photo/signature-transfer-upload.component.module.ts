import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { SignatureTransferUploadPhotoComponent } from './signature-transfer-upload-photo.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, KendoUiModule, SharedFormModule, LanguageTransformPipeModule],
  declarations: [SignatureTransferUploadPhotoComponent],
  exports: [SignatureTransferUploadPhotoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SignatureTransferUploadPhotoModule {}
