

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,NgModule} from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../../shared/pipes/language-transform-pipe/language-transform.pipe.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Import Module
import { KendoUiModule } from 'src/app/shared/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/shared/components/form/form.module';
import { SystemShopFormModule } from '../system-shop-copoment.module';
import {NgxIntlTelInputModule} from 'ngx-intl-tel-input-gg';
//Import Component
import {ShopManagementComponent} from './shop-management.component';

@NgModule({
  declarations: [
    ShopManagementComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    Ng2SearchPipeModule,
    KendoUiModule,
    SharedFormModule,
    SystemShopFormModule,
    NgxIntlTelInputModule
  ],
  exports: [ShopManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SystemShopManagementModule { }
