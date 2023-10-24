import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TimeItemType } from 'src/app/interface/global/global.interface';

@Component({
  selector: 'time-from-to',
  templateUrl: './time-from-to.component.html',
  styleUrls: ['./time-from-to.component.scss'],
})
export class TimeFromToComponent implements OnInit {
  @Output() timeFromChange = new EventEmitter<TimeItemType>();
  @Output() timeToChange = new EventEmitter<TimeItemType>();

  private _timeFrom!: TimeItemType;
  private _timeTo!: TimeItemType;

  @Input()
  get timeFrom(): TimeItemType {
    return this._timeFrom;
  }
  set timeFrom(time: TimeItemType) {
    this._timeFrom = time;
    this.timeFromChange.emit(this._timeFrom);
  }

  @Input()
  get timeTo(): TimeItemType {
    return this._timeTo;
  }
  set timeTo(time: TimeItemType) {
    this._timeTo = time;
    this.timeToChange.emit(this._timeTo);
  }

  constructor() {}

  ngOnInit() {}
}
