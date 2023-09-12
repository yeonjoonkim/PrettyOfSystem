import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';

import { NamePairValueSingleSelectionModule } from '../name-pair-value-dropdown-single-selection/name-pair-value-dropdown-single-selection.module';
import { DatePeriodPickerComponent } from './date-period-picker.component';
@NgModule({
  declarations: [DatePeriodPickerComponent],
  imports: [
    CommonModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    FormsModule,
    NamePairValueSingleSelectionModule,
  ],
  exports: [DatePeriodPickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DatePeriodPickerModule {}
