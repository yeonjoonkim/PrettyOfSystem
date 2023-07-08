import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,NgModule} from '@angular/core';
import { PhoneNumberModule } from './phone-number/phone-number.module';
import { YesNoSelectionModule } from './yes-no-selection/yes-no-selection.module';
import { FormHeaderModule } from './form-header/form-header.module';
import { PercentageModule } from './percentage/percentage.module';
import { TextBoxModule } from './text-box/text-box.module';
import {AddressModule} from './address/address.module';
import { TimePickerModule } from './time-picker/time-picker.module';
import { TimeFromToModule } from './time-from-to/time-from-to.module';
import { EmailModule } from './email/email.module';
import {DatePickerModule} from './date-picker/email.module';
@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    PhoneNumberModule,
    YesNoSelectionModule,
    FormHeaderModule,
    PercentageModule,
    EmailModule,
    TextBoxModule,
    AddressModule,
    TimePickerModule,
    TimeFromToModule,
    DatePickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedFormModule { }
