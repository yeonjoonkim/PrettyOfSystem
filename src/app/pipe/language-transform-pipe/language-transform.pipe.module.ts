import { LanguageService } from 'src/app/service/global/language/language.service';
import { ShopUserLanguagePackageService } from 'src/app/service/shop-language-package/shop-user-language-package/shop-user-language-package.service';
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
      providers: [LanguageService, ShopUserLanguagePackageService],
    };
  }
}
