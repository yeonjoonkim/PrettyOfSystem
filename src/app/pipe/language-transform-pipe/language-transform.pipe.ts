import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../../service/global/language/language.service';

@Pipe({
  name: 'languageTransform',
})
export class LanguageTransformPipe implements PipeTransform {
  constructor(private language: LanguageService) {}

  async transform(value: any) {
    if (value) {
      let item = await this.language.transform(value);
      return item;
    }
    return value;
  }
}
