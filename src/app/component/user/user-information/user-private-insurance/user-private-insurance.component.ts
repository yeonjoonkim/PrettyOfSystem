import { Component, Input, OnInit } from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep';
import { firstValueFrom } from 'rxjs';
import { NameValuePairType, UserSettingPrivateInsuranceType } from 'src/app/interface';
import { PrivateHealthInsuranceListService } from 'src/app/service/global/private-health-insurance/private-health-insurance-list/private-health-insurance-list.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'user-private-insurance',
  templateUrl: './user-private-insurance.component.html',
  styleUrls: ['./user-private-insurance.component.scss'],
})
export class UserPrivateInsuranceComponent implements OnInit {
  @Input() privateInsurance!: UserSettingPrivateInsuranceType | null;
  public readOnly: boolean = true;
  public enableSaveBtn: boolean = false;
  public requesting: boolean = false;
  public selection!: NameValuePairType[];
  public selected: NameValuePairType | undefined;
  public validator = {
    num: false,
  };
  constructor(
    private _user: UserService,
    private _insurance: PrivateHealthInsuranceListService
  ) {
    this.selection = this._insurance.get();
  }

  ngOnInit() {
    this.selected =
      this.privateInsurance !== null
        ? { name: this.privateInsurance.company, value: this.privateInsurance.company }
        : undefined;
  }

  public onChangeCompany(pair: NameValuePairType) {
    if (this.privateInsurance) {
      this.privateInsurance.company = pair.name;
    }
  }

  public handleEnabledSaveBtn() {
    this.enableSaveBtn = this.validator.num;
  }

  public async onSave() {
    if (!this.requesting) {
      this.requesting = true;
      const before = await firstValueFrom(this._user.data$);
      if (before) {
        const after = cloneDeep(before);
        after.setting.privateInsurance = this.privateInsurance;
        const updated = await this._user.updateUser(after, before);
        this.readOnly = updated ? true : false;
      }
      this.requesting = false;
    }
  }

  public onChangeProvidePrivateInsurance() {
    this.privateInsurance =
      this.privateInsurance === null ? { company: 'Medibank', memberNum: '', reference: '' } : null;
    this.selected = { name: 'Medibank', value: 'Medibank' };
  }
}
