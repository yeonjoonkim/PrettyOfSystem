import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { ShopUserLanguagePackageService } from 'src/app/service/shop-language-package/shop-user-language-package/shop-user-language-package.service';
import { WaitngListShopService } from 'src/app/service/waiting-list/waiting-list-shop/waitng-list-shop.service';
import * as Constant from 'src/app/constant/constant';
@Pipe({
  name: 'languageTransform',
})
export class LanguageTransformPipe implements PipeTransform {
  constructor(
    private _language: LanguageService,
    private _userPackage: ShopUserLanguagePackageService,
    private _waitingShop: WaitngListShopService
  ) {}

  public async transform(value: any, type: Constant.LanguageTransformType) {
    switch (type) {
      case Constant.Default.LanguageTransformType.System:
        return await this.systemTransform(value);
      case Constant.Default.LanguageTransformType.User:
        return await this._userPackage.transform(value);
      case Constant.Default.LanguageTransformType.WaitingList:
        return await this._waitingShop.transform(value);
      default:
        return 'undefined';
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
