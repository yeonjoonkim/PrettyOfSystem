import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingListPageRoutingModule } from './waiting-list-routing.module';
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { BookingLanguageSelectionModule } from 'src/app/component/booking/booking/booking-header/booking-language/booking-language-selection.module';
import { LanguageTransformPipeModule } from 'src/app/pipe/language-transform-pipe/language-transform.pipe.module';
import { WaitingListModule } from 'src/app/component/waiting-list/waiting-list.component.module';
import { WaitingListPage } from './waiting-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingListPageRoutingModule,
    KendoUiModule,
    BookingLanguageSelectionModule,
    LanguageTransformPipeModule,
    WaitingListModule,
  ],
  declarations: [WaitingListPage],
})
export class WaitingListPageModule {}
