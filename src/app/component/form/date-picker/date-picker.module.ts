import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { DatePickerComponent } from './date-picker.component';
import { DateSelectionPopoverComponent } from './date-selection-popover/date-selection-popover.component';
import { DatePipeModule } from 'src/app/pipe/date/date.pipe.module';
import { DayTransformPipeModule } from 'src/app/pipe/day/day.pipe.module';
@NgModule({
  declarations: [DatePickerComponent, DateSelectionPopoverComponent],
  imports: [
    CommonModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    FormsModule,
    DatePipeModule,
    DayTransformPipeModule,
  ],
  exports: [DatePickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DatePickerModule {}
