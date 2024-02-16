import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { TimeItemType } from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';

type TimeSelectionPropType = {
  minDateTime: string;
  maxDateTime: string;
  minTimeItem: TimeItemType;
  maxTimeItem: TimeItemType;
  defaultMinSelection: string[];
  minSelection: string;
  hourSelection: string[];
  intervalMins: number;
  allow24Hours: boolean;
};

@Component({
  selector: 'time-selection-popover',
  templateUrl: './time-selection-popover.component.html',
  styleUrls: ['./time-selection-popover.component.scss'],
})
export class TimeSelectionPopoverComponent implements OnInit {
  public time!: string;
  public prop!: TimeSelectionPropType;

  constructor(
    private _navParams: NavParams,
    private _popoverCtrl: PopoverController,
    private _global: GlobalService
  ) {
    this.time = this._navParams.get('time');
    const intervalMin: number | undefined = this._navParams.get('intervalMin');
    const min: string | undefined = this._navParams.get('min');
    const max: string | undefined = this._navParams.get('max');
    if (min && max && intervalMin) {
      const minDate = this._global.date.transform.toLocalDateTime(min);
      const maxDate = this._global.date.transform.toLocalDateTime(max);
      const minTimeItem = this._global.date.timeItem(minDate);
      const maxTimeItem = this._global.date.timeItem(maxDate);
      const defaultMins = this.generateMinValues(intervalMin);
      this.prop = {
        minDateTime: min,
        maxDateTime: max,
        minTimeItem: minTimeItem,
        maxTimeItem: maxTimeItem,
        defaultMinSelection: defaultMins,
        intervalMins: intervalMin,
        minSelection: defaultMins.join(','),
        hourSelection: this.generateHourValue(minTimeItem, maxTimeItem),
        allow24Hours: this._global.date.is24HoursByTimeItem(minTimeItem, maxTimeItem),
      };
    } else {
      this._popoverCtrl.dismiss();
    }
  }

  ngOnInit() {}

  async onClickCancel() {
    await this._popoverCtrl.dismiss();
  }

  async onClickApply() {
    const date = this._global.date.transform.toLocalDateTime(this.time);
    const formatTimeItem = this._global.date.timeItem(date);
    await this._popoverCtrl.dismiss({ time: formatTimeItem });
  }

  public onChangeTime(dateTime: string) {}

  private generateMinValues(intervalMin: number) {
    const maxMin = 60;
    const mins: string[] = [];

    for (let minute = 0; minute <= maxMin; minute += intervalMin) {
      const formattedMinute = ('0' + minute).slice(-2);
      mins.push(formattedMinute);
    }

    return mins;
  }

  private generateHourValue(start: TimeItemType, end: TimeItemType) {
    const is24Hours = this._global.date.is24HoursByTimeItem(start, end);
    const startHour = is24Hours ? 0 : start.hr;
    const endHour = is24Hours ? 24 : end.hr;
    const hours: string[] = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
      hours.push(formattedHour);
    }
    return hours;
  }
}
