import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { PhoneNumberModule } from './phone-number/phone-number.module';
import { YesNoSelectionModule } from './yes-no-selection/yes-no-selection.module';
import { FormHeaderModule } from './form-header/form-header.module';
import { PercentageModule } from './percentage/percentage.module';
import { TextBoxModule } from './text-box/text-box.module';
import { AddressModule } from './address/address.module';
import { TimeFromToModule } from './time-from-to/time-from-to.module';
import { EmailModule } from './email/email.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { TimePickerModule } from './time-picker/time-picker.module';
import { TimeZoneModule } from './time-zone/time-zone.module';
import { DatePeriodPickerModule } from './date-period-picker/date-period-picker.module';
import { NameValuePairSingleDropdownSelectionModule } from './name-value-pair-single-dropdown-selection/name-value-pair-single-dropdown-selection.module';
import { NameValuePairMultiSelectionModule } from './name-value-pair-multi-dropdown-selection/name-value-pair-multi-dropdown-selection.module';
import { PasswordConfirmationModule } from './password-confirmation/password-confirmation.module';
import { AppTermsAndConditionModule } from '../agreement/app/app-terms-and-conditions/app-terms-and-condition.module';
import { AppPrivacyPolicyModule } from '../agreement/app/app-privacy-policy/app-privacy-policy.module';
import { TextAreaModule } from './text-area/text-area.module';
@NgModule({
  declarations: [],
  imports: [],
  exports: [
    PhoneNumberModule,
    YesNoSelectionModule,
    FormHeaderModule,
    PercentageModule,
    EmailModule,
    TextBoxModule,
    AddressModule,
    TimePickerModule,
    TimeFromToModule,
    DatePickerModule,
    TimeZoneModule,
    DatePeriodPickerModule,
    NameValuePairSingleDropdownSelectionModule,
    NameValuePairMultiSelectionModule,
    PasswordConfirmationModule,
    AppTermsAndConditionModule,
    AppPrivacyPolicyModule,
    TextAreaModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedFormModule {}
