import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyTransformPipe } from './currency.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [CurrencyTransformPipe],
  declarations: [CurrencyTransformPipe],
})
export class CurrencyPipeTransformModule {}
