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
import { MenuManagementModule } from './components/menu-management/menu-management.module';
import { IonicIconSelectionModule } from 'src/app/shared/components/ionic-icon-selection/ionic-icon-selection.module';

import { SystemMenuOptionComponent } from './components/system-menu-option/system-menu-option.component';
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
    MenuManagementModule,
    IonicIconSelectionModule
  ],
  declarations: [SystemPage, SystemMenuOptionComponent],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SystemPageModule {}
