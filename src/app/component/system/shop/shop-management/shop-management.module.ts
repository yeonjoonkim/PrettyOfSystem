import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

import { LuxonModule } from 'luxon-angular';

//Import Module
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { SystemShopFormModule } from '../system-shop-copoment.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input-gg';

//Import Component
import { ShopManagementComponent } from '../shop-management/shop-management.component';

@NgModule({
  declarations: [ShopManagementComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    SharedFormModule,
    SystemShopFormModule,
    NgxIntlTelInputModule,
    LuxonModule,
  ],
  exports: [ShopManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SystemShopManagementModule {}
