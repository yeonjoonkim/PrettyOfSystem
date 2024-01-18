import { Component, Input, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { firstValueFrom } from 'rxjs';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'user-pacemaker',
  templateUrl: './user-pacemaker.component.html',
  styleUrls: ['./user-pacemaker.component.scss'],
})
export class UserPacemakerComponent implements OnInit {
  @Input() hasPaceMaker!: boolean;
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
        user.setting.medical.hasPaceMaker = this.hasPaceMaker;
        const updated = await this._user.updateUser(user, before);
        this.readOnly = updated ? true : false;
      }
      this.requesting = false;
    }
  }
}
