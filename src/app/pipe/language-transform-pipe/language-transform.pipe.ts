import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/service/global/language/language.service';

@Pipe({
  name: 'languageTransform',
})
export class LanguageTransformPipe implements PipeTransform {
  constructor(private _language: LanguageService) {}

  async transform(value: any) {
    if (value) {
      let item = await this._language.transform(value);
      return item;
    }
    return value;
  }
}
