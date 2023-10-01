import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { TextBoxModule } from 'src/app/component/form/text-box/text-box.module';
import { BookingLanguageSelectionComponent } from './booking-language-selection.component';
import { BookingLanguageDropDownListComponent } from './booking-language-dropdown-list/booking-language-dropdown-list.component';
@NgModule({
  declarations: [BookingLanguageSelectionComponent, BookingLanguageDropDownListComponent],
  imports: [CommonModule, LanguageTransformPipeModule, KendoUiModule, FormsModule, TextBoxModule],
  exports: [BookingLanguageSelectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class BookingLanguageSelectionModule {}
