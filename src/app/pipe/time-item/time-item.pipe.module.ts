import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeItemPipe } from './time-item.pipe';
import { DateService } from 'src/app/service/global/date/date.service';

@NgModule({
  imports: [CommonModule],
  exports: [TimeItemPipe],
  declarations: [TimeItemPipe],
})
export class TimeItemTransformPipeModule {
  static forRoot(): ModuleWithProviders<TimeItemTransformPipeModule> {
    return {
      ngModule: TimeItemTransformPipeModule,
      providers: [DateService],
    };
  }
}
