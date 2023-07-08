import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,NgModule} from '@angular/core';


//Import Pipe
import { LanguageTransformPipeModule } from '../../../../shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Import Module
import { IonicIconSelectionModule } from 'src/app/shared/components/ionic-icon-selection/ionic-icon-selection.module';
import { YesNoSelectionModule } from 'src/app/shared/components/form/yes-no-selection/yes-no-selection.module';
import { KendoUiModule } from 'src/app/shared/kendo-ui-module/kendo-ui-module.module';
import { SystemPlanListModule } from '../plan-list/plan-list.module';
import { SystemPlanModule } from '../plan/plan.module';
//Import Component
import { PlanManagementComponent } from './plan-management.component';

@NgModule({
  declarations: [
    PlanManagementComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    Ng2SearchPipeModule,
    IonicIconSelectionModule,
    YesNoSelectionModule,
    KendoUiModule,
    SystemPlanListModule,
    SystemPlanModule
  ],
  exports: [PlanManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SystemPlanManagementModule { }


