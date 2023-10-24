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
import { ShopPackageManagementComponent } from './shop-package-management.component';
import { ShopPackageComponent } from './shop-package/shop-package.component';
import { ShopLanguagePackageModule } from '../shop-language-package/shop-language-package.module';
import { ShopPackageGridComponent } from './shop-package-grid/shop-package-grid.component';
import { ShopPackageExtraPopoverComponent } from './shop-package-extra-popover/shop-package-extra-popover.component';
@NgModule({
  declarations: [
    ShopPackageManagementComponent,
    ShopPackageComponent,
    ShopPackageGridComponent,
    ShopPackageExtraPopoverComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    ShopLanguagePackageModule,
  ],
  exports: [ShopPackageManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopPackageManagementModule {}
