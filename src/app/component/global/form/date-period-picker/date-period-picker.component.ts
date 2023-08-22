import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/service/global/global.service';
import * as Constant from 'src/app/service/global/global-constant';
import { IDatePeriod } from 'src/app/interface/global/global.interface';
import { IPairValueId } from 'src/app/interface/system/system.interface';

@Component({
  selector: 'date-period-picker',
  templateUrl: './date-period-picker.component.html',
  styleUrls: ['./date-period-picker.component.scss'],
})
export class DatePeriodPickerComponent implements OnInit {
  @Input() isPlanFormat: boolean = false;
  @Input() readOnly: boolean = false;
  @Output() periodChange = new EventEmitter<IDatePeriod>();
  @Input()
  get period(){
    return this.inputPeriod;
  }
  set period(input: IDatePeriod){
    if(input !== undefined){
      this.inputPeriod = input;
    }
  }
  public planSelection: Constant.DatePeriodType[] = [Constant.Date.Period.Weekly, Constant.Date.Period.Monthly, Constant.Date.Period.Annually];
  public periodList: IDatePeriod[] = this.global.date.period;
  public pairValueIdList: IPairValueId[] = [];
  public selectedValueId: IPairValueId = {id: '', value: ''};
  public inputPeriod: IDatePeriod ={
    name: 'date.period.weekly',
    type: 'Weekly',
    week: 1,
    day: 7
  };

  constructor(private global: GlobalService) {
  }

  async ngOnInit() {
    this.periodList = this.isPlanFormat ? this.periodList.filter(p => this.planSelection.includes(p.type)) : this.periodList;
    await this.getInputPeriodSelectionList();
  }


  public onChangeSelection(selected: any){
    let selectedItem = this.periodList.find(p => p.name === selected.id);
    if(selectedItem !== undefined){
      this.period = selectedItem;
      this.periodChange.emit(selectedItem);
    }
  }
  
  private async getInputPeriodSelectionList(){
    this.pairValueIdList = await Promise.all(this.periodList.map(async i => {
      let id = i.name;
      let value = await this.global.language.transform(i.name);
      return {id: id, value: value};
    }));

    let selected = this.pairValueIdList.find(p => p.id === this.inputPeriod.name);
    if(selected !== undefined){
      this.selectedValueId = selected;
    }
  }

}
