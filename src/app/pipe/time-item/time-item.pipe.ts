import { Pipe, PipeTransform } from '@angular/core';
import { TimeItemType } from 'src/app/interface';
import { DateService } from 'src/app/service/global/date/date.service';
type DateTimeType = {
  year: string;
  month: string;
  day: string;
  hour: string;
  min: string;
};

@Pipe({
  name: 'timeItemTransform',
})
export class TimeItemPipe implements PipeTransform {
  constructor(private _date: DateService) {}
  transform(time: TimeItemType): string {
    const formatted = this._date.transform.formatByTimeItem(new Date(), time);
    const splited = split(formatted);
    const hours = convertHours(splited.hour);
    const dayNight = convertDayNight(splited.hour);
    return `${hours}:${splited.min} ${dayNight}`;
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

const convertHours = function (hoursStr: string): string {
  let hours = Number(hoursStr) % 24;

  if (hours <= 11) {
    return hours === 0 ? '12' : hours.toString();
  }

  return (hours % 12).toString();
};
