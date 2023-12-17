import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/service/global/language/language.service';

@Pipe({
  name: 'minuteTransform',
})
export class MinuteTransformPipe implements PipeTransform {
  constructor(private _language: LanguageService) {}

  public async transform(value: number | string) {
    const min = await this._language.transform('label.title.minute');
    if (typeof value === 'string') {
      return `${value} ${min}`;
    } else {
      return `${value.toString()}${min}`;
    }
  }
}
