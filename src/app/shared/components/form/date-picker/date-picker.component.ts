import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import * as Constant from './../../../services/global/global-constant';
import { GlobalService } from 'src/app/shared/services/global/global.service';

/**This Componet will return the datetime value based on shop time zone
   * Local: Fri Jul 07 2023 14:31:16 GMT+1000 (Australian Eastern Standard Time)
   * ShopDateTime: Fri Jul 7 2023 14:31:16 GMT+0200 (CEST)
   * Local Time (GMT+1000) => Shop Local Time (GMT+0200)
 */
@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit{
  @Output() dateChange = new EventEmitter<Date>();
  @Input() title: string = '';
  @Input() dateFormatter: Constant.DateFormatType = Constant.Date.Format.Australia;
  @Input() shopTimeZone: Constant.TimeZoneType = Constant.TimeZone.AustraliaBrisbane;
  @Input() displayPreviousDay: number = 0;
  @Input() displayNextDay: number = 0;
  @Input() restrictedFromToday: boolean = false;
  @Input() readOnly: boolean = false;
  public inputDate: Date = new Date();
  public miniumDate: Date = new Date();
  public maxDate: Date = new Date();
  @Input()
  get date(): Date{
    return this.inputDate;
  }
  set date(input: Date){
    //Input based on timeZone
    this.inputDate =  this.global.date.transform.convertToLocalShopDateTime(input, this.shopTimeZone);
    this.inputDate = this.global.date.transform.setLocalStartDate(this.inputDate);
    //Output
    input = this.global.date.transform.convertShopTimeZoneDateTime(input, this.shopTimeZone);
    this.dateChange.emit(input);
  }

  constructor(private global: GlobalService) {
  }

  ngOnInit() {
    this.miniumDate = this.global.date.transform.getMinumSelectionDate(new Date(), this.shopTimeZone, this.restrictedFromToday, this.displayPreviousDay);
    this.maxDate = this.global.date.transform.getMaxiumSelectionDate(new Date(), this.shopTimeZone, this.displayNextDay);
  }

  /**Default Behavior is 00:00:00 */
  public transformDate(selectedDate: any){
    this.date = selectedDate;
  }

}
