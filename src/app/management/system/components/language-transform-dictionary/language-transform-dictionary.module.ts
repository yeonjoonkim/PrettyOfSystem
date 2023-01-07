import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,NgModule} from '@angular/core';


//Import Pipe
import { LanguageTransformPipeModule } from '../../../../shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Import Component
import { AddLanguageTransformComponent } from './add-language-transform/add-language-transform.component';
import { LanguageTransformDictionaryComponent } from './language-transform-dictionary/language-transform-dictionary.component';
import { LanguageKeyPairSelectOptionComponent } from './language-key-pair-select-option/language-key-pair-select-option.component';

@NgModule({
  declarations: [AddLanguageTransformComponent, LanguageTransformDictionaryComponent, LanguageKeyPairSelectOptionComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    Ng2SearchPipeModule
  ],
  exports: [AddLanguageTransformComponent, LanguageTransformDictionaryComponent, LanguageKeyPairSelectOptionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class LanguageTransformDictionaryModule { }
