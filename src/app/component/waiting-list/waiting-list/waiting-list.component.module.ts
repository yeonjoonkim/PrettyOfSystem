import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

//Import Pipe
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';

//Import Module
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { ClientCreateAccountModule } from '../../client/client-create-account/client-create-account.module';
import { ClientChangePhoneNumberModule } from '../../client/client-change-phone-number/client-change-phone-number.module';
//Import Component
import { WaitingListComponent } from './waiting-list.component';
import { WaitingListLoginComponent } from '../waiting-list-login/waiting-list-login.component';
@NgModule({
  declarations: [WaitingListComponent, WaitingListLoginComponent],
  providers: [LanguageTransformPipeModule],
  imports: [
    CommonModule,
    CommonModule,
    IonicModule,
    FormsModule,
    LanguageTransformPipeModule,
    SharedFormModule,
    KendoUiModule,
    ClientCreateAccountModule,
    ClientChangePhoneNumberModule,
  ],
  exports: [WaitingListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class WaitingListModule {}
