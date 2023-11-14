import { Component, Input, OnInit } from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import {
  ShopEmployeeManagementUserType,
  ShopEmployeeScheduleTimeType,
  ShopOperatingDailyType,
  ShopWorkHoursType,
  TimeItemType,
} from 'src/app/interface';
import { DateService } from 'src/app/service/global/date/date.service';
import { ShopEmployeeScheduleService } from 'src/app/service/shop/shop-employee-schedule/shop-employee-schedule.service';

@Component({
  selector: 'shop-employee-schedule-btn',
  templateUrl: './shop-employee-schedule-btn.component.html',
  styleUrls: ['./shop-employee-schedule-btn.component.scss'],
})
export class ShopEmployeeScheduleBtnComponent implements OnInit {
  @Input() dayIndex!: Constant.DayIndexType;
  @Input() type!: 'ThisWeek' | 'NextWeek';
  @Input() employee!: ShopEmployeeManagementUserType;
  @Input() operatingHours!: ShopWorkHoursType;
  @Input() scheduleTime!: ShopEmployeeScheduleTimeType;

  private _date!: string;
  constructor(
    private _dateSvc: DateService,
    private _scheduler: ShopEmployeeScheduleService
  ) {
    this._date = this._dateSvc.transform.formatLocalDateTime(new Date());
  }

  ngOnInit() {}

  dateTime(time: TimeItemType) {
    return this._dateSvc.transform.formatByTimeItem(this._date, time);
  }
  //This Week
  public async thisWeekSun() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Sun);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.thisWeeks[0],
        'date.title.sun',
        this.employee.roster.sun,
        this.operatingHours.mon.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.roster.sun = result;
        this.employee.roster.closeDay = result.isOpen
          ? (this.employee.roster.closeDay = this.employee.roster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Sun
            ))
          : this.employee.roster.closeDay.filter(c => c === Constant.Date.DayIndex.Sun).length > 0
          ? this.employee.roster.closeDay
          : [...this.employee.roster.closeDay, Constant.Date.DayIndex.Sun];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  public async thisWeekMon() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Mon);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.thisWeeks[1],
        'date.title.mon',
        this.employee.roster.mon,
        this.operatingHours.mon.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.roster.mon = result;
        this.employee.roster.closeDay = result.isOpen
          ? (this.employee.roster.closeDay = this.employee.roster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Mon
            ))
          : this.employee.roster.closeDay.filter(c => c === Constant.Date.DayIndex.Mon).length > 0
          ? this.employee.roster.closeDay
          : [...this.employee.roster.closeDay, Constant.Date.DayIndex.Mon];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  public async thisWeekTue() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Tue);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.thisWeeks[2],
        'date.title.tue',
        this.employee.roster.tue,
        this.operatingHours.tue.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.roster.tue = result;
        this.employee.roster.closeDay = result.isOpen
          ? (this.employee.roster.closeDay = this.employee.roster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Tue
            ))
          : this.employee.roster.closeDay.filter(c => c === Constant.Date.DayIndex.Tue).length > 0
          ? this.employee.roster.closeDay
          : [...this.employee.roster.closeDay, Constant.Date.DayIndex.Tue];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  public async thisWeekWed() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Wed);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.thisWeeks[3],
        'date.title.wed',
        this.employee.roster.wed,
        this.operatingHours.wed.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.roster.wed = result;
        this.employee.roster.closeDay = result.isOpen
          ? (this.employee.roster.closeDay = this.employee.roster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Wed
            ))
          : this.employee.roster.closeDay.filter(c => c === Constant.Date.DayIndex.Wed).length > 0
          ? this.employee.roster.closeDay
          : [...this.employee.roster.closeDay, Constant.Date.DayIndex.Wed];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  public async thisWeekThu() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Thu);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.thisWeeks[4],
        'date.title.thu',
        this.employee.roster.thu,
        this.operatingHours.thu.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.roster.thu = result;
        this.employee.roster.closeDay = result.isOpen
          ? (this.employee.roster.closeDay = this.employee.roster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Thu
            ))
          : this.employee.roster.closeDay.filter(c => c === Constant.Date.DayIndex.Thu).length > 0
          ? this.employee.roster.closeDay
          : [...this.employee.roster.closeDay, Constant.Date.DayIndex.Thu];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  public async thisWeekFri() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Fri);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.thisWeeks[5],
        'date.title.fri',
        this.employee.roster.fri,
        this.operatingHours.fri.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.roster.fri = result;
        this.employee.roster.closeDay = result.isOpen
          ? (this.employee.roster.closeDay = this.employee.roster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Fri
            ))
          : this.employee.roster.closeDay.filter(c => c === Constant.Date.DayIndex.Fri).length > 0
          ? this.employee.roster.closeDay
          : [...this.employee.roster.closeDay, Constant.Date.DayIndex.Fri];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  public async thisWeekSat() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Sat);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.thisWeeks[6],
        'date.title.sat',
        this.employee.roster.sat,
        this.operatingHours.sat.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.roster.sat = result;
        this.employee.roster.closeDay = result.isOpen
          ? (this.employee.roster.closeDay = this.employee.roster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Sat
            ))
          : this.employee.roster.closeDay.filter(c => c === Constant.Date.DayIndex.Sat).length > 0
          ? this.employee.roster.closeDay
          : [...this.employee.roster.closeDay, Constant.Date.DayIndex.Sat];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  //Next Week
  public async nextWeekSun() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Sun);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.nextWeeks[0],
        'date.title.sun',
        this.employee.nextWeekRoster.sun,
        this.operatingHours.mon.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.nextWeekRoster.sun = result;
        this.employee.nextWeekRoster.closeDay = result.isOpen
          ? (this.employee.nextWeekRoster.closeDay = this.employee.nextWeekRoster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Sun
            ))
          : this.employee.nextWeekRoster.closeDay.filter(c => c === Constant.Date.DayIndex.Sun)
              .length > 0
          ? this.employee.nextWeekRoster.closeDay
          : [...this.employee.nextWeekRoster.closeDay, Constant.Date.DayIndex.Sun];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  public async nextWeekMon() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Mon);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.nextWeeks[1],
        'date.title.mon',
        this.employee.nextWeekRoster.mon,
        this.operatingHours.mon.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.nextWeekRoster.mon = result;
        this.employee.nextWeekRoster.closeDay = result.isOpen
          ? (this.employee.nextWeekRoster.closeDay = this.employee.nextWeekRoster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Mon
            ))
          : this.employee.nextWeekRoster.closeDay.filter(c => c === Constant.Date.DayIndex.Mon)
              .length > 0
          ? this.employee.nextWeekRoster.closeDay
          : [...this.employee.nextWeekRoster.closeDay, Constant.Date.DayIndex.Mon];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  public async nextWeekTue() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Tue);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.nextWeeks[2],
        'date.title.tue',
        this.employee.nextWeekRoster.tue,
        this.operatingHours.tue.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.nextWeekRoster.tue = result;
        this.employee.nextWeekRoster.closeDay = result.isOpen
          ? (this.employee.nextWeekRoster.closeDay = this.employee.nextWeekRoster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Tue
            ))
          : this.employee.nextWeekRoster.closeDay.filter(c => c === Constant.Date.DayIndex.Tue)
              .length > 0
          ? this.employee.nextWeekRoster.closeDay
          : [...this.employee.nextWeekRoster.closeDay, Constant.Date.DayIndex.Tue];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  public async nextWeekWed() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Wed);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.nextWeeks[3],
        'date.title.wed',
        this.employee.nextWeekRoster.wed,
        this.operatingHours.wed.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.nextWeekRoster.wed = result;
        this.employee.nextWeekRoster.closeDay = result.isOpen
          ? (this.employee.nextWeekRoster.closeDay = this.employee.nextWeekRoster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Wed
            ))
          : this.employee.nextWeekRoster.closeDay.filter(c => c === Constant.Date.DayIndex.Wed)
              .length > 0
          ? this.employee.nextWeekRoster.closeDay
          : [...this.employee.nextWeekRoster.closeDay, Constant.Date.DayIndex.Wed];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  public async nextWeekThu() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Thu);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.nextWeeks[4],
        'date.title.thu',
        this.employee.nextWeekRoster.thu,
        this.operatingHours.thu.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.nextWeekRoster.thu = result;
        this.employee.nextWeekRoster.closeDay = result.isOpen
          ? (this.employee.nextWeekRoster.closeDay = this.employee.nextWeekRoster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Thu
            ))
          : this.employee.nextWeekRoster.closeDay.filter(c => c === Constant.Date.DayIndex.Thu)
              .length > 0
          ? this.employee.nextWeekRoster.closeDay
          : [...this.employee.nextWeekRoster.closeDay, Constant.Date.DayIndex.Thu];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  public async nextWeekFri() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Fri);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.nextWeeks[5],
        'date.title.fri',
        this.employee.nextWeekRoster.fri,
        this.operatingHours.fri.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.nextWeekRoster.fri = result;
        this.employee.nextWeekRoster.closeDay = result.isOpen
          ? (this.employee.nextWeekRoster.closeDay = this.employee.nextWeekRoster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Fri
            ))
          : this.employee.nextWeekRoster.closeDay.filter(c => c === Constant.Date.DayIndex.Fri)
              .length > 0
          ? this.employee.nextWeekRoster.closeDay
          : [...this.employee.nextWeekRoster.closeDay, Constant.Date.DayIndex.Fri];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  public async nextWeekSat() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Sat);
    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        this.scheduleTime.nextWeeks[6],
        'date.title.sat',
        this.employee.nextWeekRoster.sat,
        this.operatingHours.sat.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);
      if (result !== null) {
        this.employee.nextWeekRoster.sat = result;
        this.employee.nextWeekRoster.closeDay = result.isOpen
          ? (this.employee.nextWeekRoster.closeDay = this.employee.nextWeekRoster.closeDay.filter(
              c => c !== Constant.Date.DayIndex.Sat
            ))
          : this.employee.nextWeekRoster.closeDay.filter(c => c === Constant.Date.DayIndex.Sat)
              .length > 0
          ? this.employee.nextWeekRoster.closeDay
          : [...this.employee.nextWeekRoster.closeDay, Constant.Date.DayIndex.Sat];
        console.log(this.employee);
        await this._scheduler.update(this.employee);
      }
    }
  }

  private isOpenDay(dayIndex: Constant.DayIndexType) {
    switch (dayIndex) {
      case Constant.Date.DayIndex.Mon:
        return this.operatingHours.mon.isOpen;
      case Constant.Date.DayIndex.Tue:
        return this.operatingHours.tue.isOpen;
      case Constant.Date.DayIndex.Wed:
        return this.operatingHours.wed.isOpen;
      case Constant.Date.DayIndex.Thu:
        return this.operatingHours.thu.isOpen;
      case Constant.Date.DayIndex.Fri:
        return this.operatingHours.fri.isOpen;
      case Constant.Date.DayIndex.Sat:
        return this.operatingHours.sat.isOpen;
      case Constant.Date.DayIndex.Sun:
        return this.operatingHours.sun.isOpen;
    }
  }

  private fullName() {
    return this.employee.firstName + ' ' + this.employee.lastName;
  }

  private async handleDismiss(modal: HTMLIonModalElement) {
    const result = await modal.onDidDismiss();
    if (result?.data !== undefined) {
      const roster = result?.data as ShopOperatingDailyType;
      return roster;
    } else {
      return null;
    }
  }
}
