import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';

//Import Component
import { ShopCapacityManagementComponent } from './shop-capacity-management.component';
import { ShopCapacityComponent } from '../shop-capacity/shop-capacity.component';
import { CurrencyPipeTransformModule } from 'src/app/pipe/currency/currency.pipe.module';
@NgModule({
  declarations: [ShopCapacityManagementComponent, ShopCapacityComponent],
  imports: [
    CommonModule,
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    CurrencyPipeTransformModule,
  ],
  exports: [ShopCapacityManagementComponent, ShopCapacityComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopCapacityManagementModule {}
