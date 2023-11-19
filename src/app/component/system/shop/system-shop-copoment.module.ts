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
import { ShopCategoryListComponent } from './shop-category/shop-category.component';
import { ShopCountryComponent } from './shop-country/shop-country.component';
import { ShopOpenHourComponent } from './shop-open-hour/shop-open-hour.component';
import { ShopConfigurationComponent } from './shop-configuration/shop-configuration.component';
@NgModule({
  declarations: [
    ShopCategoryListComponent,
    ShopCountryComponent,
    ShopOpenHourComponent,
    ShopConfigurationComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
  ],
  exports: [ShopCategoryListComponent, ShopCountryComponent, ShopOpenHourComponent, ShopConfigurationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SystemShopFormModule {}
