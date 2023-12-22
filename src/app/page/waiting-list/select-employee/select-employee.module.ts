import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectEmployeePageRoutingModule } from './select-employee-routing.module';

import { SelectEmployeePage } from './select-employee.page';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectEmployeePageRoutingModule,
    LanguageTransformPipeModule,
    KendoUiModule,
  ],
  declarations: [SelectEmployeePage],
})
export class SelectEmployeePageModule {}
