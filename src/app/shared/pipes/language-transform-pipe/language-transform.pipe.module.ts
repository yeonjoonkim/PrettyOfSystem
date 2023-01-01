import { LanguageService } from '../../services/language/language.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Config
import { UiLanguagePipe } from './language-transform.pipe';

@NgModule({
  imports: [CommonModule],
  exports:[UiLanguagePipe],
  declarations: [UiLanguagePipe]
})

export class UiLanguagePipeModule {
  static forRoot(): ModuleWithProviders<UiLanguagePipeModule>{
    return {
      ngModule: UiLanguagePipeModule,
      providers: [
        LanguageService
      ]
    }
  }
}
