
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,NgModule} from '@angular/core';
//Import Pipe
import { UiLanguagePipeModule } from '../../../shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Import Component
import { RouteManagementComponent } from './route-management.component';

@NgModule({
  declarations: [RouteManagementComponent],
  exports: [RouteManagementComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    IonicModule,
    UiLanguagePipeModule,
    Ng2SearchPipeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class RouteManagementModule { }
