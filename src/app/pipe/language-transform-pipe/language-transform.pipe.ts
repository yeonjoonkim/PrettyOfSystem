import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { ShopUserLanguagePackageService } from 'src/app/service/shop-language-package/shop-user-language-package/shop-user-language-package.service';

@Pipe({
  name: 'languageTransform',
})
export class LanguageTransformPipe implements PipeTransform {
  constructor(
    private _language: LanguageService,
    private _userPackage: ShopUserLanguagePackageService
  ) {}

  public async transform(value: any, type: 'System' | 'Client' | 'User') {
    if (type === 'System') {
      return await this.systemTransform(value);
    } else if (type === 'User') {
      return await this._userPackage.transform(value);
    }
  }

  private async systemTransform(value: any) {
    if (value) {
      let item = await this._language.transform(value);
      return item;
    }
    return value;
  }
}
