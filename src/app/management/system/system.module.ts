

//Import Ionic Angular Module
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,NgModule} from '@angular/core';

//Import System Page
import { SystemPageRoutingModule } from './system-routing.module';
import { SystemPage } from './system.page';

//Import Pipe
import { UiLanguagePipeModule } from './../../shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemPageRoutingModule,
    Ng2SearchPipeModule,
    UiLanguagePipeModule
  ],
  declarations: [SystemPage],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SystemPageModule {}
