import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Pipe({
  name: 'languageTransform'
})

export class UiLanguagePipe implements PipeTransform {
  constructor(private language: LanguageService){}

  async transform(value: any) {
    if(value){
      let item = await this.language.getLanguageTransformValue(value);
      return item;
    }
    return value;
  }

}
