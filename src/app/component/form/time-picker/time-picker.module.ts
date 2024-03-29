//Import Ionic Angular Module
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
//Import Component
import { TimePickerComponent } from './time-picker.component';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';
import { TimeItemTransformPipeModule } from 'src/app/pipe/time-item/time-item.pipe.module';
import { TimeSelectionPopoverComponent } from './time-selection-popover/time-selection-popover.component';

@NgModule({
  declarations: [TimePickerComponent, TimeSelectionPopoverComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    TimeItemTransformPipeModule,
  ],
  exports: [TimePickerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class TimePickerModule {}
