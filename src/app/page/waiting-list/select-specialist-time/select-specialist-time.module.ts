import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectSpecialistTimePageRoutingModule } from './select-specialist-time-routing.module';

import { SelectSpecialistTimePage } from './select-specialist-time.page';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { WaitingListSelectEmployeeModule } from 'src/app/component/waiting-list/waiting-list-select-employee/waiting-list-select-employee.component.module';
import { WaitingListSelectTimeModule } from 'src/app/component/waiting-list/waiting-list-select-time/waiting-list-select-time.component.module';
import { WaitingListSelectTimeSummaryModule } from 'src/app/component/waiting-list/waiting-list-select-time-summary/waiting-list-select-time-summary.component.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectSpecialistTimePageRoutingModule,
    WaitingListSelectEmployeeModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    WaitingListSelectTimeSummaryModule,
    WaitingListSelectTimeModule,
  ],
  declarations: [SelectSpecialistTimePage],
})
export class SelectSpecialistTimePageModule {}
