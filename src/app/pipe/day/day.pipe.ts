import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/service/global/language/language.service';
import * as Constant from 'src/app/constant/constant';
import { DateService } from 'src/app/service/global/date/date.service';
import { DateType } from 'src/app/service/global/date/date-transform/date-transform.service';
@Pipe({
  name: 'dayTransform',
})
export class DayPipe implements PipeTransform {
  constructor(
    private _language: LanguageService,
    private _dateSvc: DateService
  ) {}
  async transform(date: DateType): Promise<string> {
    const day = this._dateSvc.getDay(date);

    switch (day) {
      case Constant.Date.Day.Sun:
        return await this.sun();
      case Constant.Date.Day.Mon:
        return await this.mon();
      case Constant.Date.Day.Tue:
        return await this.tue();
      case Constant.Date.Day.Wed:
        return await this.wed();
      case Constant.Date.Day.Thu:
        return await this.thu();
      case Constant.Date.Day.Fri:
        return await this.fri();
      case Constant.Date.Day.Sat:
        return await this.sat();
    }
  }

  private async sun() {
    return this._language.transform('date.title.sun');
  }

  private async mon() {
    return this._language.transform('date.title.mon');
  }

  private async tue() {
    return this._language.transform('date.title.tue');
  }

  private async wed() {
    return this._language.transform('date.title.wed');
  }

  private async thu() {
    return this._language.transform('date.title.thu');
  }

  private async fri() {
    return this._language.transform('date.title.fri');
  }

  private async sat() {
    return this._language.transform('date.title.sat');
  }

  private async everyday() {
    return this._language.transform('date.title.everyday');
  }

  private async weekdays() {
    return this._language.transform('date.title.weekdays');
  }

  private async weekend() {
    return this._language.transform('date.title.weekend');
  }
}

const isInclude = function (
  input: (Constant.DayIndexType | Constant.DayType)[],
  answerType: Constant.DayType,
  answerIndex: Constant.DayIndexType
) {
  const type = input.every((day: Constant.DayIndexType | Constant.DayType) => {
    return typeof day === 'number';
  })
    ? 'index'
    : 'type';

  if (type === 'index') {
    const indexs = input as Constant.DayIndexType[];
    return indexs.some(t => t === answerIndex);
  } else {
    const types = input as Constant.DayType[];
    return types.some(t => t === answerType);
  }
};
