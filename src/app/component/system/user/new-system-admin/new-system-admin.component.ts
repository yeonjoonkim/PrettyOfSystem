import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { IFormHeaderModalProp, IUser } from 'src/app/interface';
import * as Constant from '../../../../constant/constant';
import { UserAdminService } from 'src/app/service/user-admin/user-admin.service';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'new-system-admin',
  templateUrl: './new-system-admin.component.html',
  styleUrls: ['./new-system-admin.component.scss'],
})
export class NewSystemAdminComponent implements OnInit {
  public form!: IFormHeaderModalProp;
  public user: IUser = this._systemAdmin.defaultUser();
  public validator = {
    phone: false,
    email: false,
    password: false,
    firstName: false,
    lastName: false,
  };

  private _paramUser!: IUser;
  constructor(
    private _navParams: NavParams,
    private _systemAdmin: UserAdminService,
    private _global: GlobalService
  ) {}

  async ngOnInit() {
    await this.loadingFromCtrl();
  }

  private async loadingFromCtrl() {
    const form: IFormHeaderModalProp = this._navParams.get(Constant.Default.ComponentMode.Form);
    this._paramUser = this._navParams.get('config');
    this.form = form
      ? form
      : {
          readOnly: true,
          headerTitle: '',
          action: Constant.Default.FormAction.Read,
          enabledSavebutton: false,
        };
    this.user = this._paramUser ? this._paramUser : this._systemAdmin.defaultUser();

    if (!this.user.setting.preferLanguage) {
      this.user.setting.preferLanguage =
        await this._global.language.management.storage.getCurrentLanguage();
    }
  }

  public onChangeLoginOption() {
    this.validator.password = false;
    this.user.encryptedPassword = '';
    this.handleFormEnableSaveBtn();
  }

  public handleFormEnableSaveBtn() {
    const fullNameValiator = this.validator.firstName && this.validator.lastName;
    let enabled = this.validator.email && fullNameValiator && this.validator.phone;
    if (this.user.loginOption.email) {
      enabled = enabled && this.validator.password;
    }
    this.form.enabledSavebutton = enabled;
  }

  public onChangePasswordValidation() {
    if (!this.validator.password) {
      this.user.encryptedPassword = '';
    }
    this.handleFormEnableSaveBtn();
  }

  public setPassword(pwd: string) {
    this.user.encryptedPassword = pwd;
  }

  public async dismiss() {
    await this._systemAdmin.modal.dismiss();
  }

  public async onClickCreate() {
    this.user.id = this._global.newId();
    await this._systemAdmin.handleCreate(this.user, true);
  }
}
