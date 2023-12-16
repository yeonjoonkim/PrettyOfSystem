import { Component, Input, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { firstValueFrom } from 'rxjs';
import { IUser } from 'src/app/interface';
import { GlobalService } from 'src/app/service/global/global.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() user!: IUser | null;
  @Input() isRequiredLoginOption: boolean = true;
  public readOnly: boolean = true;
  public validator = {
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
  };
  public enableSaveBtn: boolean = false;
  public requesting: boolean = false;

  constructor(
    private _user: UserService,
    private _global: GlobalService
  ) {}

  public async onSave() {
    if (!this.requesting) {
      this.requesting = true;
      const after = cloneDeep(this.user);
      const before = await firstValueFrom(this._user.data$);
      if (before && after) {
        const updated = await this._user.updateUser(after, before);
        this.readOnly = updated ? true : false;
      }
      this.requesting = false;
    }
  }

  ngOnInit() {}

  public handleEnableSaveBtn() {
    this.enableSaveBtn =
      this.validator.firstName && this.validator.lastName && this.validator.phone && this.validator.email;
  }
}
