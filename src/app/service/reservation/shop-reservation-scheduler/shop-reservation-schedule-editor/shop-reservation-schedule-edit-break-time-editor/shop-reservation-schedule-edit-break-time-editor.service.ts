import { Injectable, computed, inject, signal } from '@angular/core';
import { TimeItemType, ShopEmployeeBreakTimeType } from 'src/app/interface';
import { DateService } from 'src/app/service/global/date/date.service';
import { ShopReservationScheduleEditorService } from '../shop-reservation-schedule-editor.service';
import { getTime } from 'date-fns';
const nullableTimeItem = null as unknown as TimeItemType;
const nullableBreakTime = null as unknown as ShopEmployeeBreakTimeType;
@Injectable({
  providedIn: 'root',
})
export class ShopReservationScheduleEditBreakTimeEditorService {
  private editorSvc = inject(ShopReservationScheduleEditorService);
  private dateSvc = inject(DateService);
  private previousBreakTime = signal<ShopEmployeeBreakTimeType>(nullableBreakTime);

  public employeeStartItem = this.editorSvc.startTimeItem;
  public employeeEndTimeItem = this.editorSvc.endTimeItem;

  public startTimeItem = signal<TimeItemType>(nullableTimeItem);
  public endTimeItem = signal<TimeItemType>(nullableTimeItem);

  public loaded = computed(() => {
    const query = this.editorSvc.query();
    const startTimeItem = this.startTimeItem();
    const endTimeItem = this.endTimeItem();
    const previousBreakTime = this.previousBreakTime();
    return query !== null && startTimeItem !== null && endTimeItem !== null && previousBreakTime !== null;
  });

  public newBreakTime = computed(() => {
    const query = this.editorSvc.query();
    const startTimeItem = this.startTimeItem();
    const endTimeItem = this.endTimeItem();
    return {
      startDateTime: this.dateSvc.transform.formatByTimeItem(query.startOfDay, startTimeItem),
      endDateTime: this.dateSvc.transform.formatByTimeItem(query.startOfDay, endTimeItem),
    } as ShopEmployeeBreakTimeType;
  });

  public allowUpdateBreakTime = computed(() => {
    const query = this.editorSvc.query();
    const previousBreakTime = this.previousBreakTime();
    const newBreakTime = this.newBreakTime();
    return query.allowUpdateBreakTime(previousBreakTime, newBreakTime);
  });

  public validBreak = computed(() => {
    const isNotEqualToPrevious = this.isNotEqualToPrevious();
    const newBreakDateTime = this.newBreakTime();
    const validNewBreakTime =
      getTime(new Date(newBreakDateTime.endDateTime)) - getTime(new Date(newBreakDateTime.startDateTime)) > 0;

    return isNotEqualToPrevious && validNewBreakTime;
  });

  public isNotEqualToPrevious = computed(() => {
    const previousBreakDateTime = this.previousBreakTime();
    const newBreakDateTime = this.newBreakTime();
    const isNotEqualToPrevious =
      getTime(new Date(previousBreakDateTime.endDateTime)) !== getTime(new Date(newBreakDateTime.endDateTime)) ||
      getTime(new Date(previousBreakDateTime.startDateTime)) !== getTime(new Date(newBreakDateTime.startDateTime));

    return isNotEqualToPrevious;
  });

  constructor() {}

  public start(previousBreakTime: ShopEmployeeBreakTimeType) {
    const startTimeItem = this.dateSvc.timeItem(new Date(previousBreakTime.startDateTime));
    const endTimeItem = this.dateSvc.timeItem(new Date(previousBreakTime.endDateTime));
    this.previousBreakTime.set(previousBreakTime);
    this.startTimeItem.set(startTimeItem);
    this.endTimeItem.set(endTimeItem);
  }

  public update() {
    const previousBreak = this.previousBreakTime();
    const newBreak = this.newBreakTime();
    const query = this.editorSvc.query();
    const updated = query.updateBreaktTime(previousBreak, newBreak);
    this.editorSvc.query.set(query);
    return updated;
  }

  public delete() {
    const previousBreak = this.previousBreakTime();
    const query = this.editorSvc.query();
    const updated = query.deleteBreak(previousBreak);
    this.editorSvc.query.set(query);
    return updated;
  }

  public complete() {
    this.previousBreakTime.set(nullableBreakTime);
    this.startTimeItem.set(nullableTimeItem);
    this.endTimeItem.set(nullableTimeItem);
  }
}
