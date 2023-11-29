import { Component, Input, OnInit } from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import {
  ShopEmployeeManagementUserType,
  ShopEmployeeScheduleChangeResult,
  ShopEmployeeScheduleTimeType,
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
  @Input() type!: 'ThisWeek' | 'NextWeek' | 'TwoWeek' | 'ThreeWeek' | 'FourWeek';
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

  public async sun() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Sun);
    const day = this.getDay()[0];
    const roster = this.getRoster();

    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        day,
        'date.title.sun',
        roster.sun,
        this.operatingHours.sun.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);

      if (result !== null) {
        if (!result.applyAllWeek) {
          if (this.type === 'ThisWeek') {
            this.employee.roster.sun = result.roster;
            this.employee.roster.closeDay = result.roster.isOpen
              ? this.employee.roster.closeDay.filter(c => c !== 0)
              : this.employee.roster.closeDay.includes(0)
              ? this.employee.roster.closeDay
              : [...this.employee.roster.closeDay, 0];
          }
          if (this.type === 'NextWeek') {
            this.employee.nextWeekRoster.sun = result.roster;
            this.employee.nextWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 0)
              : this.employee.nextWeekRoster.closeDay.includes(0)
              ? this.employee.nextWeekRoster.closeDay
              : [...this.employee.nextWeekRoster.closeDay, 0];
          }
          if (this.type === 'TwoWeek') {
            this.employee.nextTwoWeekRoster.sun = result.roster;
            this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 0)
              : this.employee.nextTwoWeekRoster.closeDay.includes(0)
              ? this.employee.nextTwoWeekRoster.closeDay
              : [...this.employee.nextTwoWeekRoster.closeDay, 0];
          }
          if (this.type === 'ThreeWeek') {
            this.employee.nextThreeWeekRoster.sun = result.roster;
            this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 0)
              : this.employee.nextThreeWeekRoster.closeDay.includes(0)
              ? this.employee.nextThreeWeekRoster.closeDay
              : [...this.employee.nextThreeWeekRoster.closeDay, 0];
          }
          if (this.type === 'FourWeek') {
            this.employee.nextFourWeekRoster.sun = result.roster;
            this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 0)
              : this.employee.nextFourWeekRoster.closeDay.includes(0)
              ? this.employee.nextFourWeekRoster.closeDay
              : [...this.employee.nextFourWeekRoster.closeDay, 0];
          }
        } else {
          //ThisWeek
          this.employee.roster.sun = result.roster;
          this.employee.roster.closeDay = result.roster.isOpen
            ? this.employee.roster.closeDay.filter(c => c !== 0)
            : this.employee.roster.closeDay.includes(0)
            ? this.employee.roster.closeDay
            : [...this.employee.roster.closeDay, 0];
          //NextWeek
          this.employee.nextWeekRoster.sun = result.roster;
          this.employee.nextWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 0)
            : this.employee.nextWeekRoster.closeDay.includes(0)
            ? this.employee.nextWeekRoster.closeDay
            : [...this.employee.nextWeekRoster.closeDay, 0];
          //Two Week
          this.employee.nextTwoWeekRoster.sun = result.roster;
          this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 0)
            : this.employee.nextTwoWeekRoster.closeDay.includes(0)
            ? this.employee.nextTwoWeekRoster.closeDay
            : [...this.employee.nextTwoWeekRoster.closeDay, 0];
          //Three Week
          this.employee.nextThreeWeekRoster.sun = result.roster;
          this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 0)
            : this.employee.nextThreeWeekRoster.closeDay.includes(0)
            ? this.employee.nextThreeWeekRoster.closeDay
            : [...this.employee.nextThreeWeekRoster.closeDay, 0];
          //Four Week
          this.employee.nextFourWeekRoster.sun = result.roster;
          this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 0)
            : this.employee.nextFourWeekRoster.closeDay.includes(0)
            ? this.employee.nextFourWeekRoster.closeDay
            : [...this.employee.nextFourWeekRoster.closeDay, 0];
        }

        await this._scheduler.update(this.employee);
      }
    }
  }

  public async mon() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Mon);
    const day = this.getDay()[1];
    const roster = this.getRoster();

    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        day,
        'date.title.mon',
        roster.mon,
        this.operatingHours.tue.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);

      if (result !== null) {
        if (!result.applyAllWeek) {
          if (this.type === 'ThisWeek') {
            this.employee.roster.mon = result.roster;
            this.employee.roster.closeDay = result.roster.isOpen
              ? this.employee.roster.closeDay.filter(c => c !== 1)
              : this.employee.roster.closeDay.includes(1)
              ? this.employee.roster.closeDay
              : [...this.employee.roster.closeDay, 1];
          }
          if (this.type === 'NextWeek') {
            this.employee.nextWeekRoster.mon = result.roster;
            this.employee.nextWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 1)
              : this.employee.nextWeekRoster.closeDay.includes(1)
              ? this.employee.nextWeekRoster.closeDay
              : [...this.employee.nextWeekRoster.closeDay, 1];
          }
          if (this.type === 'TwoWeek') {
            this.employee.nextTwoWeekRoster.mon = result.roster;
            this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 1)
              : this.employee.nextTwoWeekRoster.closeDay.includes(1)
              ? this.employee.nextTwoWeekRoster.closeDay
              : [...this.employee.nextTwoWeekRoster.closeDay, 1];
          }
          if (this.type === 'ThreeWeek') {
            this.employee.nextThreeWeekRoster.mon = result.roster;
            this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 1)
              : this.employee.nextThreeWeekRoster.closeDay.includes(1)
              ? this.employee.nextThreeWeekRoster.closeDay
              : [...this.employee.nextThreeWeekRoster.closeDay, 1];
          }
          if (this.type === 'FourWeek') {
            this.employee.nextFourWeekRoster.mon = result.roster;
            this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 1)
              : this.employee.nextFourWeekRoster.closeDay.includes(1)
              ? this.employee.nextFourWeekRoster.closeDay
              : [...this.employee.nextFourWeekRoster.closeDay, 1];
          }
        } else {
          //ThisWeek
          this.employee.roster.mon = result.roster;
          this.employee.roster.closeDay = result.roster.isOpen
            ? this.employee.roster.closeDay.filter(c => c !== 1)
            : this.employee.roster.closeDay.includes(1)
            ? this.employee.roster.closeDay
            : [...this.employee.roster.closeDay, 1];
          //NextWeek
          this.employee.nextWeekRoster.mon = result.roster;
          this.employee.nextWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 1)
            : this.employee.nextWeekRoster.closeDay.includes(1)
            ? this.employee.nextWeekRoster.closeDay
            : [...this.employee.nextWeekRoster.closeDay, 1];
          //Two Week
          this.employee.nextTwoWeekRoster.mon = result.roster;
          this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 1)
            : this.employee.nextTwoWeekRoster.closeDay.includes(1)
            ? this.employee.nextTwoWeekRoster.closeDay
            : [...this.employee.nextTwoWeekRoster.closeDay, 1];
          //Three Week
          this.employee.nextThreeWeekRoster.mon = result.roster;
          this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 1)
            : this.employee.nextThreeWeekRoster.closeDay.includes(1)
            ? this.employee.nextThreeWeekRoster.closeDay
            : [...this.employee.nextThreeWeekRoster.closeDay, 1];
          //Four Week
          this.employee.nextFourWeekRoster.mon = result.roster;
          this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 1)
            : this.employee.nextFourWeekRoster.closeDay.includes(1)
            ? this.employee.nextFourWeekRoster.closeDay
            : [...this.employee.nextFourWeekRoster.closeDay, 1];
        }

        await this._scheduler.update(this.employee);
      }
    }
  }

  public async tue() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Tue);
    const day = this.getDay()[2];
    const roster = this.getRoster();

    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        day,
        'date.title.tue',
        roster.tue,
        this.operatingHours.tue.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);

      if (result !== null) {
        if (!result.applyAllWeek) {
          if (this.type === 'ThisWeek') {
            this.employee.roster.tue = result.roster;
            this.employee.roster.closeDay = result.roster.isOpen
              ? this.employee.roster.closeDay.filter(c => c !== 2)
              : this.employee.roster.closeDay.includes(2)
              ? this.employee.roster.closeDay
              : [...this.employee.roster.closeDay, 2];
          }
          if (this.type === 'NextWeek') {
            this.employee.nextWeekRoster.tue = result.roster;
            this.employee.nextWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 2)
              : this.employee.nextWeekRoster.closeDay.includes(2)
              ? this.employee.nextWeekRoster.closeDay
              : [...this.employee.nextWeekRoster.closeDay, 2];
          }
          if (this.type === 'TwoWeek') {
            this.employee.nextTwoWeekRoster.tue = result.roster;
            this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 2)
              : this.employee.nextTwoWeekRoster.closeDay.includes(2)
              ? this.employee.nextTwoWeekRoster.closeDay
              : [...this.employee.nextTwoWeekRoster.closeDay, 2];
          }
          if (this.type === 'ThreeWeek') {
            this.employee.nextThreeWeekRoster.tue = result.roster;
            this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 2)
              : this.employee.nextThreeWeekRoster.closeDay.includes(2)
              ? this.employee.nextThreeWeekRoster.closeDay
              : [...this.employee.nextThreeWeekRoster.closeDay, 2];
          }
          if (this.type === 'FourWeek') {
            this.employee.nextFourWeekRoster.tue = result.roster;
            this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 2)
              : this.employee.nextFourWeekRoster.closeDay.includes(2)
              ? this.employee.nextFourWeekRoster.closeDay
              : [...this.employee.nextFourWeekRoster.closeDay, 2];
          }
        } else {
          //ThisWeek
          this.employee.roster.tue = result.roster;
          this.employee.roster.closeDay = result.roster.isOpen
            ? this.employee.roster.closeDay.filter(c => c !== 2)
            : this.employee.roster.closeDay.includes(2)
            ? this.employee.roster.closeDay
            : [...this.employee.roster.closeDay, 2];
          //NextWeek
          this.employee.nextWeekRoster.tue = result.roster;
          this.employee.nextWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 2)
            : this.employee.nextWeekRoster.closeDay.includes(2)
            ? this.employee.nextWeekRoster.closeDay
            : [...this.employee.nextWeekRoster.closeDay, 2];
          //Two Week
          this.employee.nextTwoWeekRoster.tue = result.roster;
          this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 2)
            : this.employee.nextTwoWeekRoster.closeDay.includes(2)
            ? this.employee.nextTwoWeekRoster.closeDay
            : [...this.employee.nextTwoWeekRoster.closeDay, 2];
          //Three Week
          this.employee.nextThreeWeekRoster.tue = result.roster;
          this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 2)
            : this.employee.nextThreeWeekRoster.closeDay.includes(2)
            ? this.employee.nextThreeWeekRoster.closeDay
            : [...this.employee.nextThreeWeekRoster.closeDay, 2];
          //Four Week
          this.employee.nextFourWeekRoster.tue = result.roster;
          this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 2)
            : this.employee.nextFourWeekRoster.closeDay.includes(2)
            ? this.employee.nextFourWeekRoster.closeDay
            : [...this.employee.nextFourWeekRoster.closeDay, 2];
        }

        await this._scheduler.update(this.employee);
      }
    }
  }

  public async wed() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Wed);
    const day = this.getDay()[3];
    const roster = this.getRoster();

    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        day,
        'date.title.wed',
        roster.wed,
        this.operatingHours.wed.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);

      if (result !== null) {
        if (!result.applyAllWeek) {
          if (this.type === 'ThisWeek') {
            this.employee.roster.wed = result.roster;
            this.employee.roster.closeDay = result.roster.isOpen
              ? this.employee.roster.closeDay.filter(c => c !== 3)
              : this.employee.roster.closeDay.includes(3)
              ? this.employee.roster.closeDay
              : [...this.employee.roster.closeDay, 3];
          }
          if (this.type === 'NextWeek') {
            this.employee.nextWeekRoster.wed = result.roster;
            this.employee.nextWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 3)
              : this.employee.nextWeekRoster.closeDay.includes(3)
              ? this.employee.nextWeekRoster.closeDay
              : [...this.employee.nextWeekRoster.closeDay, 3];
          }
          if (this.type === 'TwoWeek') {
            this.employee.nextTwoWeekRoster.wed = result.roster;
            this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 3)
              : this.employee.nextTwoWeekRoster.closeDay.includes(3)
              ? this.employee.nextTwoWeekRoster.closeDay
              : [...this.employee.nextTwoWeekRoster.closeDay, 3];
          }
          if (this.type === 'ThreeWeek') {
            this.employee.nextThreeWeekRoster.wed = result.roster;
            this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 3)
              : this.employee.nextThreeWeekRoster.closeDay.includes(3)
              ? this.employee.nextThreeWeekRoster.closeDay
              : [...this.employee.nextThreeWeekRoster.closeDay, 3];
          }
          if (this.type === 'FourWeek') {
            this.employee.nextFourWeekRoster.wed = result.roster;
            this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 3)
              : this.employee.nextFourWeekRoster.closeDay.includes(3)
              ? this.employee.nextFourWeekRoster.closeDay
              : [...this.employee.nextFourWeekRoster.closeDay, 3];
          }
        } else {
          //ThisWeek
          this.employee.roster.wed = result.roster;
          this.employee.roster.closeDay = result.roster.isOpen
            ? this.employee.roster.closeDay.filter(c => c !== 3)
            : this.employee.roster.closeDay.includes(3)
            ? this.employee.roster.closeDay
            : [...this.employee.roster.closeDay, 3];
          //NextWeek
          this.employee.nextWeekRoster.wed = result.roster;
          this.employee.nextWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 3)
            : this.employee.nextWeekRoster.closeDay.includes(3)
            ? this.employee.nextWeekRoster.closeDay
            : [...this.employee.nextWeekRoster.closeDay, 3];
          //Two Week
          this.employee.nextTwoWeekRoster.wed = result.roster;
          this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 3)
            : this.employee.nextTwoWeekRoster.closeDay.includes(3)
            ? this.employee.nextTwoWeekRoster.closeDay
            : [...this.employee.nextTwoWeekRoster.closeDay, 3];
          //Three Week
          this.employee.nextThreeWeekRoster.wed = result.roster;
          this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 3)
            : this.employee.nextThreeWeekRoster.closeDay.includes(3)
            ? this.employee.nextThreeWeekRoster.closeDay
            : [...this.employee.nextThreeWeekRoster.closeDay, 3];
          //Four Week
          this.employee.nextFourWeekRoster.wed = result.roster;
          this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 3)
            : this.employee.nextFourWeekRoster.closeDay.includes(3)
            ? this.employee.nextFourWeekRoster.closeDay
            : [...this.employee.nextFourWeekRoster.closeDay, 3];
        }

        await this._scheduler.update(this.employee);
      }
    }
  }

  public async thu() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Thu);
    const day = this.getDay()[4];
    const roster = this.getRoster();

    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        day,
        'date.title.thu',
        roster.thu,
        this.operatingHours.thu.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);

      if (result !== null) {
        if (!result.applyAllWeek) {
          if (this.type === 'ThisWeek') {
            this.employee.roster.thu = result.roster;
            this.employee.roster.closeDay = result.roster.isOpen
              ? this.employee.roster.closeDay.filter(c => c !== 4)
              : this.employee.roster.closeDay.includes(4)
              ? this.employee.roster.closeDay
              : [...this.employee.roster.closeDay, 4];
          }
          if (this.type === 'NextWeek') {
            this.employee.nextWeekRoster.thu = result.roster;
            this.employee.nextWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 4)
              : this.employee.nextWeekRoster.closeDay.includes(4)
              ? this.employee.nextWeekRoster.closeDay
              : [...this.employee.nextWeekRoster.closeDay, 4];
          }
          if (this.type === 'TwoWeek') {
            this.employee.nextTwoWeekRoster.thu = result.roster;
            this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 4)
              : this.employee.nextTwoWeekRoster.closeDay.includes(4)
              ? this.employee.nextTwoWeekRoster.closeDay
              : [...this.employee.nextTwoWeekRoster.closeDay, 4];
          }
          if (this.type === 'ThreeWeek') {
            this.employee.nextThreeWeekRoster.thu = result.roster;
            this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 4)
              : this.employee.nextThreeWeekRoster.closeDay.includes(4)
              ? this.employee.nextThreeWeekRoster.closeDay
              : [...this.employee.nextThreeWeekRoster.closeDay, 4];
          }
          if (this.type === 'FourWeek') {
            this.employee.nextFourWeekRoster.thu = result.roster;
            this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 4)
              : this.employee.nextFourWeekRoster.closeDay.includes(4)
              ? this.employee.nextFourWeekRoster.closeDay
              : [...this.employee.nextFourWeekRoster.closeDay, 4];
          }
        } else {
          //ThisWeek
          this.employee.roster.thu = result.roster;
          this.employee.roster.closeDay = result.roster.isOpen
            ? this.employee.roster.closeDay.filter(c => c !== 4)
            : this.employee.roster.closeDay.includes(4)
            ? this.employee.roster.closeDay
            : [...this.employee.roster.closeDay, 4];
          //NextWeek
          this.employee.nextWeekRoster.thu = result.roster;
          this.employee.nextWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 4)
            : this.employee.nextWeekRoster.closeDay.includes(4)
            ? this.employee.nextWeekRoster.closeDay
            : [...this.employee.nextWeekRoster.closeDay, 4];
          //Two Week
          this.employee.nextTwoWeekRoster.thu = result.roster;
          this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 4)
            : this.employee.nextTwoWeekRoster.closeDay.includes(4)
            ? this.employee.nextTwoWeekRoster.closeDay
            : [...this.employee.nextTwoWeekRoster.closeDay, 4];
          //Three Week
          this.employee.nextThreeWeekRoster.thu = result.roster;
          this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 4)
            : this.employee.nextThreeWeekRoster.closeDay.includes(4)
            ? this.employee.nextThreeWeekRoster.closeDay
            : [...this.employee.nextThreeWeekRoster.closeDay, 4];
          //Four Week
          this.employee.nextFourWeekRoster.thu = result.roster;
          this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 4)
            : this.employee.nextFourWeekRoster.closeDay.includes(4)
            ? this.employee.nextFourWeekRoster.closeDay
            : [...this.employee.nextFourWeekRoster.closeDay, 4];
        }

        await this._scheduler.update(this.employee);
      }
    }
  }

  public async fri() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Fri);
    const day = this.getDay()[5];
    const roster = this.getRoster();

    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        day,
        'date.title.fri',
        roster.fri,
        this.operatingHours.fri.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);

      if (result !== null) {
        if (!result.applyAllWeek) {
          if (this.type === 'ThisWeek') {
            this.employee.roster.fri = result.roster;
            this.employee.roster.closeDay = result.roster.isOpen
              ? this.employee.roster.closeDay.filter(c => c !== 5)
              : this.employee.roster.closeDay.includes(5)
              ? this.employee.roster.closeDay
              : [...this.employee.roster.closeDay, 5];
          }
          if (this.type === 'NextWeek') {
            this.employee.nextWeekRoster.fri = result.roster;
            this.employee.nextWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 5)
              : this.employee.nextWeekRoster.closeDay.includes(5)
              ? this.employee.nextWeekRoster.closeDay
              : [...this.employee.nextWeekRoster.closeDay, 5];
          }
          if (this.type === 'TwoWeek') {
            this.employee.nextTwoWeekRoster.fri = result.roster;
            this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 5)
              : this.employee.nextTwoWeekRoster.closeDay.includes(5)
              ? this.employee.nextTwoWeekRoster.closeDay
              : [...this.employee.nextTwoWeekRoster.closeDay, 5];
          }
          if (this.type === 'ThreeWeek') {
            this.employee.nextThreeWeekRoster.fri = result.roster;
            this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 5)
              : this.employee.nextThreeWeekRoster.closeDay.includes(5)
              ? this.employee.nextThreeWeekRoster.closeDay
              : [...this.employee.nextThreeWeekRoster.closeDay, 5];
          }
          if (this.type === 'FourWeek') {
            this.employee.nextFourWeekRoster.fri = result.roster;
            this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 5)
              : this.employee.nextFourWeekRoster.closeDay.includes(5)
              ? this.employee.nextFourWeekRoster.closeDay
              : [...this.employee.nextFourWeekRoster.closeDay, 5];
          }
        } else {
          //ThisWeek
          this.employee.roster.fri = result.roster;
          this.employee.roster.closeDay = result.roster.isOpen
            ? this.employee.roster.closeDay.filter(c => c !== 5)
            : this.employee.roster.closeDay.includes(5)
            ? this.employee.roster.closeDay
            : [...this.employee.roster.closeDay, 5];
          //NextWeek
          this.employee.nextWeekRoster.fri = result.roster;
          this.employee.nextWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 5)
            : this.employee.nextWeekRoster.closeDay.includes(5)
            ? this.employee.nextWeekRoster.closeDay
            : [...this.employee.nextWeekRoster.closeDay, 5];
          //Two Week
          this.employee.nextTwoWeekRoster.fri = result.roster;
          this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 5)
            : this.employee.nextTwoWeekRoster.closeDay.includes(5)
            ? this.employee.nextTwoWeekRoster.closeDay
            : [...this.employee.nextTwoWeekRoster.closeDay, 5];
          //Three Week
          this.employee.nextThreeWeekRoster.fri = result.roster;
          this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 5)
            : this.employee.nextThreeWeekRoster.closeDay.includes(5)
            ? this.employee.nextThreeWeekRoster.closeDay
            : [...this.employee.nextThreeWeekRoster.closeDay, 5];
          //Four Week
          this.employee.nextFourWeekRoster.fri = result.roster;
          this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 5)
            : this.employee.nextFourWeekRoster.closeDay.includes(5)
            ? this.employee.nextFourWeekRoster.closeDay
            : [...this.employee.nextFourWeekRoster.closeDay, 5];
        }

        await this._scheduler.update(this.employee);
      }
    }
  }

  public async sat() {
    const isShopOpen = this.isOpenDay(Constant.Date.DayIndex.Sat);
    const day = this.getDay()[6];
    const roster = this.getRoster();

    if (isShopOpen) {
      const modal = await this._scheduler.modal.build(
        this.fullName(),
        day,
        'date.title.sat',
        roster.sat,
        this.operatingHours.sat.operatingHours
      );
      await modal.present();
      const result = await this.handleDismiss(modal);

      if (result !== null) {
        if (!result.applyAllWeek) {
          if (this.type === 'ThisWeek') {
            this.employee.roster.sat = result.roster;
            this.employee.roster.closeDay = result.roster.isOpen
              ? this.employee.roster.closeDay.filter(c => c !== 6)
              : this.employee.roster.closeDay.includes(6)
              ? this.employee.roster.closeDay
              : [...this.employee.roster.closeDay, 6];
          }
          if (this.type === 'NextWeek') {
            this.employee.nextWeekRoster.sat = result.roster;
            this.employee.nextWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 6)
              : this.employee.nextWeekRoster.closeDay.includes(6)
              ? this.employee.nextWeekRoster.closeDay
              : [...this.employee.nextWeekRoster.closeDay, 6];
          }
          if (this.type === 'TwoWeek') {
            this.employee.nextTwoWeekRoster.sat = result.roster;
            this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 6)
              : this.employee.nextTwoWeekRoster.closeDay.includes(6)
              ? this.employee.nextTwoWeekRoster.closeDay
              : [...this.employee.nextTwoWeekRoster.closeDay, 6];
          }
          if (this.type === 'ThreeWeek') {
            this.employee.nextThreeWeekRoster.sat = result.roster;
            this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 6)
              : this.employee.nextThreeWeekRoster.closeDay.includes(6)
              ? this.employee.nextThreeWeekRoster.closeDay
              : [...this.employee.nextThreeWeekRoster.closeDay, 6];
          }
          if (this.type === 'FourWeek') {
            this.employee.nextFourWeekRoster.sat = result.roster;
            this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
              ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 6)
              : this.employee.nextFourWeekRoster.closeDay.includes(6)
              ? this.employee.nextFourWeekRoster.closeDay
              : [...this.employee.nextFourWeekRoster.closeDay, 6];
          }
        } else {
          //ThisWeek
          this.employee.roster.sat = result.roster;
          this.employee.roster.closeDay = result.roster.isOpen
            ? this.employee.roster.closeDay.filter(c => c !== 6)
            : this.employee.roster.closeDay.includes(6)
            ? this.employee.roster.closeDay
            : [...this.employee.roster.closeDay, 6];
          //NextWeek
          this.employee.nextWeekRoster.sat = result.roster;
          this.employee.nextWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextWeekRoster.closeDay.filter(c => c !== 6)
            : this.employee.nextWeekRoster.closeDay.includes(6)
            ? this.employee.nextWeekRoster.closeDay
            : [...this.employee.nextWeekRoster.closeDay, 6];
          //Two Week
          this.employee.nextTwoWeekRoster.sat = result.roster;
          this.employee.nextTwoWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextTwoWeekRoster.closeDay.filter(c => c !== 6)
            : this.employee.nextTwoWeekRoster.closeDay.includes(6)
            ? this.employee.nextTwoWeekRoster.closeDay
            : [...this.employee.nextTwoWeekRoster.closeDay, 6];
          //Three Week
          this.employee.nextThreeWeekRoster.sat = result.roster;
          this.employee.nextThreeWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextThreeWeekRoster.closeDay.filter(c => c !== 6)
            : this.employee.nextThreeWeekRoster.closeDay.includes(6)
            ? this.employee.nextThreeWeekRoster.closeDay
            : [...this.employee.nextThreeWeekRoster.closeDay, 6];
          //Four Week
          this.employee.nextFourWeekRoster.sat = result.roster;
          this.employee.nextFourWeekRoster.closeDay = result.roster.isOpen
            ? this.employee.nextFourWeekRoster.closeDay.filter(c => c !== 6)
            : this.employee.nextFourWeekRoster.closeDay.includes(6)
            ? this.employee.nextFourWeekRoster.closeDay
            : [...this.employee.nextFourWeekRoster.closeDay, 6];
        }

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

  private getDay() {
    switch (this.type) {
      case 'ThisWeek':
        return this.scheduleTime.thisWeeks;
      case 'NextWeek':
        return this.scheduleTime.nextWeeks;
      case 'TwoWeek':
        return this.scheduleTime.twoWeeks;
      case 'ThreeWeek':
        return this.scheduleTime.threeWeeks;
      case 'FourWeek':
        return this.scheduleTime.fourWeeks;
    }
  }

  private getRoster() {
    switch (this.type) {
      case 'ThisWeek':
        return this.employee.roster;
      case 'NextWeek':
        return this.employee.nextWeekRoster;
      case 'TwoWeek':
        return this.employee.nextTwoWeekRoster;
      case 'ThreeWeek':
        return this.employee.nextThreeWeekRoster;
      case 'FourWeek':
        return this.employee.nextFourWeekRoster;
    }
  }

  private fullName() {
    return this.employee.firstName + ' ' + this.employee.lastName;
  }

  private async handleDismiss(modal: HTMLIonModalElement) {
    const result = await modal.onDidDismiss();
    if (result?.data !== undefined) {
      const data = result?.data as ShopEmployeeScheduleChangeResult;
      return data;
    } else {
      return null;
    }
  }
}
