import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';

//Import Component
import { ShopEmployeeManagementComponent } from './shop-employee-management.component';
import { ShopEmployeeGridComponent } from './shop-employee-grid/shop-employee-grid.component';
import { ShopEmployeeComponent } from './shop-employee/shop-employee.component';
import { GenderSelectionModule } from '../../user/gender-selection/gender-selection.module';
import { LoginOptionSelectionModule } from '../../user/login-option-selection/login-option-selection.module';
import { LanguageSelectionModule } from '../../global/langauge-selection/language-selection.module';
import { ShopLimitedProgressModule } from '../shop-limited-progressbar/shop-limited-progressbar.module.ts';
@NgModule({
  declarations: [ShopEmployeeGridComponent, ShopEmployeeManagementComponent, ShopEmployeeComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    GenderSelectionModule,
    LoginOptionSelectionModule,
    LanguageSelectionModule,
    ShopLimitedProgressModule,
  ],
  exports: [ShopEmployeeManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopEmployeeManagementModule {}
