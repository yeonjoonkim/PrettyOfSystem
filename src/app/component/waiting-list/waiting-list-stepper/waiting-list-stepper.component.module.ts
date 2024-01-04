import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { DatePipeModule } from 'src/app/pipe/date/date.pipe.module';
import { DaysTransformPipeModule } from 'src/app/pipe/days/days.pipe.module';
import { MintueTransformPipeModule } from 'src/app/pipe/mintue/mintue.pipe.module';
//Import Module
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { EmployeeSelectionButtonModule } from '../../button/employee-selection-button/employee-selection-button.component.module';
import { TimeSelectionButtonModule } from '../../button/time-selection-button/time-selection-button.component.module';
import { WaitingListStepperComponent } from './waiting-list-stepper.component';

@NgModule({
  declarations: [WaitingListStepperComponent],
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
    DaysTransformPipeModule,
    DatePipeModule,
    MintueTransformPipeModule,
  ],
  exports: [WaitingListStepperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class WaitingListStepperModule {}
