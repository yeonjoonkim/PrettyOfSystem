import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../../pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { YesNoSelectionModule } from 'src/app/component/global/form/yes-no-selection/yes-no-selection.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';

//Import Component
import { PlanComponent } from './plan.component';

@NgModule({
  declarations: [PlanComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    YesNoSelectionModule,
    KendoUiModule,
  ],
  exports: [PlanComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SystemPlanModule {}
