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
import { UserInformationComponent } from './user-information.component';
import { GenderSelectionModule } from '../gender-selection/gender-selection.module';
import { LoginOptionSelectionModule } from '../login-option-selection/login-option-selection.module';
import { LanguageSelectionModule } from '../../global/langauge-selection/language-selection.module';

import { UserInfoComponent } from './user-info/user-info.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserMedicalHistoryComponent } from './user-medical-history/user-medical-history.component';
import { UserPrivateInsuranceComponent } from './user-private-insurance/user-private-insurance.component';
import { MedicalHistoryListModule } from '../../medical/medical-histroy-list/medical-history-list.module';
import { UserMedicalOtherConditionComponent } from './user-medical-other-condition/user-medical-other-condition.component';
import { UserSignatureComponent } from './user-signature/user-signature.component';

@NgModule({
  declarations: [
    UserInformationComponent,
    UserInfoComponent,
    UserAddressComponent,
    UserMedicalHistoryComponent,
    UserPrivateInsuranceComponent,
    UserMedicalOtherConditionComponent,
    UserSignatureComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    GenderSelectionModule,
    LoginOptionSelectionModule,
    LanguageSelectionModule,
    MedicalHistoryListModule,
    MedicalHsitoryOtherStatusPipeModule,
  ],
  exports: [UserInformationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UserInformationModule {}
