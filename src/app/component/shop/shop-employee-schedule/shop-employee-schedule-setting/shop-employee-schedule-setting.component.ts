import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { IFormHeaderModalProp, ShopEmployeeScheduleSettingProp, TimeItemType } from 'src/app/interface';
import * as Constant from 'src/app/constant/constant';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'shop-employee-schedule-setting',
  templateUrl: './shop-employee-schedule-setting.component.html',
  styleUrls: ['./shop-employee-schedule-setting.component.scss'],
})
export class ShopEmployeeScheduleSettingComponent implements OnInit {
  public prop!: ShopEmployeeScheduleSettingProp;
  public form!: IFormHeaderModalProp;
  public changed: boolean = false;

  constructor(
    private _navParams: NavParams,
    private _modalCtrl: ModalController,
    private _global: GlobalService
  ) {
    this.prop = this._navParams.get('prop') as ShopEmployeeScheduleSettingProp;
    this.form = this._navParams.get('form') as IFormHeaderModalProp;
  }

  ngOnInit() {}

  onChangeDayOff() {
    this.prop.roster.isOpen = !this.prop.roster.isOpen;
    if (!this.prop.roster.isOpen) {
      this.prop.roster.operatingHours.openTime = this.prop.operating.openTime;
      this.prop.roster.operatingHours.closeTime = this.prop.operating.closeTime;
    }
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  public async handleSave() {
    await this._modalCtrl.dismiss(this.prop.roster);
  }

  public handleEdit() {
    this.form.readOnly = false;
  }

  public handleEnabledSaveBtn() {
    const validator = this.validateOpenAndCloseTimes(
      this.prop.roster.operatingHours.openTime,
      this.prop.roster.operatingHours.closeTime
    );
    if (validator.result) {
      this.prop.roster.workHours = validator.workHours;
      this.form.enabledSavebutton = true;
    } else {
      this.form.enabledSavebutton = false;
    }
    this.changed = true;
  }

  private validateOpenAndCloseTimes(open: TimeItemType, close: TimeItemType) {
    const openTime = this._global.date.transform.formatByTimeItem(new Date(), open);
    const closeTime = this._global.date.transform.formatByTimeItem(new Date(), close);
    let is24Hours: boolean =
      open.hr === 0 &&
      open.min === 0 &&
      open.dayNightType === Constant.Date.DayNightType.DAY &&
      close.hr === 0 &&
      close.min === 0 &&
      close.dayNightType === Constant.Date.DayNightType.DAY;
    let workHours: number = is24Hours ? 24.0 : this._global.date.differenceInTime(openTime, closeTime, 2);
    let validator: boolean = is24Hours ? true : openTime < closeTime;

    return { result: validator, workHours: workHours };
  }
}
