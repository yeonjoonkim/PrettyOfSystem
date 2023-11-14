import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Config
import { DatePipe } from './date.pipe';
import { DateService } from 'src/app/service/global/date/date.service';

@NgModule({
  imports: [CommonModule],
  exports: [DatePipe],
  declarations: [DatePipe],
})
export class DatePipeModule {
  static forRoot(): ModuleWithProviders<DatePipeModule> {
    return {
      ngModule: DatePipeModule,
      providers: [DateService],
    };
  }
}
