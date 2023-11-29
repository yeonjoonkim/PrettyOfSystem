import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopEmployeeScheduleTimeType } from 'src/app/interface';

@Component({
  selector: 'employee-schedule-title',
  templateUrl: './employee-schedule-title.component.html',
  styleUrls: ['./employee-schedule-title.component.scss'],
})
export class EmployeeScheduleTitleComponent implements OnInit {
  @Output() typeChange = new EventEmitter<'ThisWeek' | 'NextWeek' | 'TwoWeek' | 'ThreeWeek' | 'FourWeek'>();
  @Input() schedulerTime!: ShopEmployeeScheduleTimeType;
  @Input() type: 'ThisWeek' | 'NextWeek' | 'TwoWeek' | 'ThreeWeek' | 'FourWeek' = 'ThisWeek';

  constructor() {}

  ngOnInit() {}

  thisWeek() {
    this.typeChange.emit('ThisWeek');
  }

  nextWeek() {}

  nextTwoWeek() {
    this.typeChange.emit('TwoWeek');
  }

  nextThreeWeek() {
    this.typeChange.emit('ThreeWeek');
  }

  nextFourWeek() {
    this.typeChange.emit('FourWeek');
  }

  moveDown() {
    switch (this.type) {
      case 'NextWeek':
        this.typeChange.emit('ThisWeek');
        break;
      case 'TwoWeek':
        this.typeChange.emit('NextWeek');
        break;
      case 'ThreeWeek':
        this.typeChange.emit('TwoWeek');
        break;
      case 'FourWeek':
        this.typeChange.emit('ThreeWeek');
        break;
      default:
        this.typeChange.emit('ThisWeek');
    }
  }

  moveUp() {
    switch (this.type) {
      case 'ThisWeek':
        this.typeChange.emit('NextWeek');
        break;
      case 'NextWeek':
        this.typeChange.emit('TwoWeek');
        break;
      case 'TwoWeek':
        this.typeChange.emit('ThreeWeek');
        break;
      case 'ThreeWeek':
        this.typeChange.emit('FourWeek');
        break;
      default:
        this.typeChange.emit('ThisWeek');
    }
  }
}
