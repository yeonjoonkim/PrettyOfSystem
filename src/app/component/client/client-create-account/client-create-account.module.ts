import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';
import { AppPrivacyPolicyModule } from '../../agreement/app/app-privacy-policy/app-privacy-policy.module';
import { AppTermsAndConditionModule } from '../../agreement/app/app-terms-and-conditions/app-terms-and-condition.module';
//Import Component
import { ClientCreateAccountComponent } from './client-create-account.component';
import { GenderSelectionModule } from '../../user/gender-selection/gender-selection.module';
import { LanguageSelectionModule } from '../../global/langauge-selection/language-selection.module';
@NgModule({
  declarations: [ClientCreateAccountComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    AppPrivacyPolicyModule,
    AppTermsAndConditionModule,
    GenderSelectionModule,
    LanguageSelectionModule,
  ],
  exports: [ClientCreateAccountComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ClientCreateAccountModule {}
