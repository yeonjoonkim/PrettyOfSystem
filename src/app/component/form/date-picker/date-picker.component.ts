import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import * as Constant from 'src/app/constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit, OnChanges {
  @Output() dateChange = new EventEmitter<string>();
  @Input() title: string = '';
  @Input() dateFormatter: Constant.DateFormatType = Constant.Date.Format.Australia;
  @Input() shopTimeZone: Constant.TimeZoneType = Constant.TimeZone.AustraliaBrisbane;
  @Input() displayPreviousDay: number = 0;
  @Input() displayNextDay: number = 0;
  @Input() restrictedFromToday: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() type: 'start' | 'end' = 'start';
  public inputDate: Date = new Date();
  public minDate: Date = new Date();
  public maxDate: Date = new Date();
  @Input()
  get date(): string {
    return this._global.date.transform.formatLocalDateTime(this.inputDate);
  }
  set date(input: string) {
    const ofDay = this.type === 'start' ? this._global.date.startDay(input) : this._global.date.endDay(input);
    this.inputDate = this._global.date.transform.toLocalDateTime(ofDay);
  }

  constructor(private _global: GlobalService) {}

  ngOnChanges() {
    this.setMinMaxDate();
  }

  ngOnInit() {}

  public transformDate(selectedDate: Date) {
    const ofDay =
      this.type === 'start' ? this._global.date.startDay(selectedDate) : this._global.date.endDay(selectedDate);
    this.inputDate = this._global.date.transform.toLocalDateTime(ofDay);
    this.dateChange.emit(ofDay);
  }

  private setMinMaxDate() {
    const minDate = this._global.date.minimumDate(
      this.shopTimeZone,
      this.restrictedFromToday,
      this.displayPreviousDay
    );
    const maxDate = this._global.date.maximumDate(this.shopTimeZone, this.displayNextDay);
    this.minDate = this._global.date.transform.toLocalDateTime(minDate);
    this.maxDate = this._global.date.transform.toLocalDateTime(maxDate);
  }
}
