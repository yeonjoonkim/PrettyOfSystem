import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { ShopWorkHoursType } from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Constant from 'src/app/constant/constant';
import { CalendarView } from '@progress/kendo-angular-dateinputs';
type DateSelectionPropType = {
  date: Date;
  minDate: Date;
  maxDate: Date;
  disableDays: Date[];
  operatingHours: ShopWorkHoursType | undefined;
  formatter: Constant.DateFormatType;
  isBrithDay: boolean;
  view: CalendarView;
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
    const isBrithDay: boolean = this._navParams.get('isBrithDay');
    if (date && minDate && maxDate && formatter) {
      this.prop = {
        date: date,
        minDate: minDate,
        maxDate: maxDate,
        disableDays: [],
        operatingHours: operatingHours,
        formatter: formatter,
        isBrithDay: isBrithDay,
        view: isBrithDay ? 'decade' : 'month',
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
    const diff = this._global.date.differenceInWeeks(maxDate, minDate) + 1;

    for (let i = 0; i < diff; i++) {
      const param = this._global.date.addWeek(minDate, i);
      this.prop.disableDays.push(new Date(param));
    }
  }
}
