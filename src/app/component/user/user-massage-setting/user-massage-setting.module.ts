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
import { MassagePressureLevelSelectorModule } from '../../massage/massage-pressure-level-selector/massage-pressure-level-selector.module';
import { MassageBodyFrontSelectorModule } from '../../massage/massage-body-front-selector/massage-body-front-selector.module';
import { MassageBodyBackSelectorModule } from '../../massage/massage-body-back-selector/massage-body-back-selector.module';
import { DesktopVersionBodySelectorModule } from '../../massage/desktop-version-body-selector/desktop-version-body-selector.module';
import { MobileVersionBodySelectorModule } from '../../massage/mobile-version-body-selector/mobile-version-body-selector.module';
import { ClientMassageBodySummaryModule } from '../../massage/client-massage-body-summary/client-massage-body-summary.module';
//Import Component
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
    MassageBodyBackSelectorModule,
    DesktopVersionBodySelectorModule,
    MobileVersionBodySelectorModule,
    ClientMassageBodySummaryModule,
  ],
  exports: [UserMassageSettingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UserMassageSettingModule {}
