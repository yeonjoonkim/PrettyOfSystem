import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingPageRoutingModule } from './booking-routing.module';
import { LanguageTransformPipeModule } from '../../pipe/language-transform-pipe/language-transform.pipe.module';

//Module
import { KendoUiModule } from 'src/app/component/global/kendo-ui-module/kendo-ui-module.module';
import { SharedFormModule } from 'src/app/component/form/form.module';
import { BookingHeaderModule } from 'src/app/component/booking/booking-header/booking-header/booking-header.module';
import { BookingSearchModule } from 'src/app/component/booking/booking-search/booking-search.module';
import { BookingSearchIconModule } from 'src/app/component/booking/booking-search-icon/booking-search-icon.module';

//Component
import { BookingPage } from './booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingPageRoutingModule,
    LanguageTransformPipeModule,
    KendoUiModule,
    SharedFormModule,
    BookingSearchModule,
    BookingHeaderModule,
    BookingSearchIconModule,
  ],
  declarations: [BookingPage],
})
export class BookingPageModule {}
