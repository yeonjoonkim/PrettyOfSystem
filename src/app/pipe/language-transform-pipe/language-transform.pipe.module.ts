import { LanguageService } from '../../service/global/language/language.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Config
import { LanguageTransformPipe } from './language-transform.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [LanguageTransformPipe],
  declarations: [LanguageTransformPipe],
})
export class LanguageTransformPipeModule {
  static forRoot(): ModuleWithProviders<LanguageTransformPipeModule> {
    return {
      ngModule: LanguageTransformPipeModule,
      providers: [LanguageService],
    };
  }
}
