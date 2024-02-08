import { Injectable, WritableSignal, computed, inject, signal } from '@angular/core';
import { ShopOperatingBreakType, TimeItemType } from 'src/app/interface';
import { ShopEmployeeRosterService } from '../shop-employee-roster/shop-employee-roster.service';
import { cloneDeep } from 'lodash-es';

const nullable: ShopOperatingBreakType = null as unknown as ShopOperatingBreakType;
const nullabelTimeItem: TimeItemType = null as unknown as TimeItemType;
@Injectable({
  providedIn: 'root',
})
export class ShopEmployeeUpdateBreakService {
  private _emp = inject(ShopEmployeeRosterService);

  private before: WritableSignal<ShopOperatingBreakType> = signal(nullable);
  public after: WritableSignal<ShopOperatingBreakType> = signal(nullable);

  //Setting
  public loaded = computed(() => {
    return (
      this._emp.loaded() &&
      this.before() !== undefined &&
      this.before() !== null &&
      this.after() !== undefined &&
      this.after() !== null
    );
  });

  public breakStartTimeItem = computed(() => {
    return this.after().start;
  });

  public breakEndTimeItem = computed(() => {
    return this.after().end;
  });

  public isShop24Hours = this._emp.isShop24Hours();
  public is24Hours = this._emp.is24Hours();
  public employeeStartTimeItem = signal(nullabelTimeItem);
  public employeeEndTimeItem = signal(nullabelTimeItem);

  public allowUpdate = computed(() => {
    return this._emp.allowUpdateBreakTime(this.before(), this.after());
  });

  public hasUpdatedBreakTime = computed(() => {
    return this._emp.hasUpdatedBreakTime(this.before(), this.after());
  });

  public conflictWithConsults = computed(() => {
    return this._emp.hasUpdateBreakTimeConflictWithConsults(this.after());
  });

  public conflictWithBreakTimes = computed(() => {
    return this._emp.hasUpdateBreakTimeConflictWithBreakTimes(this.before(), this.after());
  });

  public conflictWithStartEndTime = computed(() => {
    return this._emp.hasUpdateBreakTimeConflictWithStartEndTime(this.after());
  });

  public isInvalid = computed(() => {
    return this._emp.isInvalidBreakTime(this.after());
  });

  constructor() {}

  start(updateRequest: ShopOperatingBreakType) {
    this.employeeStartTimeItem.set(this._emp.startTimeItem());
    this.employeeEndTimeItem.set(this._emp.endTimeItem());
    this.before.set(cloneDeep(updateRequest));
    this.after.set(cloneDeep(updateRequest));
  }

  public onUpdateAfterStartTimeItem(startTimeItem: TimeItemType) {
    let newBreakTime = this.after();
    newBreakTime.start = startTimeItem;
    newBreakTime.durationHour = this._emp.durationHours(newBreakTime.start, newBreakTime.end);
    this.after.set(newBreakTime);
  }

  public onUpdateAfterEndTimeItem(endTimeItem: TimeItemType) {
    let newBreakTime = this.after();
    newBreakTime.end = endTimeItem;
    newBreakTime.durationHour = this._emp.durationHours(newBreakTime.start, newBreakTime.end);
    this.after.set(newBreakTime);
  }

  updateBreakTime() {
    return this._emp.updateBreakTime(this.before(), this.after());
  }

  completed() {
    this.before.set(nullable);
    this.after.set(nullable);
    this.employeeEndTimeItem.set(nullabelTimeItem);
    this.employeeStartTimeItem.set(nullabelTimeItem);
  }
}
