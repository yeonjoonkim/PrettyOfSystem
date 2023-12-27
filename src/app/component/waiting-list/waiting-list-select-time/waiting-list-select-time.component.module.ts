import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { DatePipeModule } from 'src/app/pipe/date/date.pipe.module';

//Import Module
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { EmployeeSelectionButtonModule } from '../../button/employee-selection-button/employee-selection-button.component.module';
import { WaitingListSelectTimeComponent } from './waiting-list-select-time.component';
import { TimeSelectionButtonModule } from '../../button/time-selection-button/time-selection-button.component.module';
@NgModule({
  declarations: [WaitingListSelectTimeComponent],
  imports: [
    CommonModule,
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    EmployeeSelectionButtonModule,
    TimeSelectionButtonModule,
    DatePipeModule,
  ],
  exports: [WaitingListSelectTimeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class WaitingListSelectTimeModule {}
