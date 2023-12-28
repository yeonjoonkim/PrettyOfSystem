import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';
import {
  IFormHeaderModalProp,
  ShopEmployeeScheduleChangeResult,
  ShopEmployeeScheduleSettingProp,
  ShopOperatingBreakType,
} from 'src/app/interface';
import { EmployeeService } from 'src/app/service/employee/employee.service';

type ShopEmployeeScheduleBreakTimeEditType = {
  index: number;
  breakTime: ShopOperatingBreakType;
};
@Component({
  selector: 'shop-employee-schedule-setting',
  templateUrl: './shop-employee-schedule-setting.component.html',
  styleUrls: ['./shop-employee-schedule-setting.component.scss'],
})
export class ShopEmployeeScheduleSettingComponent implements OnInit {
  public prop!: ShopEmployeeScheduleSettingProp;
  public form!: IFormHeaderModalProp;
  public changed: boolean = false;
  public applyAllWeek: boolean = false;
  public tempBreakTime!: ShopOperatingBreakType | undefined;
  public editBreakTime!: ShopEmployeeScheduleBreakTimeEditType | undefined;

  constructor(
    private _navParams: NavParams,
    private _modalCtrl: ModalController,
    private _empSvc: EmployeeService
  ) {
    this.prop = this._navParams.get('prop') as ShopEmployeeScheduleSettingProp;
    this.form = this._navParams.get('form') as IFormHeaderModalProp;
  }

  ngOnInit() {}

  public handleEdit() {
    this.form.readOnly = false;
  }

  public onChangeDayOff() {
    this.prop.roster = this._empSvc.scheduler.changeWorkStatus(this.prop.roster, this.prop.operating);
    this.handleEnabledSaveBtn();
  }

  public async dismiss() {
    await this._modalCtrl.dismiss();
  }

  public async handleSave() {
    const result: ShopEmployeeScheduleChangeResult = { roster: this.prop.roster, applyAllWeek: this.applyAllWeek };
    await this._modalCtrl.dismiss(result);
  }

  public handleBreak() {
    const isOverlap = this.tempBreakTime
      ? this._empSvc.scheduler.breakTime.isOverlap(this.prop.roster, this.tempBreakTime)
      : true;
    const isExceedTime = this.tempBreakTime
      ? this._empSvc.scheduler.breakTime.isExceedTime(this.tempBreakTime)
      : true;
    this.handleEnabledSaveBtn();
    return isOverlap || isExceedTime;
  }

  public handleEnabledSaveBtn() {
    this.prop.roster.workHours = this._empSvc.scheduler.updateWorkHours(this.prop.roster);
    this.form.enabledSavebutton = this._empSvc.scheduler.shiftValidator(this.prop.roster);
    this.changed = true;
  }

  public onDeleteBreak(breakTime: ShopOperatingBreakType) {
    this.prop.roster = this._empSvc.scheduler.deleteBreak(this.prop.roster, breakTime);
    this.handleEnabledSaveBtn();
  }

  public onEditBreak(breakTime: ShopOperatingBreakType, index: number) {
    this.editBreakTime = { breakTime: breakTime, index: index };
  }

  public breakHours() {
    return this._empSvc.scheduler.breakTime.sum(this.prop.roster);
  }

  public addBreak() {
    this.tempBreakTime = this._empSvc.scheduler.breakTime.getDefault(this.prop.roster);
  }

  public async updateBreak() {
    const updated = this.tempBreakTime
      ? await this._empSvc.scheduler.updateBreak(
          this.prop.roster,
          this.tempBreakTime,
          this.prop.date,
          this.prop.employeeId
        )
      : null;
    if (updated !== null) {
      this.prop.roster = updated;
      this.tempBreakTime = undefined;
    }
    this.handleEnabledSaveBtn();
  }

  public async deleteBreak(breakTime: ShopOperatingBreakType) {
    this.prop.roster = this._empSvc.scheduler.deleteBreak(this.prop.roster, breakTime);
    this.handleEnabledSaveBtn();
  }
}
