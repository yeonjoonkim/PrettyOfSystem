import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,NgModule} from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { KendoUiModule } from 'src/app/shared/kendo-ui-module/kendo-ui-module.module';

import { DatePeriodPickerComponent } from './date-period-picker.component';
@NgModule({
  declarations: [DatePeriodPickerComponent],
  imports: [
    CommonModule,
    LanguageTransformPipeModule,
    Ng2SearchPipeModule,
    KendoUiModule,
    FormsModule
  ],
  exports: [DatePeriodPickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DatePeriodPickerModule { }
