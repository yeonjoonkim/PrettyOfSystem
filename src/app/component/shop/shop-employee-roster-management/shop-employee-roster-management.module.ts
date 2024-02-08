import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { TimeItemTransformPipeModule } from 'src/app/pipe/time-item/time-item.pipe.module';
import { DatePipeModule } from 'src/app/pipe/date/date.pipe.module';
import { DaysTransformPipeModule } from 'src/app/pipe/days/days.pipe.module';
//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';

//Import Component
import { ShopEmployeeRosterManagementComponent } from './shop-employee-roster-management.component';
import { ShopEmployeeRosterComponent } from './shop-employee-roster/shop-employee-roster.component';
import { ShopEmployeeRosterAddBreakPopoverComponent } from './shop-employee-roster-add-break-popover/shop-employee-roster-add-break-popover.component';
import { ShopEmployeeRosterUpdateBreakPopoverComponent } from './shop-employee-roster-update-break-popover/shop-employee-roster-update-break-popover.component';
@NgModule({
  declarations: [
    ShopEmployeeRosterManagementComponent,
    ShopEmployeeRosterComponent,
    ShopEmployeeRosterAddBreakPopoverComponent,
    ShopEmployeeRosterUpdateBreakPopoverComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    TimeItemTransformPipeModule,
    DatePipeModule,
    DaysTransformPipeModule,
  ],
  exports: [ShopEmployeeRosterManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopEmployeeRosterManagementModule {}
