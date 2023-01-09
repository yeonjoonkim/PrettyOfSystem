


//Import Ionic Angular Module
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,NgModule} from '@angular/core';

//Import System Page
import { SystemPageRoutingModule } from './system-routing.module';
import { SystemPage } from './system.page';

//Import Pipe
import { LanguageTransformPipeModule } from './../../shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { LanguageTransformDictionaryModule } from './components/language-transform-dictionary/language-transform-dictionary.module';
import { LanguageManagementModule } from './components/language-management/language-management.module';
import { SystemMenuModule } from './components/system-menu/system-menu.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemPageRoutingModule,
    Ng2SearchPipeModule,
    LanguageTransformPipeModule,
    LanguageTransformDictionaryModule,
    LanguageManagementModule,
    SystemMenuModule
  ],
  declarations: [SystemPage],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SystemPageModule {}
