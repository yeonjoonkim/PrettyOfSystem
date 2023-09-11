import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { TimeItemType } from 'src/app/interface/global/global.interface';

@Component({
  selector: 'time-from-to',
  templateUrl: './time-from-to.component.html',
  styleUrls: ['./time-from-to.component.scss'],
})
export class TimeFromToComponent implements OnInit {
  public timeFromChange = new EventEmitter<TimeItemType>();
  public timeToChange = new EventEmitter<TimeItemType>();
  public inputTimeFrom!: TimeItemType;
  public inputDateTo!: TimeItemType;
  @Input()
  get timeFrom(): TimeItemType {
    return this.inputTimeFrom;
  }
  set timeFrom(time: TimeItemType) {
    this.inputTimeFrom = time;
    this.timeFromChange.emit(this.inputTimeFrom);
  }
  @Input()
  get timeTo(): TimeItemType {
    return this.inputDateTo;
  }
  set timeTo(time: TimeItemType) {
    this.inputDateTo = time;
    this.timeFromChange.emit(this.inputDateTo);
  }

  constructor() {}

  ngOnInit() {}
}
