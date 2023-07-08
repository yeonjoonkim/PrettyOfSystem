import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ITimeItem } from 'src/app/interface/global/global.interface';

@Component({
  selector: 'time-from-to',
  templateUrl: './time-from-to.component.html',
  styleUrls: ['./time-from-to.component.scss'],
})
export class TimeFromToComponent implements OnInit {
  public timeFromChange = new EventEmitter<ITimeItem>();
  public timeToChange = new EventEmitter<ITimeItem>();
  public inputTimeFrom!: ITimeItem;
  public inputDateTo!: ITimeItem;
  @Input()
  get timeFrom(): ITimeItem{
    return this.inputTimeFrom;
  }
  set timeFrom(time: ITimeItem){
    this.inputTimeFrom = time;
    this.timeFromChange.emit(this.inputTimeFrom);
  }
  @Input()
  get timeTo(): ITimeItem{
    return this.inputDateTo;
  }
  set timeTo(time: ITimeItem){
    this.inputDateTo = time;
    this.timeFromChange.emit(this.inputDateTo);
  }

  constructor() { }

  ngOnInit() {}

}
