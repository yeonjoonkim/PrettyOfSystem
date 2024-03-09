import { Injectable, computed, inject, signal } from '@angular/core';
import { ShopReservationScheduleEditorService } from '../shop-reservation-schedule-editor.service';
import { ShopEmployeeBreakTimeType, TimeItemType } from 'src/app/interface';
import { DateService } from 'src/app/service/global/date/date.service';
import { getTime } from 'date-fns';
const nullableTimeItem = null as unknown as TimeItemType;
@Injectable({
  providedIn: 'root',
})
export class ShopReservationScheduleAddBreakTimeEditorService {
  private editorSvc = inject(ShopReservationScheduleEditorService);
  private dateSvc = inject(DateService);

  public employeeStartItem = this.editorSvc.startTimeItem;
  public employeeEndTimeItem = this.editorSvc.endTimeItem;

  public startTimeItem = signal<TimeItemType>(nullableTimeItem);
  public endTimeItem = signal<TimeItemType>(nullableTimeItem);

  public loaded = computed(() => {
    const query = this.editorSvc.query();
    const startTimeItem = this.startTimeItem();
    const endTimeItem = this.endTimeItem();
    return query !== null && startTimeItem !== null && endTimeItem !== null;
  });

  public newBreakDateTime = computed(() => {
    const query = this.editorSvc.query();
    const startTimeItem = this.startTimeItem();
    const endTimeItem = this.endTimeItem();
    return {
      startDateTime: this.dateSvc.transform.formatByTimeItem(query.startOfDay, startTimeItem),
      endDateTime: this.dateSvc.transform.formatByTimeItem(query.startOfDay, endTimeItem),
    } as ShopEmployeeBreakTimeType;
  });

  public allowAddBreak = computed(() => {
    const query = this.editorSvc.query();
    const newBreakDateTime = this.newBreakDateTime();
    return query.allowAddBreakTime(newBreakDateTime);
  });

  public validBreak = computed(() => {
    const newBreakDateTime = this.newBreakDateTime();
    return getTime(new Date(newBreakDateTime.endDateTime)) - getTime(new Date(newBreakDateTime.startDateTime)) > 0;
  });

  constructor() {}

  public start() {
    this.startTimeItem.set(this.employeeStartItem());
    this.endTimeItem.set(this.employeeStartItem());
  }

  public add() {
    const newBreak = this.newBreakDateTime();
    const query = this.editorSvc.query();
    const added = query.addBreak(newBreak);
    this.editorSvc.query.set(query);
    return added;
  }

  public complete() {
    this.startTimeItem.set(nullableTimeItem);
    this.endTimeItem.set(nullableTimeItem);
  }
}
