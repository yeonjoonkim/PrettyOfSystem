//Import Ionic Angular Module
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Component
import { TimeFromToComponent } from './time-from-to.component';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';
import { TimePickerModule } from '../time-picker/time-picker.module';
@NgModule({
  declarations: [TimeFromToComponent],
  imports: [CommonModule, IonicModule, FormsModule, LanguageTransformPipeModule, KendoUiModule, TimePickerModule],
  exports: [TimeFromToComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class TimeFromToModule {}
