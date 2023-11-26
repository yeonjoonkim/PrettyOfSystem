import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAccountPageRoutingModule } from './create-account-routing.module';

import { CreateAccountPage } from './create-account.page';
import { CheckInCreateAccountModule } from 'src/app/component/check-in/check-in-create-account/check-in-create-account.module';
import { BookingHeaderModule } from 'src/app/component/booking/booking/booking-header/booking-header/booking-header.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAccountPageRoutingModule,
    CheckInCreateAccountModule,
    BookingHeaderModule,
  ],
  declarations: [CreateAccountPage],
})
export class CreateAccountPageModule {}
