import { Injectable } from '@angular/core';
import { ShopService } from '../../shop/shop.service';
import { firstValueFrom, of, switchMap } from 'rxjs';

import { SystemLanguageStorageService } from '../../global/language/system-language-management/system-language-storage/system-language-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ShopUserLanguagePackageService {
  constructor(
    private _shop: ShopService,
    private _systemLanguage: SystemLanguageStorageService
  ) {}

  private package() {
    return this._shop.config$.pipe(
      switchMap(config => {
        if (config) {
          return of(config.package);
        } else {
          return of(null);
        }
      })
    );
  }

  public async transform(value: string) {
    const pack = await firstValueFrom(this.package());
    const preferLanguage = await this._systemLanguage.getCurrentLanguage();
    const path = value + '.' + preferLanguage;
    const result = pack != null ? pack[path] : '';
    return result;
  }

  public async transformEnglish(value: string) {
    const pack = await firstValueFrom(this.package());
    const path = value + '.en';
    const result = pack != null ? pack[path] : '';
    return result;
  }
}
