import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationPageRoutingModule } from './reservation-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReservationPageRoutingModule],
})
export class ReservationPageModule {}
