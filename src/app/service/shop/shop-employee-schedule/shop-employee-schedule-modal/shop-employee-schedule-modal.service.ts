import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { cloneDeep } from 'lodash-es';
import { ShopEmployeeScheduleSettingComponent } from 'src/app/component/shop/shop-employee-schedule/shop-employee-schedule-setting/shop-employee-schedule-setting.component';
import {
  ShopEmployeeScheduleSettingProp,
  ShopOperatingDailyType,
  ShopOperatingHoursType,
} from 'src/app/interface';
import { FormControllerService } from '../../../global/form/form-controller.service';

@Injectable({
  providedIn: 'root',
})
export class ShopEmployeeScheduleModalService {
  constructor(
    private _modal: ModalController,
    private _formCtrl: FormControllerService
  ) {}

  public buildProp(
    name: string,
    date: string,
    day: string,
    daysInFourWeeks: string[],
    roster: ShopOperatingDailyType,
    operating: ShopOperatingHoursType,
    employeeId: string
  ) {
    const prop: ShopEmployeeScheduleSettingProp = {
      name: name,
      date: date,
      day: day,
      roster: roster,
      operating: operating,
      employeeId: employeeId,
      daysInFourWeeks: daysInFourWeeks,
    };
    return cloneDeep(prop);
  }

  public async build(
    name: string,
    date: string,
    day: string,
    daysInForWeeks: string[],
    roster: ShopOperatingDailyType,
    operating: ShopOperatingHoursType,
    employeeId: string
  ) {
    const prop = this.buildProp(name, date, day, daysInForWeeks, roster, operating, employeeId);
    const modal = await this.setting(prop);
    return modal;
  }

  private async setting(prop: ShopEmployeeScheduleSettingProp) {
    const form = this._formCtrl.setEditFormHeaderModalProp();
    form.headerTitle = prop.name;
    return await this._modal.create({
      component: ShopEmployeeScheduleSettingComponent,
      presentingElement: await this._modal.getTop(),
      componentProps: {
        prop: prop,
        form: cloneDeep(form),
      },
    });
  }
}
