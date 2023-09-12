import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { TextBoxModule } from '../text-box/text-box.module';
import { NamePairValueDropdownSingleSelectionComponent } from './name-pair-value-dropdown-single-selection.component';
import { NamePairValueDropdownlistComponent } from './name-pair-value-dropdown-list/name-pair-value-dropdown-list.component';
@NgModule({
  declarations: [NamePairValueDropdownSingleSelectionComponent, NamePairValueDropdownlistComponent],
  imports: [CommonModule, LanguageTransformPipeModule, KendoUiModule, FormsModule, TextBoxModule],
  exports: [NamePairValueDropdownSingleSelectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class NamePairValueSingleSelectionModule {}
