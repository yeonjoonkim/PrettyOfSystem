import { LanguageService } from 'src/app/service/global/language/language.service';
import { ShopUserLanguagePackageService } from 'src/app/service/shop-language-package/shop-user-language-package/shop-user-language-package.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysPipe } from './days.pipe';

//Import Config

@NgModule({
  imports: [CommonModule],
  exports: [DaysPipe],
  declarations: [DaysPipe],
})
export class DaysTransformPipeModule {
  static forRoot(): ModuleWithProviders<DaysTransformPipeModule> {
    return {
      ngModule: DaysTransformPipeModule,
      providers: [LanguageService, ShopUserLanguagePackageService],
    };
  }
}
