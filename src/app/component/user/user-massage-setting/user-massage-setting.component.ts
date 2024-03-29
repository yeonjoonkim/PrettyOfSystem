import { Component, Input, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { firstValueFrom } from 'rxjs';
import {
  GenderType,
  MassageBodySelectorAreaType,
  MassageDifficultChangePosition,
  UserSettingMassageType,
} from 'src/app/interface';
import { MassageService } from 'src/app/service/massage/massage.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'user-massage-setting',
  templateUrl: './user-massage-setting.component.html',
  styleUrls: ['./user-massage-setting.component.scss'],
})
export class UserMassageSettingComponent implements OnInit {
  @Input() massage!: UserSettingMassageType;
  public requesting: boolean = false;

  constructor(
    public massageSvc: MassageService,
    private _user: UserService
  ) {}

  async ngOnInit() {}

  public async onChangePressureLevel() {
    const hasMassage = this.massage !== undefined;
    if (hasMassage) {
      this.requesting = true;
      const before = await firstValueFrom(this._user.data$);
      if (before) {
        const current = cloneDeep(before);
        current.setting.massage.pressure = this.massage.pressure;
        await this._user.updateUser(current, before);
        this.requesting = false;
      }
    }
  }

  public async onChangeGender(gender: GenderType) {
    const hasMassage = this.massage !== undefined;
    if (hasMassage) {
      this.requesting = true;
      const before = await firstValueFrom(this._user.data$);
      if (before) {
        const current = cloneDeep(before);
        current.setting.massage.preferGender = gender;
        await this._user.updateUser(current, before);
        this.requesting = false;
      }
    }
  }

  public async onChangeAreas(areas: MassageBodySelectorAreaType[]) {
    const hasMassage = this.massage !== undefined;
    if (hasMassage) {
      this.requesting = true;
      const before = await firstValueFrom(this._user.data$);
      if (before) {
        const current = cloneDeep(before);
        current.setting.massage.areas = areas;
        await this._user.updateUser(current, before);
        this.requesting = false;
      }
    }
  }

  public async onChangePosition(position: MassageDifficultChangePosition) {
    const hasMassage = this.massage !== undefined;
    if (hasMassage) {
      this.requesting = true;
      const before = await firstValueFrom(this._user.data$);
      if (before) {
        const current = cloneDeep(before);
        current.setting.massage.difficultChangePosition = position;
        await this._user.updateUser(current, before);
        this.requesting = false;
      }
    }
  }
}
