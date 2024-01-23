import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Config
import { PhoneNumberPipe } from './phone-number.pipe';
@NgModule({
  imports: [CommonModule],
  exports: [PhoneNumberPipe],
  declarations: [PhoneNumberPipe],
})
export class PhoneNumberPipeModule {}
