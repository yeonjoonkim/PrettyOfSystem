import { Injectable, WritableSignal, computed, inject, signal } from '@angular/core';
import { ShopEmployeeRosterService } from '../shop-employee-roster/shop-employee-roster.service';
import { ShopOperatingBreakType, TimeItemType } from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import { cloneDeep } from 'lodash-es';

const nullabelTimeItem: TimeItemType = null as unknown as TimeItemType;
const nullable: ShopOperatingBreakType = null as unknown as ShopOperatingBreakType;

@Injectable({
  providedIn: 'root',
})
export class ShopEmployeeAddBreakService {
  private _emp = inject(ShopEmployeeRosterService);
  private _global = inject(GlobalService);

  public input: WritableSignal<ShopOperatingBreakType> = signal(nullable);

  public breakStartTimeItem = computed(() => {
    return this.input().start;
  });

  public breakEndTimeItem = computed(() => {
    return this.input().end;
  });

  //Setting
  public loaded = computed(() => {
    return (
      this._emp.loaded() &&
      this.input() !== undefined &&
      this.input() !== null &&
      this.employeeStartTimeItem !== null &&
      this.employeeEndTimeItem !== null &&
      this.employeeStartTimeItem !== undefined &&
      this.employeeEndTimeItem !== undefined
    );
  });

  public isShop24Hours = this._emp.isShop24Hours();
  public is24Hours = this._emp.is24Hours();
  public employeeStartTimeItem = signal(nullabelTimeItem);
  public employeeEndTimeItem = signal(nullabelTimeItem);

  public allowAddBreakTime = computed(() => {
    return this._emp.allowAddBreakTime(this.input());
  });
  public conflictWithBreaktimes = computed(() => {
    return this._emp.hasNewBreakTimeConflictWithBreaktimes(this.input());
  });
  public conflictWithStartEndTime = computed(() => {
    return this._emp.hasNewBreakTimeConflictWithStartEndTime(this.input());
  });
  public conflictWithConsults = computed(() => {
    return this._emp.hasNewBreakTimeConflictWithConsults(this.input());
  });
  public invalidBreakTime = computed(() => {
    return this._emp.isInvalidBreakTime(this.input());
  });

  constructor() {}

  public onUpdateStartTimeItem(startTimeItem: TimeItemType) {
    let newBreakTime = this.input();
    newBreakTime.start = startTimeItem;
    newBreakTime.durationHour = this._emp.durationHours(newBreakTime.start, newBreakTime.end);
    this.input.set(newBreakTime);
  }

  public onUpdateEndTimeItem(endTimeItem: TimeItemType) {
    let newBreakTime = this.input();
    newBreakTime.end = endTimeItem;
    newBreakTime.durationHour = this._emp.durationHours(newBreakTime.start, newBreakTime.end);
    this.input.set(newBreakTime);
  }

  public addBreakTime() {
    return this._emp.addBreakTime(this.input());
  }

  public async start() {
    const start = cloneDeep(this._emp.startTimeItem());
    const end = cloneDeep(this._emp.endTimeItem());
    this.employeeStartTimeItem.set(start);
    this.employeeEndTimeItem.set(end);
    this.input.set({
      id: this._global.newId(),
      start: start,
      end: start,
      durationHour: this._emp.durationHours(this._emp.startTimeItem(), this._emp.endTimeItem()),
    });
  }

  public async completed() {
    this.employeeStartTimeItem.set(nullabelTimeItem);
    this.employeeEndTimeItem.set(nullabelTimeItem);
    this.input.set(nullable);
  }
}
