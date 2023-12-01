import { Pipe, PipeTransform } from '@angular/core';
import { ShopConfigurationLanguagePackageType } from 'src/app/interface';
import { LanguageService } from 'src/app/service/global/language/language.service';

@Pipe({
  name: 'transformMedicalHsitoryOtherStatus',
})
export class MedicalHsitoryOtherStatusPipe implements PipeTransform {
  constructor(private _language: LanguageService) {}

  async transform(value: ShopConfigurationLanguagePackageType | null): Promise<string> {
    if (value !== null) {
      const currentlanguage = await this._language.management.storage.getCurrentLanguage();
      const result = value[currentlanguage];
      return result;
    } else {
      const noValueFormat = 'label.description.noothermedicalstatushasbeenprovided';
      const result = await this._language.transform(noValueFormat);
      return result;
    }
  }
}
