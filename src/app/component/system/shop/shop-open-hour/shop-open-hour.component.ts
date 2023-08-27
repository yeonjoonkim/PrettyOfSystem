import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Constant from 'src/app/constant/constant';
import { IShopOperatingHours, IShopWorkHours } from 'src/app/interface/shop/shop.interface';
import { ITimeItem } from 'src/app/interface/global/global.interface';
export interface IShopOpenHoursValidator {
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
  sun: boolean;
}

@Component({
  selector: 'operating-hours',
  templateUrl: './shop-open-hour.component.html',
  styleUrls: ['./shop-open-hour.component.scss'],
})
export class ShopOpenHourComponent implements OnInit {
  @Output() workHoursChange = new EventEmitter<IShopWorkHours>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() readOnly: boolean = false;
  @Input() timezone: Constant.TimeZoneType = Constant.TimeZone.AustraliaBrisbane;
  @Input() intervalMin: number = Constant.ShopSetting.TimePicker.IntervalMin;
  @Input() action: Constant.FormActionType = Constant.Default.FormAction.Create;
  @Input()
  get workHours(): IShopWorkHours {
    return this.inputWorkHours;
  }
  set workHours(workHours: IShopWorkHours) {
    this.inputWorkHours = workHours;
    this.workHoursChange.emit(workHours);
  }
  @Input()
  get validate(): boolean {
    return this.inputValidator;
  }
  set validate(input: boolean) {
    this.inputValidator = input;
    this.validateChange.emit(input);
  }
  public inputValidator: boolean = false;
  public validator: IShopOpenHoursValidator = {
    mon: true,
    tue: true,
    wed: true,
    thu: true,
    fri: true,
    sat: true,
    sun: true,
  };
  public inputWorkHours: IShopWorkHours = {
    closeDay: [],
    mon: {
      isOpen: true,
      operatingHours: {
        openTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
        closeTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
      },
      index: Constant.Date.DayIndex.Mon,
      day: Constant.Date.Day.Mon,
      workHours: 24,
    },
    tue: {
      isOpen: true,
      operatingHours: {
        openTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
        closeTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
      },
      index: Constant.Date.DayIndex.Tue,
      day: Constant.Date.Day.Tue,
      workHours: 24,
    },
    wed: {
      isOpen: true,
      operatingHours: {
        openTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
        closeTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
      },
      index: Constant.Date.DayIndex.Wed,
      day: Constant.Date.Day.Wed,
      workHours: 24,
    },
    thu: {
      isOpen: true,
      operatingHours: {
        openTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
        closeTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
      },
      index: Constant.Date.DayIndex.Thu,
      day: Constant.Date.Day.Thu,
      workHours: 24,
    },
    fri: {
      isOpen: true,
      operatingHours: {
        openTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
        closeTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
      },
      index: Constant.Date.DayIndex.Fri,
      day: Constant.Date.Day.Fri,
      workHours: 24,
    },
    sat: {
      isOpen: true,
      operatingHours: {
        openTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
        closeTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
      },
      index: Constant.Date.DayIndex.Sat,
      day: Constant.Date.Day.Sat,
      workHours: 24,
    },
    sun: {
      isOpen: true,
      operatingHours: {
        openTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
        closeTime: {
          hr: 0,
          min: 0,
          dayNightType: 'AM',
          strValue: '00:00:00',
        },
      },
      index: Constant.Date.DayIndex.Sun,
      day: Constant.Date.Day.Sun,
      workHours: 24,
    },
  };
  public copyValue: IShopOperatingHours = {
    openTime: {
      hr: 0,
      min: 0,
      dayNightType: 'AM',
      strValue: '00:00:00',
    },
    closeTime: {
      hr: 0,
      min: 0,
      dayNightType: 'AM',
      strValue: '00:00:00',
    },
  };
  constructor(private global: GlobalService) {}

  async ngOnInit() {}

  public onChangeMon() {
    this.inputWorkHours.mon.operatingHours.openTime = this.inputWorkHours.mon.isOpen
      ? this.inputWorkHours.mon.operatingHours.openTime
      : this.getDefaultTime();
    this.inputWorkHours.mon.operatingHours.closeTime = this.inputWorkHours.mon.isOpen
      ? this.inputWorkHours.mon.operatingHours.closeTime
      : this.getDefaultTime();
    let valid = this.validateOpenAndCloseTimes(
      this.workHours.mon.operatingHours.openTime,
      this.workHours.mon.operatingHours.closeTime
    );
    this.validator.mon = valid.result;
    this.inputWorkHours.mon.workHours = valid.workHours;
    this.setCloseDay(Constant.Date.DayIndex.Mon, this.inputWorkHours.mon.isOpen);
    this.validate = this.setValidator();
    this.workHours = this.inputWorkHours;
  }

  public onChangeTue() {
    this.inputWorkHours.tue.operatingHours.openTime = this.inputWorkHours.tue.isOpen
      ? this.inputWorkHours.tue.operatingHours.openTime
      : this.getDefaultTime();
    this.inputWorkHours.tue.operatingHours.closeTime = this.inputWorkHours.tue.isOpen
      ? this.inputWorkHours.tue.operatingHours.closeTime
      : this.getDefaultTime();
    let valid = this.validateOpenAndCloseTimes(
      this.workHours.tue.operatingHours.openTime,
      this.workHours.tue.operatingHours.closeTime
    );
    this.validator.tue = valid.result;
    this.inputWorkHours.tue.workHours = valid.workHours;
    this.setCloseDay(Constant.Date.DayIndex.Tue, this.inputWorkHours.tue.isOpen);
    this.validate = this.setValidator();
    this.workHours = this.inputWorkHours;
  }

  public onChangeWed() {
    this.inputWorkHours.wed.operatingHours.openTime = this.inputWorkHours.wed.isOpen
      ? this.inputWorkHours.wed.operatingHours.openTime
      : this.getDefaultTime();
    this.inputWorkHours.wed.operatingHours.closeTime = this.inputWorkHours.wed.isOpen
      ? this.inputWorkHours.wed.operatingHours.closeTime
      : this.getDefaultTime();
    let valid = this.validateOpenAndCloseTimes(
      this.workHours.wed.operatingHours.openTime,
      this.workHours.wed.operatingHours.closeTime
    );
    this.validator.wed = valid.result;
    this.inputWorkHours.wed.workHours = valid.workHours;
    this.setCloseDay(Constant.Date.DayIndex.Wed, this.inputWorkHours.wed.isOpen);
    this.validate = this.setValidator();
    this.workHours = this.inputWorkHours;
  }

  public onChangeThu() {
    this.inputWorkHours.thu.operatingHours.openTime = this.inputWorkHours.thu.isOpen
      ? this.inputWorkHours.thu.operatingHours.openTime
      : this.getDefaultTime();
    this.inputWorkHours.thu.operatingHours.closeTime = this.inputWorkHours.thu.isOpen
      ? this.inputWorkHours.thu.operatingHours.closeTime
      : this.getDefaultTime();
    let valid = this.validateOpenAndCloseTimes(
      this.workHours.thu.operatingHours.openTime,
      this.workHours.thu.operatingHours.closeTime
    );
    this.validator.thu = valid.result;
    this.inputWorkHours.thu.workHours = valid.workHours;
    this.setCloseDay(Constant.Date.DayIndex.Thu, this.inputWorkHours.thu.isOpen);
    this.validate = this.setValidator();
    this.workHours = this.inputWorkHours;
  }

  public onChangeFri() {
    this.inputWorkHours.fri.operatingHours.openTime = this.inputWorkHours.fri.isOpen
      ? this.inputWorkHours.fri.operatingHours.openTime
      : this.getDefaultTime();
    this.inputWorkHours.fri.operatingHours.closeTime = this.inputWorkHours.fri.isOpen
      ? this.inputWorkHours.fri.operatingHours.closeTime
      : this.getDefaultTime();
    let valid = this.validateOpenAndCloseTimes(
      this.workHours.fri.operatingHours.openTime,
      this.workHours.fri.operatingHours.closeTime
    );
    this.validator.fri = valid.result;
    this.inputWorkHours.fri.workHours = valid.workHours;
    this.setCloseDay(Constant.Date.DayIndex.Fri, this.inputWorkHours.fri.isOpen);
    this.validate = this.setValidator();
    this.workHours = this.inputWorkHours;
  }

  public onChangeSat() {
    this.inputWorkHours.sat.operatingHours.openTime = this.inputWorkHours.sat.isOpen
      ? this.inputWorkHours.sat.operatingHours.openTime
      : this.getDefaultTime();
    this.inputWorkHours.sat.operatingHours.closeTime = this.inputWorkHours.sat.isOpen
      ? this.inputWorkHours.sat.operatingHours.closeTime
      : this.getDefaultTime();
    let valid = this.validateOpenAndCloseTimes(
      this.workHours.sat.operatingHours.openTime,
      this.workHours.sat.operatingHours.closeTime
    );
    this.validator.sat = valid.result;
    this.inputWorkHours.sat.workHours = valid.workHours;
    this.setCloseDay(Constant.Date.DayIndex.Sat, this.inputWorkHours.sat.isOpen);
    this.validate = this.setValidator();
    this.workHours = this.inputWorkHours;
  }

  public onChangeSun() {
    this.inputWorkHours.sun.operatingHours.openTime = this.inputWorkHours.sun.isOpen
      ? this.inputWorkHours.sun.operatingHours.openTime
      : this.getDefaultTime();
    this.inputWorkHours.sun.operatingHours.closeTime = this.inputWorkHours.sun.isOpen
      ? this.inputWorkHours.sun.operatingHours.closeTime
      : this.getDefaultTime();
    let valid = this.validateOpenAndCloseTimes(
      this.workHours.sun.operatingHours.openTime,
      this.workHours.sun.operatingHours.closeTime
    );
    this.validator.sun = valid.result;
    this.inputWorkHours.sun.workHours = valid.workHours;
    this.setCloseDay(Constant.Date.DayIndex.Sun, this.inputWorkHours.sun.isOpen);
    this.validate = this.setValidator();
    this.workHours = this.inputWorkHours;
  }

  private setValidator(): boolean {
    return (
      this.validator.mon &&
      this.validator.tue &&
      this.validator.wed &&
      this.validator.thu &&
      this.validator.fri &&
      this.validator.sat &&
      this.validator.sun
    );
  }

  private getDefaultTime(): ITimeItem {
    return { hr: 0, min: 0, dayNightType: 'AM', strValue: '00:00:00' };
  }

  private validateOpenAndCloseTimes(open: ITimeItem, close: ITimeItem) {
    let tempDate: Date = new Date();
    let openTime: Date = this.global.date.transform.convertShopTimeZoneDateTimeItem(
      tempDate,
      this.timezone,
      open
    );
    let closeTime: Date = this.global.date.transform.convertShopTimeZoneDateTimeItem(
      tempDate,
      this.timezone,
      close
    );
    let is24Hours: boolean =
      open.hr === 0 &&
      open.min === 0 &&
      open.dayNightType === Constant.Date.DayNightType.DAY &&
      close.hr === 0 &&
      close.min === 0 &&
      close.dayNightType === Constant.Date.DayNightType.DAY;
    let workHours: number = is24Hours
      ? 24.0
      : this.global.date.differenceTime(openTime, closeTime, 2);
    let validator: boolean = is24Hours ? true : openTime < closeTime;

    return { result: validator, workHours: workHours };
  }

  public onClickCopy() {
    this.inputWorkHours.mon.operatingHours.openTime = this.copyValue.openTime;
    this.inputWorkHours.tue.operatingHours.openTime = this.copyValue.openTime;
    this.inputWorkHours.wed.operatingHours.openTime = this.copyValue.openTime;
    this.inputWorkHours.thu.operatingHours.openTime = this.copyValue.openTime;
    this.inputWorkHours.fri.operatingHours.openTime = this.copyValue.openTime;
    this.inputWorkHours.sat.operatingHours.openTime = this.copyValue.openTime;
    this.inputWorkHours.sun.operatingHours.openTime = this.copyValue.openTime;

    this.inputWorkHours.mon.operatingHours.closeTime = this.copyValue.closeTime;
    this.inputWorkHours.tue.operatingHours.closeTime = this.copyValue.closeTime;
    this.inputWorkHours.wed.operatingHours.closeTime = this.copyValue.closeTime;
    this.inputWorkHours.thu.operatingHours.closeTime = this.copyValue.closeTime;
    this.inputWorkHours.fri.operatingHours.closeTime = this.copyValue.closeTime;
    this.inputWorkHours.sat.operatingHours.closeTime = this.copyValue.closeTime;
    this.inputWorkHours.sun.operatingHours.closeTime = this.copyValue.closeTime;

    this.inputWorkHours.mon.isOpen = true;
    this.inputWorkHours.tue.isOpen = true;
    this.inputWorkHours.wed.isOpen = true;
    this.inputWorkHours.thu.isOpen = true;
    this.inputWorkHours.fri.isOpen = true;
    this.inputWorkHours.sat.isOpen = true;
    this.inputWorkHours.sun.isOpen = true;
    this.inputWorkHours.closeDay = [];
    this.workHoursChange.emit(this.inputWorkHours);
  }

  private setCloseDay(day: Constant.DayIndexType, isOpen: boolean) {
    let isExistedDay = this.inputWorkHours.closeDay.includes(day);
    if (!isExistedDay && !isOpen) {
      this.inputWorkHours.closeDay.push(day);
      this.inputWorkHours.closeDay.sort();
    }
    if (isExistedDay && isOpen) {
      let index = this.inputWorkHours.closeDay.indexOf(day);
      if (index !== -1) {
        this.inputWorkHours.closeDay.splice(index, 1);
      }
      this.inputWorkHours.closeDay.sort((a, b) => a - b);
    }
  }
}
