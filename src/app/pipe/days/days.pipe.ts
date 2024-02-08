import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/service/global/language/language.service';
import * as Constant from 'src/app/constant/constant';
@Pipe({
  name: 'daysTransform',
})
export class DaysPipe implements PipeTransform {
  constructor(private _language: LanguageService) {}
  async transform(days: Constant.DayIndexType[] | Constant.DayType[]): Promise<string> {
    const everyday = days.length === 0;
    const weekdays = this.isWeekdays(days);
    const weekend = this.isWeekend(days);
    let day = '';

    if (everyday) {
      return await this.everyday();
    }
    if (weekdays) {
      return await this.weekdays();
    }
    if (weekend) {
      return await this.weekend();
    }

    if (isInclude(days, Constant.Date.Day.Sun, Constant.Date.DayIndex.Sun)) {
      day = await this.sun();
    }

    if (isInclude(days, Constant.Date.Day.Mon, Constant.Date.DayIndex.Mon)) {
      const mon = await this.mon();
      day = day.length > 0 ? `${day}, ${mon}` : mon;
    }

    if (isInclude(days, Constant.Date.Day.Tue, Constant.Date.DayIndex.Tue)) {
      const tue = await this.tue();
      day = day.length > 0 ? `${day}, ${tue}` : tue;
    }

    if (isInclude(days, Constant.Date.Day.Wed, Constant.Date.DayIndex.Wed)) {
      const wed = await this.wed();
      day = day.length > 0 ? `${day}, ${wed}` : wed;
    }

    if (isInclude(days, Constant.Date.Day.Thu, Constant.Date.DayIndex.Thu)) {
      const thu = await this.thu();
      day = day.length > 0 ? `${day}, ${thu}` : thu;
    }

    if (isInclude(days, Constant.Date.Day.Fri, Constant.Date.DayIndex.Fri)) {
      const fri = await this.fri();
      day = day.length > 0 ? `${day}, ${fri}` : fri;
    }

    if (isInclude(days, Constant.Date.Day.Sat, Constant.Date.DayIndex.Sat)) {
      const sat = await this.sat();
      day = day.length > 0 ? `${day}, ${sat}` : sat;
    }

    return day;
  }

  private isWeekend(input: (Constant.DayIndexType | Constant.DayType)[]) {
    const type = input.every((day: Constant.DayIndexType | Constant.DayType) => {
      return typeof day === 'number';
    })
      ? 'index'
      : 'type';

    if (type === 'index') {
      const indexes = input as Constant.DayIndexType[];
      const sat = indexes.includes(Constant.Date.DayIndex.Sat);
      const sun = indexes.includes(Constant.Date.DayIndex.Sun);
      return sat && sun && indexes.length === 2;
    } else {
      const types = input as Constant.DayType[];
      const sat = types.includes(Constant.Date.Day.Sat);
      const sun = types.includes(Constant.Date.Day.Sun);
      return sat && sun && types.length === 2;
    }
  }

  private isWeekdays(input: (Constant.DayIndexType | Constant.DayType)[]) {
    const type = input.every((day: Constant.DayIndexType | Constant.DayType) => {
      return typeof day === 'number';
    })
      ? 'index'
      : 'type';

    if (type === 'index') {
      const indexes = input as Constant.DayIndexType[];
      const mon = indexes.includes(Constant.Date.DayIndex.Mon);
      const tue = indexes.includes(Constant.Date.DayIndex.Tue);
      const wed = indexes.includes(Constant.Date.DayIndex.Wed);
      const thu = indexes.includes(Constant.Date.DayIndex.Thu);
      const fri = indexes.includes(Constant.Date.DayIndex.Thu);
      return mon && tue && wed && thu && fri && indexes.length === 5;
    } else {
      const types = input as Constant.DayType[];
      const mon = types.includes(Constant.Date.Day.Mon);
      const tue = types.includes(Constant.Date.Day.Tue);
      const wed = types.includes(Constant.Date.Day.Wed);
      const thu = types.includes(Constant.Date.Day.Thu);
      const fri = types.includes(Constant.Date.Day.Thu);
      return mon && tue && wed && thu && fri && types.length === 5;
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
