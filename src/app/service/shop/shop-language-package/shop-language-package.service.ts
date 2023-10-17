import { Injectable } from '@angular/core';
import { NameValuePairType, ShopConfigurationLanguagePackageType } from 'src/app/interface';
import { LanguageService } from 'src/app/service/global/language/language.service';

@Injectable({
  providedIn: 'root',
})
export class ShopLanguagePackageService {
  constructor(private _language: LanguageService) {}

  public updatePackage(
    pack: ShopConfigurationLanguagePackageType,
    relatedKeys: NameValuePairType[]
  ) {
    relatedKeys.forEach(related => {
      if (pack.hasOwnProperty(related.name)) {
        pack[related.name] = related.value;
      }
    });

    return pack;
  }

  public getRelatedNamePairValueList(
    pack: ShopConfigurationLanguagePackageType,
    key: string
  ): NameValuePairType[] {
    return Object.entries(pack)
      .filter(([id]) => id.includes(key))
      .map(([name, value]) => ({ name, value }));
  }

  public async getLanguages(relatedList: NameValuePairType[]) {
    const languages = await this._language.management.storage.getSelections();
    const result = languages.map(l => {
      return { name: l.description, value: l.code };
    });

    const promises = languages.map(async l => {
      const translated = await this._language.transform(l.description);
      return { name: translated, value: l.code };
    });

    const translated = await Promise.all(promises);
    translated.sort((a, b) => a.name.localeCompare(b.name));
    translated.map(l => {
      const description = languages.find(s => s.code === l.value);
      const name = description !== undefined ? description.description : l.name;
      return { name: name, value: l.value };
    });

    if (relatedList.length > 0 && translated.length > 0) {
      relatedList.forEach(r => {
        translated.forEach(l => {
          const list = r.name.split('.');
          const code = list[2];
          if (code === l.value) {
            l.value = r.name;
          }
        });
      });
    }
    translated;
    return translated;
  }
}
