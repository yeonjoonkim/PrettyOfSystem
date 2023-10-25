import { Component, DoCheck, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { IFormHeaderModalProp, IUser, NameValuePairType } from 'src/app/interface';
import { UserService } from 'src/app/service/user/user.service';
import * as Constant from 'src/app/constant/constant';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit, DoCheck {
  public loading: boolean = true;
  public pages: NameValuePairType[] = [
    { name: 'label.title.information', value: 'page1' },
    { name: 'label.title.associatedshop', value: 'page2' },
  ];
  public currentPage: NameValuePairType = { name: 'label.title.information', value: 'page1' };
  public form!: IFormHeaderModalProp;
  public shopSelection: NameValuePairType[] = [];
  public resetPassword: boolean = false;
  public validator = {
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    password: false,
  };
  public user!: IUser;
  private _encryptedPassword: string = '';
  private _paramUser!: IUser;
  constructor(
    private _navParams: NavParams,
    private _user: UserService
  ) {}
  async ngDoCheck() {
    this.handleEnabledSaveBtn();
  }

  async ngOnInit() {
    await this.loadingFromCtrl();
  }

  public onPageChange(page: NameValuePairType) {
    this.currentPage = page;
  }

  public async dismiss() {
    await this._user.modal.dismiss();
  }

  public async handleEdit() {
    this.form.readOnly = false;
  }

  public async onClickResetPassword() {
    this._encryptedPassword = '';
  }

  private async handleEnabledSaveBtn() {
    let validation =
      this.validator.firstName &&
      this.validator.lastName &&
      this.validator.phone &&
      this.validator.email;

    if (this.user.loginOption.email) {
      validation = this.resetPassword ? validation && this.validator.password : validation;
      if (!this.validator.password) {
        this._encryptedPassword = '';
      }
    }
    this.form.enabledSavebutton = validation;
  }

  public setPassword(pwd: string) {
    this._encryptedPassword = pwd;
  }

  public async handleSave() {
    this.user.encryptedPassword =
      this.user.loginOption.email && this.resetPassword
        ? this._encryptedPassword
        : this.user.encryptedPassword;

    const result = await this._user.updateUser(this.user, this._paramUser);
    if (result) {
      await this._user.modal.dismiss();
    }
  }

  private async loadingFromCtrl() {
    const form: IFormHeaderModalProp | undefined = this._navParams.get(
      Constant.Default.ComponentMode.Form
    );
    const shopSelection: NameValuePairType[] | undefined = this._navParams.get('shopSelection');
    const user: IUser | undefined = this._navParams.get('user');
    if (form !== undefined && shopSelection !== undefined && user !== undefined) {
      this.form = form
        ? form
        : {
            readOnly: true,
            headerTitle: '',
            action: Constant.Default.FormAction.Read,
            enabledSavebutton: false,
          };
      this._paramUser = cloneDeep(user);
      this.user = user;
      this.shopSelection = shopSelection;
      this.loading = false;
    }
  }
}
