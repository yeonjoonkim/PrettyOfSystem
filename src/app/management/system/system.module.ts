import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';

import { SystemPageRoutingModule } from './system-routing.module';
import { SystemPage } from './system.page';

//import Pipe
import { UiLanguagePipeModule } from '../../shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { KeyPairValueDictionaryComponent } from './components/key-pair-value-dictionary/key-pair-value-dictionary.component';
import { SystemManagementPopOverComponent } from './components/system-management-pop-over/system-management-pop-over.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemPageRoutingModule,
    UiLanguagePipeModule,
    Ng2SearchPipeModule,
  ],
  declarations: [SystemPage, KeyPairValueDictionaryComponent, SystemManagementPopOverComponent],
  exports: [KeyPairValueDictionaryComponent, SystemManagementPopOverComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SystemPageModule {}
