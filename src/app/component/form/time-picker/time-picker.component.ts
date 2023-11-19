import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { GlobalService } from 'src/app/service/global/global.service';
import { TimeItemType } from 'src/app/interface/global/global.interface';
import * as Constant from 'src/app/constant/constant';
import { TimePickerIncrementalSteps } from '@progress/kendo-angular-dateinputs';
@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit, OnChanges {
  @Output() timeChange = new EventEmitter<TimeItemType>();
  @Input() readOnly: boolean = false;
  @Input() timezone: Constant.TimeZoneType = Constant.TimeZone.EuropeRiga;
  @Input() intervalMin: number = Constant.ShopSetting.Calender.IntervalMin;
  @Input() title: string = '';
  @Input() openTime!: TimeItemType;
  @Input() closeTime!: TimeItemType;
  @Input()
  get time(): TimeItemType {
    return this.inputTime;
  }
  set time(time: TimeItemType) {
    this.inputTime = time;
    this.handReceivingEvent();
    this.timeChange.emit(this.inputTime);
  }
  public date: Date = new Date();
  public inputTime!: TimeItemType;
  public minTime: Date = new Date();
  public maxTime: Date = new Date();
  public steps: TimePickerIncrementalSteps = { minute: 0 };

  constructor(private _global: GlobalService) {}

  ngOnChanges(changes: SimpleChanges): void {
    let timeChanges = changes['time'];
    this.handleChange(timeChanges);
    this.handleIntervalChange();
  }

  async ngOnInit() {
    this.setDefault();
  }

  private handleChange(change: SimpleChange) {
    let firstChange = change?.firstChange;
    if (!firstChange) {
      this.date = new Date();
      this.handReceivingEvent();
    }
  }

  private handleIntervalChange() {
    this.steps = { minute: this.intervalMin % 60 };
  }
  public onChangeDate() {
    this.time = this._global.date.timeItem(this.date);
  }

  private setDefault() {
    this.setDefaultMinTimePicker();
    this.setDefaultMaxTimePicker();
  }

  private setDefaultMinTimePicker() {
    let minHours: number = !this._global.isUndefinedOrNull(this.openTime) ? this.openTime.hr : 0;
    let minMintues: number = !this._global.isUndefinedOrNull(this.openTime) ? this.openTime.min : 0;
    this.minTime.setHours(minHours);
    this.minTime.setMinutes(minMintues);
  }

  private setDefaultMaxTimePicker() {
    let maxHours: number = !this._global.isUndefinedOrNull(this.closeTime) ? this.closeTime?.hr : 23;
    maxHours = maxHours > 0 ? maxHours : 23;
    let maxMintues: number = !this._global.isUndefinedOrNull(this.closeTime) ? this.closeTime?.min : 59;
    maxMintues = this.closeTime?.hr > 0 && this.closeTime?.min > 0 ? maxMintues : 59;
    this.maxTime.setHours(maxHours);
    this.maxTime.setMinutes(maxMintues);
  }

  private handReceivingEvent() {
    this.inputTime = this.inputTime !== undefined ? this.inputTime : this._global.date.timeItem(new Date());
    this.date.setHours(this.inputTime.hr);
    this.date.setMinutes(this.inputTime.min);
    this.date.setSeconds(0);
  }
}
