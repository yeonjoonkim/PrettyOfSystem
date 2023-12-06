import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { MedicalHsitoryOtherStatusPipeModule } from 'src/app/pipe/medical-history-other-status/medical-history-other-status.pipe.module';
//Import Module
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';

//Import Component
import { MassagePressureLevelSelectorModule } from '../../massage/massage-pressure-level-selector/massage-pressure-level-selector.module';
import { MassageBodyFrontSelectorModule } from '../../massage/massage-body-front-selector/massage-pressure-level-selector.module';
import { UserMassageSettingComponent } from './user-massage-setting.component';
@NgModule({
  declarations: [UserMassageSettingComponent],
  imports: [
    CommonModule,
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    MedicalHsitoryOtherStatusPipeModule,
    MassagePressureLevelSelectorModule,
    MassageBodyFrontSelectorModule,
  ],
  exports: [UserMassageSettingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UserMassageSettingModule {}
