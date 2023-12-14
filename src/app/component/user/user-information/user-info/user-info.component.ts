import { Component, Input, OnInit } from '@angular/core';
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
      const before = await firstValueFrom(this._user.data$);
      if (before && this.user) {
        const updated = await this._user.updateUser(this.user, before);
        await this.handleLanguageChange(before);
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

  private async handleLanguageChange(before: IUser) {
    if (this.user) {
      const isLanguageChanged = this.user.setting.preferLanguage !== before.setting.preferLanguage;
      if (isLanguageChanged) {
        await this._global.language.onLanguageChange(this.user.setting.preferLanguage);
      }
    }
  }
}
