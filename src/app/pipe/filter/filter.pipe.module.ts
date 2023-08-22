import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Config
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [FilterPipe],
  declarations: [FilterPipe],
})
export class FilterPipeModule {}
