import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { IFormHeaderModalProp, IUser, NameValuePairType } from 'src/app/interface';
import { ClientService } from 'src/app/service/client/client.service';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';
import { GlobalService } from 'src/app/service/global/global.service';

@Component({
  selector: 'client-create-account',
  templateUrl: './client-create-account.component.html',
  styleUrls: ['./client-create-account.component.scss'],
})
export class ClientCreateAccountComponent implements OnInit {
  public form!: IFormHeaderModalProp;
  public user!: IUser;

  public hasPrivateInsurance: boolean = false;
  public validator = {
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    privacy: false,
    termAndCondition: false,
    privateInsurance: true,
  };

  public privateHealthCareCompanies!: NameValuePairType[];
  public selectedPrivateHealthCompany!: NameValuePairType;

  constructor(
    private _modal: ModalController,
    private _formCtrl: FormControllerService,
    private _client: ClientService,
    private _global: GlobalService,
    private _navParam: NavParams
  ) {
    this.privateHealthCareCompanies = this._global.privateHealth.list;
    this.selectedPrivateHealthCompany = this.privateHealthCareCompanies[0];
    this.form = this._formCtrl.setReadFormHeaderModalProp();
    this.form.headerTitle = 'label.title.signup';
  }

  async ngOnInit() {
    const phonNumber: string | undefined = this._navParam.get('phoneNumber');
    this.user = await this._client.build();
    this.user.phoneNumber = phonNumber !== undefined && typeof phonNumber === 'string' ? phonNumber : '';
  }

  async onCreate() {
    this.form.enabledSavebutton = false;
    const created = await this._client.createAccount(this.user);
    if (created) {
      await this._modal.dismiss(this.user.phoneNumber);
    } else {
      this.form.enabledSavebutton = true;
    }
  }

  async dismiss() {
    await this._modal.dismiss();
  }

  onClickPrivateHealth() {
    this.validator.privateInsurance = this.hasPrivateInsurance ? false : true;
    if (!this.hasPrivateInsurance) {
      this.user.setting.privateInsurance = null;
    } else {
      this.user.setting.privateInsurance = {
        company: '',
        memberNum: '',
        reference: '',
      };
      this.onChangePrivateHealth();
    }
    this.handleEnabledSaveBtn();
  }

  onChangePrivateHealth() {
    if (this.user.setting.privateInsurance !== null) {
      this.user.setting.privateInsurance.company = this.selectedPrivateHealthCompany.value;
    }
  }

  public handleEnabledSaveBtn() {
    this.form.enabledSavebutton =
      this.validator.email &&
      this.validator.phone &&
      this.validator.firstName &&
      this.validator.lastName &&
      this.validator.privacy &&
      this.validator.termAndCondition &&
      this.validator.privateInsurance;
  }

  public isLoading() {
    return this.user === undefined;
  }
}
