import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/service/global/global.service';
import { TimeItemType } from 'src/app/interface/global/global.interface';
import { TimePickerIncrementalSteps } from '@progress/kendo-angular-dateinputs';
@Component({
  selector: 'opening-closing-hour-picker',
  templateUrl: './opening-closing-hour-picker.component.html',
  styleUrls: ['./opening-closing-hour-picker.component.scss'],
})
export class OpeningClosingHourPickerComponent implements OnInit {
  @Output() hourChange = new EventEmitter<number>();
  @Input() readOnly: boolean = false;
  @Input() intervalMin: number = 60;
  @Input() title: string = '';
  @Input() hour!: number;

  public date: Date = new Date();
  public steps: TimePickerIncrementalSteps = { minute: 0 };

  constructor(private _global: GlobalService) {}

  async ngOnInit() {
    this.handReceivingEvent();
  }

  public onChangeDate() {
    const hour = this.date.getHours();
    this.hourChange.emit(hour);
  }

  private handReceivingEvent() {
    this.date.setHours(this.hour);
    this.date.setMinutes(0);
    this.date.setSeconds(0);
  }
}
