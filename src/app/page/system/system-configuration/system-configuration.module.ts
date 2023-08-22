import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemConfigurationPageRoutingModule } from './system-configuration-routing.module';

import { SystemConfigurationPage } from './system-configuration.page';
import { NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';

import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/global/form/form.module';

import { SystemPlanManagementModule } from '../../../component/system/plan/plan-management/plan-management.module';
import { SystemMenuManagementModule } from '../../../component/system/menu/menu-management/menu-management.module';
import { SystemRoleManagementModule } from 'src/app/component/system/role/role-management/role-management.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemConfigurationPageRoutingModule,
    SystemPlanManagementModule,
    SystemMenuManagementModule,
    SystemRoleManagementModule,
    SharedFormModule,
    KendoUiModule,
    LanguageTransformPipeModule,
  ],
  declarations: [SystemConfigurationPage],
})
export class SystemConfigurationPageModule {}
