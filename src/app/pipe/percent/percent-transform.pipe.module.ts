import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Config
import { PercentTransformPipe } from './percent-transform.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [PercentTransformPipe],
  declarations: [PercentTransformPipe],
})
export class PercentTransformPipeModule {}
