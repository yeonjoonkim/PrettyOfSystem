import { Component, Input, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IUser } from 'src/app/interface';
import { MedicalHistoryService } from 'src/app/service/medical-history/medical-history.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'user-medical-history',
  templateUrl: './user-medical-history.component.html',
  styleUrls: ['./user-medical-history.component.scss'],
})
export class UserMedicalHistoryComponent implements OnInit {
  @Input() user!: IUser | null;
  public readOnly: boolean = true;
  public enableSaveBtn: boolean = true;
  public requesting: boolean = false;
  public isClient: boolean = false;

  constructor(
    private _user: UserService,
    public medical: MedicalHistoryService
  ) {}

  ngOnInit() {}

  public async onSave() {
    if (!this.requesting) {
      this.requesting = true;
      const before = await firstValueFrom(this._user.data$);
      if (before && this.user) {
        const updated = await this._user.updateUser(this.user, before);
        this.readOnly = updated ? true : false;
      }
      this.requesting = false;
    }
  }
}
