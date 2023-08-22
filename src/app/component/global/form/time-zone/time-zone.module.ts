//Import Ionic Angular Module
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../../pipe/language-transform-pipe/language-transform.pipe.module';

//Import Component
import { TimeZoneComponent } from './time-zone.component';
import { KendoUiModule } from '../../kendo-ui-module/kendo-ui-module.module';

@NgModule({
  declarations: [TimeZoneComponent],
  imports: [CommonModule, IonicModule, FormsModule, LanguageTransformPipeModule, KendoUiModule],
  exports: [TimeZoneComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class TimeZoneModule {}
