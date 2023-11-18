import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from 'src/app/service/global/language/language.service';
import * as Constant from 'src/app/constant/constant';
@Pipe({
  name: 'daysTransform',
})
export class DaysPipe implements PipeTransform {
  constructor(private _language: LanguageService) {}
  async transform(days: Constant.DayIndexType[]): Promise<string> {
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

    if (days.includes(Constant.Date.DayIndex.Sun)) {
      day = await this.sun();
    }

    if (days.includes(Constant.Date.DayIndex.Mon)) {
      const mon = await this.mon();
      day = day.length > 0 ? `${day}, ${mon}` : mon;
    }

    if (days.includes(Constant.Date.DayIndex.Tue)) {
      const tue = await this.tue();
      day = day.length > 0 ? `${day}, ${tue}` : tue;
    }

    if (days.includes(Constant.Date.DayIndex.Wed)) {
      const wed = await this.wed();
      day = day.length > 0 ? `${day}, ${wed}` : wed;
    }

    if (days.includes(Constant.Date.DayIndex.Thu)) {
      const thu = await this.thu();
      day = day.length > 0 ? `${day}, ${thu}` : thu;
    }

    if (days.includes(Constant.Date.DayIndex.Fri)) {
      const fri = await this.fri();
      day = day.length > 0 ? `${day}, ${fri}` : fri;
    }

    if (days.includes(Constant.Date.DayIndex.Sat)) {
      const sat = await this.sat();
      day = day.length > 0 ? `${day}, ${sat}` : sat;
    }

    return day;
  }

  private isWeekend(days: Constant.DayIndexType[]) {
    const sat = days.includes(Constant.Date.DayIndex.Sat);
    const sun = days.includes(Constant.Date.DayIndex.Sun);
    return sat && sun && days.length === 2;
  }

  private isWeekdays(days: Constant.DayIndexType[]) {
    const mon = days.includes(Constant.Date.DayIndex.Mon);
    const tue = days.includes(Constant.Date.DayIndex.Tue);
    const wed = days.includes(Constant.Date.DayIndex.Wed);
    const thu = days.includes(Constant.Date.DayIndex.Thu);
    const fri = days.includes(Constant.Date.DayIndex.Thu);
    return mon && tue && wed && thu && fri && days.length === 5;
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
