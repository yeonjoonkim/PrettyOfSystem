import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { NgxDialerInputModule } from 'ngx-dialer-input';

import { PhoneNumberComponent } from './phone-number.component';

@NgModule({
  declarations: [PhoneNumberComponent],
  imports: [CommonModule, LanguageTransformPipeModule, KendoUiModule, FormsModule, NgxDialerInputModule],
  exports: [PhoneNumberComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class PhoneNumberModule {}
