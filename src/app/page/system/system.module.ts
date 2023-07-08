//Import Ionic Angular Module
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,NgModule} from '@angular/core';

//Import System Page
import { SystemPageRoutingModule } from './system-routing.module';
import { SystemPage } from './system.page';

//Import Pipe
import { LanguageTransformPipeModule } from '../../shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { KendoUiModule } from 'src/app/shared/kendo-ui-module/kendo-ui-module.module';
import { LanguageTransformDictionaryModule } from '../../component/system/language/language-transform-dictionary/language-transform-dictionary.module';
import { SharedFormModule } from 'src/app/shared/components/form/form.module';
import { IonicIconSelectionModule } from 'src/app/shared/components/ionic-icon-selection/ionic-icon-selection.module';


import { SystemShopManagementModule } from '../../component/system/shop/shop-management/shop-management.module';
import { SystemPlanManagementModule } from '../../component/system/plan/plan-management/plan-management.module';
import { SystemMenuManagementModule } from '../../component/system/menu/menu-management/menu-management.module';
import { SystemRoleManagementModule } from 'src/app/component/system/role/role-management/role-management.module';
import { SystemMenuOptionComponent } from '../../component/system/system/system-menu-option/system-menu-option.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemPageRoutingModule,
    Ng2SearchPipeModule,
    LanguageTransformPipeModule,
    LanguageTransformDictionaryModule,
    IonicIconSelectionModule,
    KendoUiModule,
    SystemPlanManagementModule,
    SystemRoleManagementModule,
    SystemMenuManagementModule,
    SystemShopManagementModule,
    SharedFormModule
  ],
  declarations: [SystemPage, SystemMenuOptionComponent],
  entryComponents: [
    SystemPage,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SystemPageModule {}
