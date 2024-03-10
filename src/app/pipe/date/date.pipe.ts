import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { DateType } from 'src/app/service/global/date/date-transform/date-transform.service';
import { DateService } from 'src/app/service/global/date/date.service';

type DateTimeType = {
  year: string;
  month: string;
  day: string;
  hour: string;
  min: string;
};
@Pipe({
  name: 'dateTransform',
})
@Injectable()
export class DatePipe implements PipeTransform {
  constructor(private _date: DateService) {}

  public transform(date: DateType, type: 'Time' | 'Day' | 'ShortDate' | 'LongDate' | 'DateTime') {
    const local = this._date.transform.toLocalDateTime(date);
    const format = this._date.transform.formatLocalDateTime(local);
    return this.transformFormat(format, type);
  }

  private transformFormat(formatted: string, type: 'Time' | 'Day' | 'ShortDate' | 'LongDate' | 'DateTime') {
    const splited = split(formatted);
    const month = convertMonths(splited.month);
    const dayNight = convertDayNight(splited.hour);
    const hours = convertHours(splited.hour, dayNight);

    const time = `${hours}:${splited.min} ${dayNight}`;
    const longDate = `${splited.day}/${month}/${splited.year}`;
    const shortDate = `${splited.day}/${month}`;
    switch (type) {
      case 'Time':
        return time;
      case 'Day':
        return splited.day;
      case 'ShortDate':
        return shortDate;
      case 'LongDate':
        return longDate;
      case 'DateTime':
        return `${longDate} ${time}`;
      default:
        return `${longDate} ${time}`;
    }
  }
}

const split = function (formatted: string): DateTimeType {
  const [date, time] = formatted.split('T');
  const [year, month, day] = date.split('-');
  const [hours, minutes, seconds] = time.split(':');
  return {
    year: year,
    month: month,
    day: day,
    hour: hours,
    min: minutes,
  };
};

const convertDayNight = function (hour: string) {
  const num = Number(hour);
  return num > 11 ? 'PM' : 'AM';
};

const convertMonths = function (month: string): string {
  const num = Number(month);
  switch (num) {
    case 1:
      return 'Jan';
    case 2:
      return 'Feb';
    case 3:
      return 'Mar';
    case 4:
      return 'Apr';
    case 5:
      return 'May';
    case 6:
      return 'Jun';
    case 7:
      return 'Jul';
    case 8:
      return 'Aug';
    case 9:
      return 'Sep';
    case 10:
      return 'Oct';
    case 11:
      return 'Nov';
    case 12:
      return 'Dec';
    default:
      return 'Invalid Month';
  }
};

const convertHours = function (hoursStr: string, dayNight: 'PM' | 'AM'): string {
  let hours = Number(hoursStr) % 24;
  return hours === 0 ? '0' : hours === 12 && dayNight === 'PM' ? '12' : (hours % 12).toString();
};
