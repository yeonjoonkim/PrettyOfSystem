import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';

import { AppTermsAndConditionsComponent } from './app-terms-and-conditions.component';
import { FormHeaderModule } from 'src/app/component/form/form-header/form-header.module';
@NgModule({
  declarations: [AppTermsAndConditionsComponent],
  imports: [
    CommonModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    FormsModule,
    FormHeaderModule,
  ],
  exports: [AppTermsAndConditionsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppTermsAndConditionModule {}
