import { LanguageService } from '../../services/language/service/language.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Config
import { languageTrainsformConfigService } from './language-transform-config.service';
import { UiLanguagePipe } from './language-transform.pipe';

@NgModule({
  imports: [CommonModule],
  exports:[UiLanguagePipe],
  declarations: [UiLanguagePipe]
})

export class UiLanguagePipeModule {
  static forRoot(config: any): ModuleWithProviders<UiLanguagePipeModule>{
    return {
      ngModule: UiLanguagePipeModule,
      providers: [
        LanguageService,
        {
          provide: languageTrainsformConfigService,
          useValue: config
        }
      ]
    }
  }

}
