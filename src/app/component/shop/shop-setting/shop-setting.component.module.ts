import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from '../../../pipe/language-transform-pipe/language-transform.pipe.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { SystemShopFormModule } from '../../system/shop/system-shop-copoment.module';
import { ShopSettingComponent } from 'src/app/component/shop/shop-setting/shop-setting.component';
import { OpeningClosingHourPickerModule } from '../../form/opening-closing-hour-picker/opening-closing-hour-picker.module';
import { ShopCapacityManagementModule } from '../../system/shop-capacity/shop-capacity-management/shop-capacity-management.module';
//Modal
import { ShopSettingCalendarComponent } from './modal/shop-setting-calendar/shop-setting-calendar.component';
import { ShopSettingPictureComponent } from './modal/shop-setting-picture/shop-setting-picture.component';
import { ShopSettingFinanceComponent } from './modal/shop-setting-finance/shop-setting-finance.component';
import { ShopSettingContactComponent } from './modal/shop-setting-contact/shop-setting-contact.component';
import { ShopSettingOperatingHoursComponent } from './modal/shop-setting-operating-hours/shop-setting-operating-hours.component';
import { ShopSettingWaitingListComponent } from './modal/shop-setting-waiting-list/shop-setting-waiting-list.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KendoUiModule,
    SharedFormModule,
    LanguageTransformPipeModule,
    SystemShopFormModule,
    OpeningClosingHourPickerModule,
    ShopCapacityManagementModule,
  ],
  declarations: [
    ShopSettingComponent,
    ShopSettingCalendarComponent,
    ShopSettingPictureComponent,
    ShopSettingFinanceComponent,
    ShopSettingContactComponent,
    ShopSettingOperatingHoursComponent,
    ShopSettingWaitingListComponent,
  ],
  exports: [ShopSettingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ShopSettingCompnentModule {}
