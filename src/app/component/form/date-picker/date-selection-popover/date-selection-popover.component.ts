import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { ShopWorkHoursType } from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Constant from 'src/app/constant/constant';
type DateSelectionPropType = {
  date: Date;
  minDate: Date;
  maxDate: Date;
  disableDays: Date[];
  operatingHours: ShopWorkHoursType | undefined;
  formatter: Constant.DateFormatType;
};
@Component({
  selector: 'date-selection-popover',
  templateUrl: './date-selection-popover.component.html',
  styleUrls: ['./date-selection-popover.component.scss'],
})
export class DateSelectionPopoverComponent implements OnInit {
  public prop!: DateSelectionPropType;

  constructor(
    private _navParams: NavParams,
    private _popoverCtrl: PopoverController,
    private _global: GlobalService
  ) {
    const date: Date | undefined = this._navParams.get('date');
    const minDate: Date | undefined = this._navParams.get('minDate');
    const maxDate: Date | undefined = this._navParams.get('maxDate');
    const operatingHours: ShopWorkHoursType | undefined = this._navParams.get('operatingHours');
    const formatter: Constant.DateFormatType | undefined = this._navParams.get('dateFormatter');
    if (date && minDate && maxDate && formatter) {
      this.prop = {
        date: date,
        minDate: minDate,
        maxDate: maxDate,
        disableDays: [],
        operatingHours: operatingHours,
        formatter: formatter,
      };
    } else {
      this._popoverCtrl.dismiss();
    }
  }

  ngOnInit() {
    this.setupDisableDatesByOperatingHours();
  }

  async onClickCancel() {
    await this._popoverCtrl.dismiss();
  }

  async onClickApply() {
    await this._popoverCtrl.dismiss({ date: this.prop.date });
  }

  private setupDisableDatesByOperatingHours() {
    if (this.prop.operatingHours) {
      const closeDays = this.prop.operatingHours.closeDay;
      const minDate = this._global.date.startDay(this.prop.minDate);
      const minWeek = this._global.date.getWeek(minDate);
      const maxDate = this._global.date.startDay(this.prop.maxDate);
      const maxWeek = this._global.date.getWeek(maxDate);

      for (let day of closeDays) {
        const min = minWeek[day];
        const max = maxWeek[day];
        this.newDisableDates(min, max);
      }
    }
  }

  private newDisableDates(minDate: string, maxDate: string) {
    const min = this._global.date.transform.toLocalDateTime(minDate);
    const max = this._global.date.transform.toLocalDateTime(maxDate);

    const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // One day in milliseconds

    for (
      let currentDate = new Date(min);
      currentDate <= max;
      currentDate.setTime(currentDate.getTime() + oneDayInMilliseconds)
    ) {
      if (currentDate.getDay() === 0) {
        this.prop.disableDays.push(new Date(currentDate));
      }
    }
  }
}
