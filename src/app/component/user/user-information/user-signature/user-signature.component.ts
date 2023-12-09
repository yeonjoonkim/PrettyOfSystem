import { Component, Input, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { firstValueFrom } from 'rxjs';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'user-signature',
  templateUrl: './user-signature.component.html',
  styleUrls: ['./user-signature.component.scss'],
})
export class UserSignatureComponent implements OnInit {
  @Input() signature!: string | null;
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
        const after = cloneDeep(before);
        after.signature = this.signature;
        const updated = await this._user.updateUser(after, before);
        this.readOnly = updated ? true : false;
      }
      this.requesting = false;
    }
  }

  public provide() {
    this.readOnly = false;
    this.signature = this.signature ? this.signature : '';
    this.enableSaveBtn = false;
  }

  public async reset() {
    this.signature = null;
    this.enableSaveBtn = false;
    await this.onSave();
  }

  public onChangeSingature() {
    this.enableSaveBtn = true;
  }
}
