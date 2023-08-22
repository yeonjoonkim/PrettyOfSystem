import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../../pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { YesNoSelectionModule } from 'src/app/component/global/form/yes-no-selection/yes-no-selection.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SystemPlanListModule } from '../plan-list/plan-list.module';
import { SystemPlanModule } from '../plan/plan.module';
//Import Component
import { PlanManagementComponent } from './plan-management.component';

@NgModule({
  declarations: [PlanManagementComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    YesNoSelectionModule,
    KendoUiModule,
    SystemPlanListModule,
    SystemPlanModule,
  ],
  exports: [PlanManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SystemPlanManagementModule {}
