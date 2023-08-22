import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Constant from 'src/app/service/global/global-constant';
import { GlobalService } from 'src/app/service/global/global.service';
import { ZonedDate } from '@progress/kendo-date-math';

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
export class DatePickerComponent implements OnInit {
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
  get date(): Date {
    return this.inputDate;
  }
  set date(input: Date) {
    //INPUT
    let inputDate: ZonedDate = this.global.date.transform.toShopDateTime(input, this.shopTimeZone);
    let shopTime = inputDate.toTimezone(this.shopTimeZone);
    this.inputDate = this.global.date.transform.convertToLocalShopDateTime(
      shopTime,
      this.shopTimeZone
    );
  }

  constructor(private global: GlobalService) {}

  ngOnInit() {
    this.miniumDate = this.global.date.transform.getMinumSelectionDate(
      new Date(),
      this.shopTimeZone,
      this.restrictedFromToday,
      this.displayPreviousDay
    );
    this.maxDate = this.global.date.transform.getMaxiumSelectionDate(
      new Date(),
      this.shopTimeZone,
      this.displayNextDay
    );
  }

  /**Default Behavior is 00:00:00 */
  public transformDate(selectedDate: any) {
    this.date = selectedDate;
    //OUTPUT
    let outputDate: ZonedDate = this.global.date.transform.convertShopTimeZoneDateTime(
      selectedDate,
      this.shopTimeZone
    );
    let outputShopTime = outputDate.toUTCDate();
    this.dateChange.emit(outputShopTime);
  }
}
