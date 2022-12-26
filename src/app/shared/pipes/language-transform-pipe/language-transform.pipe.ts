import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../../services/language/service/language.service';

@Pipe({
  name: 'languageTransform'
})

export class UiLanguagePipe implements PipeTransform {
  constructor(private language: LanguageService){}

  transform(value: any, ...args: any[]): any {
    if(value){
      return this.language.getTransformValue(value);
    }
    return value;
  }

}
