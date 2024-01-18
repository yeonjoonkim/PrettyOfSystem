import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ShopEmployeeManagementUserType, ShopEmployeeScheduleTimeType } from 'src/app/interface';
import { ShopEmployeeScheduleService } from 'src/app/service/shop/shop-employee-schedule/shop-employee-schedule.service';
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'shop-employee-schedule',
  templateUrl: './shop-employee-schedule.component.html',
  styleUrls: ['./shop-employee-schedule.component.scss'],
})
export class ShopEmployeeScheduleComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public scheduledEmployees!: ShopEmployeeManagementUserType[];
  public schedulerTime!: ShopEmployeeScheduleTimeType;
  public type: Constant.WeekType = Constant.Date.WeekType.ThisWeek;
  constructor(private _employeeScheduler: ShopEmployeeScheduleService) {}

  ngOnInit() {
    this._employeeScheduler.scheduledEmployees$.pipe(takeUntil(this._destroy$)).subscribe(emp => {
      this.scheduledEmployees = emp;
    });
    this._employeeScheduler.scheduledTime$.pipe(takeUntil(this._destroy$)).subscribe(time => {
      if (time !== null) {
        this.schedulerTime = time;
      }
    });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  loading() {
    return this.scheduledEmployees === undefined && this.schedulerTime == undefined;
  }
}
