import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { NgOtpInputModule } from 'ng-otp-input';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

import { OtpInputComponent } from './otp-input.component';

@NgModule({
  declarations: [OtpInputComponent],
  imports: [CommonModule, LanguageTransformPipeModule, KendoUiModule, FormsModule, NgOtpInputModule],
  exports: [OtpInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class OtpInputModule {}
