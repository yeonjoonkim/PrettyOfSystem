import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  inject,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TimeItemType } from 'src/app/interface/global/global.interface';
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'time-from-to',
  templateUrl: './time-from-to.component.html',
  styleUrls: ['./time-from-to.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeFromToComponent implements OnInit, OnChanges {
  @Output() timeFromChange = new EventEmitter<TimeItemType>();
  @Output() timeToChange = new EventEmitter<TimeItemType>();

  public inputTimeFrom!: TimeItemType;
  public inputTimeTo!: TimeItemType;

  @Input() displayCenter: boolean = false;
  @Input() intervalMin: number = Constant.ShopSetting.Calender.IntervalMin;

  @Input() timeTo!: TimeItemType;
  @Input() timeFrom!: TimeItemType;

  @Input() min!: TimeItemType;
  @Input() max!: TimeItemType;

  @Input() readOnly: boolean = false;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    const timeFromChange = changes['timeFrom'];
    const timeToChange = changes['timeTo'];
    if (timeFromChange) {
      this.inputTimeFrom = timeFromChange.currentValue;
    }
    if (timeToChange) {
      this.inputTimeTo = timeToChange.currentValue;
    }
  }

  ngOnInit() {}
}
