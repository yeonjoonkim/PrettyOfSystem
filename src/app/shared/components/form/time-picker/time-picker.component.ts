import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService} from './../../../../shared/services/global/global.service';
import { ITimeItem } from 'src/app/interface/global/global.interface';
import * as Constant from './../../../../shared/services/global/global-constant';
import { TimePickerIncrementalSteps } from '@progress/kendo-angular-dateinputs';
@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit {
  @Output() timeChange = new EventEmitter<ITimeItem>();
  @Input() readOnly: boolean = false;
  @Input() timezone: Constant.TimeZoneType = Constant.TimeZone.EuropeRiga;
  @Input() intervalMin: number = Constant.Default.TimeInterval;
  @Input() title: string = '';
  @Input() openTime!: ITimeItem;
  @Input() closeTime!: ITimeItem;
  @Input()
  get time(): ITimeItem{
    return this.inputTime;
  }
  set time(time: ITimeItem){
    this.inputTime = time;
    this.handReceivingEvent();
    this.timeChange.emit(this.inputTime);
  }
  public date: Date = new Date();
  public inputTime!: ITimeItem;
  public minTime: Date = new Date();
  public maxTime: Date = new Date();
  public steps: TimePickerIncrementalSteps = {minute: 0};
  
  constructor(private global: GlobalService) {}

  async ngOnInit() {
    this.setDefault();
  }

  public onChangeDate(){
    this.time = this.global.date.getTimeItem(this.date);
  }

  private setDefault(){
    this.setDefaultStep();
    this.setDefaultMinTimePicker();
    this.setDefaultMaxTimePicker();
  }

  private setDefaultStep(){
    this.steps = this.global.date.getTimePickerIncrementalSteps(this.intervalMin);
  }

  private setDefaultMinTimePicker(){
    let minHours: number = !this.global.isUndefinedOrNull(this.openTime) ? this.openTime.hr : 0;
    let minMintues: number = !this.global.isUndefinedOrNull(this.openTime) ? this.openTime.min : 0;
    this.minTime.setHours(minHours);
    this.minTime.setMinutes(minMintues);

  }

  private setDefaultMaxTimePicker(){
    let maxHours: number = !this.global.isUndefinedOrNull(this.closeTime) ? this.closeTime.hr : 23;
    let maxMintues: number = !this.global.isUndefinedOrNull(this.closeTime) ? this.closeTime.min : 59;
    this.maxTime.setHours(maxHours);
    this.maxTime.setMinutes(maxMintues);
  }

  private handReceivingEvent(){
    this.date.setHours(this.inputTime.hr);
    this.date.setMinutes(this.inputTime.min);
    this.date.setSeconds(0);
  }
}
