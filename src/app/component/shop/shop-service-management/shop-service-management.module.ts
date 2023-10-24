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
import { ShopServiceManagementComponent } from './shop-service-management.component';
import { ShopServiceGridComponent } from './shop-service-grid/shop-service-grid.component';
import { ShopServiceComponent } from './shop-service/shop-service.component';
import { ShopLanguagePackageModule } from '../shop-language-package/shop-language-package.module';
import { ShopPackageServicePopoverComponent } from '../shop-package-management/shop-package-service-popover/shop-package-service-popover.component';
@NgModule({
  declarations: [
    ShopServiceManagementComponent,
    ShopServiceGridComponent,
    ShopServiceComponent,
    ShopPackageServicePopoverComponent,
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
  exports: [ShopServiceManagementComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopServiceManagementModule {}
