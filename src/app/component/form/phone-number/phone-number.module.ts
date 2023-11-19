import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input-gg';

import { PhoneNumberComponent } from './phone-number.component';

@NgModule({
  declarations: [PhoneNumberComponent],
  imports: [CommonModule, LanguageTransformPipeModule, KendoUiModule, FormsModule, NgxIntlTelInputModule],
  exports: [PhoneNumberComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class PhoneNumberModule {}
