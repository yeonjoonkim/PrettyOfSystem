import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { DatePipeModule } from 'src/app/pipe/date/date.pipe.module';
import { TimeItemTransformPipeModule } from 'src/app/pipe/time-item/time-item.pipe.module';
//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';
//Import Component
import { ShopEmployeeScheduleComponent } from './shop-employee-schedule.component';
import { EmployeeScheduleTitleComponent } from './employee-schedule-title/employee-schedule-title.component';
import { ShopEmployeeScheduleBtnComponent } from './shop-employee-schedule-btn/shop-employee-schedule-btn.component';
import { ShopEmployeeScheduleSettingModule } from './shop-employee-schedule-setting/shop-employee-schedule-setting.module';
@NgModule({
  declarations: [ShopEmployeeScheduleComponent, EmployeeScheduleTitleComponent, ShopEmployeeScheduleBtnComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    DatePipeModule,
    TimeItemTransformPipeModule,
    ShopEmployeeScheduleSettingModule,
  ],
  exports: [ShopEmployeeScheduleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopEmployeeScheduleModule {}
