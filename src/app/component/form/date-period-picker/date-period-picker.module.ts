import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';

import { NameValuePairSingleDropdownSelectionModule } from '../name-value-pair-single-dropdown-selection/name-value-pair-single-dropdown-selection.module';
import { DatePeriodPickerComponent } from './date-period-picker.component';
@NgModule({
  declarations: [DatePeriodPickerComponent],
  imports: [
    CommonModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    FormsModule,
    NameValuePairSingleDropdownSelectionModule,
  ],
  exports: [DatePeriodPickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DatePeriodPickerModule {}
