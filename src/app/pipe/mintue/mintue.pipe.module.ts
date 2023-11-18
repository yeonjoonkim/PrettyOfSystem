import { LanguageService } from 'src/app/service/global/language/language.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Config
import { MinuteTransformPipe } from './mintue.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [MinuteTransformPipe],
  declarations: [MinuteTransformPipe],
})
export class MintueTransformPipeModule {
  static forRoot(): ModuleWithProviders<MintueTransformPipeModule> {
    return {
      ngModule: MintueTransformPipeModule,
      providers: [LanguageService],
    };
  }
}
