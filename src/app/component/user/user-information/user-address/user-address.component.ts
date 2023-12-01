import { Component, Input, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { firstValueFrom } from 'rxjs';
import { AddressType, IUser } from 'src/app/interface';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss'],
})
export class UserAddressComponent implements OnInit {
  @Input() address!: AddressType | null;
  public readOnly: boolean = true;
  public enableSaveBtn: boolean = false;
  public requesting: boolean = false;

  constructor(private _user: UserService) {}
  ngOnInit() {}

  public async onSave() {
    if (!this.requesting) {
      this.requesting = true;
      const before = await firstValueFrom(this._user.data$);
      if (before) {
        const user = cloneDeep(before);
        user.address = this.address;
        const updated = await this._user.updateUser(user, before);
        this.readOnly = updated ? true : false;
      }
      this.requesting = false;
    }
  }

  public onChangeProvideAddress() {
    this.address = this.address === null ? { postCode: '', state: '', street: '', suburb: '' } : null;
  }
}
