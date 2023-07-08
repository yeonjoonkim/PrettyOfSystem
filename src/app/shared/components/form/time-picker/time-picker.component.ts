import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService} from './../../../../shared/services/global/global.service';
import { ITimeItem } from 'src/app/interface/global/global.interface';
import * as Constant from './../../../../shared/services/global/global-constant';
@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit {
  @Output() timeChange = new EventEmitter<ITimeItem>();
  public date: Date = new Date();
  public inputTime!: ITimeItem;
  @Input() readOnly: boolean = false;
  @Input() title: string = '';
  @Input()
  get time(): ITimeItem{
    return this.inputTime;
  }
  set time(time: ITimeItem){
    this.inputTime = time;
    this.handReceivingEvent();
    this.timeChange.emit(this.inputTime);
  }
  constructor(private global: GlobalService) {}

  async ngOnInit() {
  }

  public onChangeDate(){
    let currentDayNightType: Constant.DateDayNightType = this.date.getHours() > 11 ? Constant.Date.DayNightType.NIGHT : Constant.Date.DayNightType.DAY;
    let timeString = this.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let result: ITimeItem = {
      hr: this.date.getHours(),
      min: this.date.getMinutes(),
      sec: this.date.getSeconds(),
      DayNightType: currentDayNightType,
      strValue: timeString
    };
    this.time = result;
  }

  private handReceivingEvent(){
    this.date.setHours(this.inputTime.hr);
    this.date.setMinutes(this.inputTime.min);
    this.date.setSeconds(this.inputTime.sec);
  }
}
