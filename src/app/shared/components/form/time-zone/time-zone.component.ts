import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Constant from '../../../../shared/services/global/global-constant';
@Component({
  selector: 'time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.scss'],
})
export class TimeZoneComponent implements OnInit {
  @Output() timeZoneChange = new EventEmitter<Constant.TimeZoneType>();
  @Output() validateChange = new EventEmitter<boolean>();
  @Input() readOnly: boolean = false;
  @Input()
  get timeZone(){
    return this.inputTimeZone;
  }
  set timeZone(value: Constant.TimeZoneType){
    this.inputTimeZone = value;
    this.timeZoneChange.emit(value);
  }
  @Input()
  get validate() {
    return this.inputValidator;
  }
  set validate(value: boolean) {
    this.inputValidator = value;
    this.validateChange.emit(this.inputValidator);
  }

  public inputValidator: boolean = false;
  public inputTimeZone: Constant.TimeZoneType = '';
  public timezoneList: Constant.TimeZoneType[] = Object.values(Constant.TimeZone);
  public autoCompleteFilterList: string[] = [];
  public entered: boolean = false;

  constructor() { }

  ngOnInit() {
    this.setDefaultValue();
  }

  private setDefaultValue(){
    let isValidated: boolean = this.setValidator();
    this.inputTimeZone = isValidated ? this.inputTimeZone : Constant.Default.TimeZone;
    this.validate = this.setValidator();
  }

  public resetTimeZone(){
    this.timeZone = '';
    this.autoCompleteFilterList = [];
    this.validate = this.setValidator();
  }

  public onChangeTimeZone() {
    this.entered = true;
    let selected: string | undefined = this.autoCompleteFilterList.find((option) => option === this.inputTimeZone);
    this.inputTimeZone = selected ? selected : '';
    this.validate = this.setValidator();
    this.timeZoneChange.emit(this.inputTimeZone);
    this.validateChange.emit(this.inputValidator);
  }

  public onChangeTimezoneInput(timezone: string) {
    let inpuTimeZone = timezone.toUpperCase();
    this.autoCompleteFilterList = this.timezoneList.filter(
      (tz) => tz.toUpperCase().includes(inpuTimeZone)
    );
  }

  private setValidator(): boolean{
    return this.timezoneList.includes(this.inputTimeZone);
  }
}
