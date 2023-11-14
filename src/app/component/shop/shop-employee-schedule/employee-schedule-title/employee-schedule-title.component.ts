import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopEmployeeScheduleTimeType } from 'src/app/interface';

@Component({
  selector: 'employee-schedule-title',
  templateUrl: './employee-schedule-title.component.html',
  styleUrls: ['./employee-schedule-title.component.scss'],
})
export class EmployeeScheduleTitleComponent implements OnInit {
  @Output() typeChange = new EventEmitter<'ThisWeek' | 'NextWeek'>();
  @Input() schedulerTime!: ShopEmployeeScheduleTimeType;
  @Input() type: 'ThisWeek' | 'NextWeek' = 'ThisWeek';

  constructor() {}

  ngOnInit() {}

  nextWeek() {
    this.typeChange.emit('NextWeek');
  }

  thisWeek() {
    this.typeChange.emit('ThisWeek');
  }
}
