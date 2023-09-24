import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { TextBoxModule } from '../text-box/text-box.module';
import { NameValuePairDropdownMultiSelectionComponent } from './name-value-pair-multi-dropdown-selection.component';
import { NameValuePairMultiDropdownlistComponent } from './name-pair-value-multi-dropdown-list/name-value-pair-multi-dropdown-list.component';

@NgModule({
  declarations: [
    NameValuePairDropdownMultiSelectionComponent,
    NameValuePairMultiDropdownlistComponent,
  ],
  imports: [CommonModule, LanguageTransformPipeModule, KendoUiModule, FormsModule, TextBoxModule],
  exports: [NameValuePairDropdownMultiSelectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class NameValuePairMultiSelectionModule {}
