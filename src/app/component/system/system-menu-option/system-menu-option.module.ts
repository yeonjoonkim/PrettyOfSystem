import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,NgModule} from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LanguageTransformDictionaryModule } from '../language/language-transform-dictionary/language-transform-dictionary.module';

//Import Module
import { KendoUiModule } from 'src/app/shared/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/shared/components/form/form.module';

//Import Component
import { SystemMenuOptionComponent } from './system-menu-option.component';

@NgModule({
  declarations: [
    SystemMenuOptionComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    Ng2SearchPipeModule,
    SharedFormModule,
    KendoUiModule,
    LanguageTransformDictionaryModule
  ],
  exports: [SystemMenuOptionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SystemMenuOptionModule { }
