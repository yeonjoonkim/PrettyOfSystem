import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';

import { ActionButtonHeaderComponent } from './action-button-header.component';
@NgModule({
  declarations: [ActionButtonHeaderComponent],
  imports: [CommonModule, LanguageTransformPipeModule, KendoUiModule, FormsModule],
  exports: [ActionButtonHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ActionButtonHeaderModule {}
