import { LanguageService } from 'src/app/service/global/language/language.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayPipe } from './day.pipe';
import { DateService } from 'src/app/service/global/date/date.service';

//Import Config

@NgModule({
  imports: [CommonModule],
  exports: [DayPipe],
  declarations: [DayPipe],
})
export class DayTransformPipeModule {
  static forRoot(): ModuleWithProviders<DayTransformPipeModule> {
    return {
      ngModule: DayTransformPipeModule,
      providers: [LanguageService, DateService],
    };
  }
}
