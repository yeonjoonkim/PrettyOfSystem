import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { TextBoxModule } from '../text-box/text-box.module';
import { NameValuePairSingleDropdownSelectionComponent } from './name-value-pair-single-dropdown-selection.component';
import { NameValuePairSingleDropdownlistComponent } from './name-value-pair-single-dropdown-list/name-value-pair-single-dropdown-list.component';
@NgModule({
  declarations: [NameValuePairSingleDropdownSelectionComponent, NameValuePairSingleDropdownlistComponent],
  imports: [CommonModule, LanguageTransformPipeModule, KendoUiModule, FormsModule, TextBoxModule],
  exports: [NameValuePairSingleDropdownSelectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class NameValuePairSingleDropdownSelectionModule {}
