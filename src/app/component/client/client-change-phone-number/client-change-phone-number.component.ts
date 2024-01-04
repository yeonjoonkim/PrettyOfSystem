import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChangePhoneNumberRequestRepositoryService } from 'src/app/firebase/internal-api-repository/change-phone-number-request-repository/change-phone-number-request-repository.service';
import { ChangeNumberUserCriteriaType, IFormHeaderModalProp } from 'src/app/interface';
import { FormControllerService } from 'src/app/service/global/form/form-controller.service';

@Component({
  selector: 'client-change-phone-number',
  templateUrl: './client-change-phone-number.component.html',
  styleUrls: ['./client-change-phone-number.component.scss'],
})
export class ClientChangePhoneNumberComponent implements OnInit {
  public form!: IFormHeaderModalProp;
  public error: boolean = false;
  public verifying: boolean = false;
  public verified: boolean = false;

  public criteria: ChangeNumberUserCriteriaType = {
    firstName: '',
    lastName: '',
    gender: 'Male',
    email: '',
    previousPhoneNumber: '',
    dob: '1990-01-01T00:00:00',
  };
  public validator = {
    firstName: false,
    phoneNumber: false,
    lastName: false,
    email: false,
  };
  constructor(
    private _modal: ModalController,
    private _formCtrl: FormControllerService,
    private _request: ChangePhoneNumberRequestRepositoryService
  ) {
    this.form = this._formCtrl.setReadFormHeaderModalProp();
    this.form.headerTitle = 'label.description.changephonenumber';
  }

  ngOnInit() {}

  async dismiss() {
    await this._modal.dismiss();
  }

  public async onRequest() {
    this.form.enabledSavebutton = false;
    this.verifying = true;
    const request = await this._request.create(this.criteria);
    if (request) {
      this.verified = true;
      setTimeout(async () => {
        await this._modal.dismiss();
      }, 10000);
    } else {
      this.error = true;
      this.form.enabledSavebutton = true;
    }
    this.verifying = false;
  }

  public handleEnabledSaveBtn() {
    this.form.enabledSavebutton =
      this.validator.firstName && this.validator.lastName && this.validator.email && this.validator.phoneNumber;
  }
}
