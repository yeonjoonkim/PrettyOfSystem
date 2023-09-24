import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Constant from 'src/app/constant/constant';
import { DatePeriodType, NameValuePairType } from 'src/app/interface/global/global.interface';

@Component({
  selector: 'date-period-picker',
  templateUrl: './date-period-picker.component.html',
  styleUrls: ['./date-period-picker.component.scss'],
})
export class DatePeriodPickerComponent implements OnInit {
  @Input() isPlanFormat: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() isRequired: boolean = true;
  @Output() periodChange = new EventEmitter<DatePeriodType>();
  @Input()
  get period() {
    return this.inputPeriod;
  }
  set period(input: DatePeriodType) {
    if (input !== undefined) {
      this.inputPeriod = input;
    }
  }
  public planSelection: Constant.PeriodType[] = [
    Constant.Date.Period.Weekly,
    Constant.Date.Period.Monthly,
    Constant.Date.Period.Annually,
  ];
  public periodList: DatePeriodType[] = this._global.date.period;
  public pairNameValueList: NameValuePairType[] = [];
  public selectedNameValue!: NameValuePairType;
  public inputPeriod: DatePeriodType = {
    name: 'date.title.weekly',
    type: 'Weekly',
    week: 1,
    day: 7,
  };

  constructor(private _global: GlobalService) {}

  async ngOnInit() {
    this.periodList = this.isPlanFormat
      ? this.periodList.filter(p => this.planSelection.includes(p.type))
      : this.periodList;
    await this.getInputPeriodSelectionList();
  }

  public onSelectedChange() {
    let selectedItem = this.periodList.find(p => p.name === this.selectedNameValue.name);
    if (selectedItem !== undefined) {
      this.period = selectedItem;
      this.periodChange.emit(selectedItem);
    }
  }

  private async getInputPeriodSelectionList() {
    this.pairNameValueList = this.periodList.map(period => {
      return { name: period.name, value: period.type };
    });

    let selected = this.pairNameValueList.find(p => p.name === this.inputPeriod.name);
    if (selected !== undefined) {
      this.selectedNameValue = selected;
    }
  }
}
