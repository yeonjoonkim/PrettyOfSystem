import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { SharedFormModule } from 'src/app/component/form/form.module';
import { KendoUiModule } from '../../global/kendo-ui-module/kendo-ui-module.module';
import { ShopLanguagePackageModule } from '../shop-language-package/shop-language-package.module';
import { ShopExtraManagementComponent } from './shop-extra-management.component';
import { ShopExtraComponent } from './shop-extra/shop-extra.component';
import { ShopExtraGridComponent } from './shop-extra-grid/shop-extra-grid.component';

//Import Component
@NgModule({
  declarations: [ShopExtraManagementComponent, ShopExtraComponent, ShopExtraGridComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    ShopLanguagePackageModule,
  ],
  exports: [ShopExtraManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopExtraManagementModule {}
