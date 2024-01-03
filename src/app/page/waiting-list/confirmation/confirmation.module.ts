import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPageRoutingModule } from './confirmation-routing.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { ConfirmationPage } from './confirmation.page';
import { WaitingListConsultConfirmationModule } from 'src/app/component/waiting-list/waiting-list-consult-confirmation/waiting-list-consult-confirmation.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationPageRoutingModule,
    KendoUiModule,
    LanguageTransformPipeModule,
    WaitingListConsultConfirmationModule,
  ],
  declarations: [ConfirmationPage],
})
export class ConfirmationPageModule {}
