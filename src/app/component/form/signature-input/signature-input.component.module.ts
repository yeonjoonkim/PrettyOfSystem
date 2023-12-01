//Import Ionic Angular Module
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Component
import { SignatureInputComponent } from './signature-input.component';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';
@NgModule({
  declarations: [SignatureInputComponent],
  imports: [CommonModule, IonicModule, FormsModule, LanguageTransformPipeModule, KendoUiModule],
  exports: [SignatureInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SignatureInputModule {}
