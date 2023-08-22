import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../../pipe/language-transform-pipe/language-transform.pipe.module';

import { DictonaryComponent } from './dictonary.component';
import { AddLanguageTransformComponent } from './add-language-transform/add-language-transform.component';
import { LanguageKeyPairSelectOptionComponent } from './language-key-pair-select-option/language-key-pair-select-option.component';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/global/form/form.module';

@NgModule({
  declarations: [
    DictonaryComponent,
    AddLanguageTransformComponent,
    LanguageKeyPairSelectOptionComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    SharedFormModule,
    ReactiveFormsModule,
  ],
  exports: [
    DictonaryComponent,
    AddLanguageTransformComponent,
    LanguageKeyPairSelectOptionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DictionaryModule {}
