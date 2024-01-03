import { Component, Input, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { firstValueFrom } from 'rxjs';
import { UserSettingEmergencyContactType } from 'src/app/interface';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'user-emergancy-contact',
  templateUrl: './user-emergancy-contact.component.html',
  styleUrls: ['./user-emergancy-contact.component.scss'],
})
export class UserEmergancyContactComponent implements OnInit {
  @Input() emergencyContact!: UserSettingEmergencyContactType | null;
  public readOnly: boolean = true;
  public enableSaveBtn: boolean = false;
  public requesting: boolean = false;
  public validator = {
    firstName: false,
    lastName: false,
    phoneNumber: false,
  };

  constructor(private _user: UserService) {}

  ngOnInit() {}

  public async onSave() {
    if (!this.requesting) {
      this.requesting = true;
      const before = await firstValueFrom(this._user.data$);
      if (before) {
        const after = cloneDeep(before);
        if (this.emergencyContact !== null) {
          this.emergencyContact.firstName = this._user.global.textTransform.getTitleFormat(
            this.emergencyContact.firstName
          );
          this.emergencyContact.lastName = this._user.global.textTransform.getTitleFormat(
            this.emergencyContact.lastName
          );
        }
        after.setting.emergencyContact = this.emergencyContact;
        const updated = await this._user.updateUser(after, before);
        this.readOnly = updated ? true : false;
      }
      this.requesting = false;
    }
  }

  public provide() {
    this.readOnly = false;
    this.emergencyContact = this.emergencyContact !== null ? this.emergencyContact : null;
    this.enableSaveBtn = false;
  }

  public onChangeEmergencyContact() {
    this.emergencyContact =
      this.emergencyContact === null ? { firstName: '', lastName: '', phoneNumber: '' } : null;
    this.enableSaveBtn = this.emergencyContact !== null ? false : true;
  }

  public handle() {
    this.enableSaveBtn =
      this.emergencyContact !== null
        ? this.validator.firstName && this.validator.lastName && this.validator.phoneNumber
        : true;
  }
}
