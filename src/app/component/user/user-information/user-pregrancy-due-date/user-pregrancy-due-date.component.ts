import { Component, Input, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { firstValueFrom } from 'rxjs';
import { DateService } from 'src/app/service/global/date/date.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'user-pregrancy-due-date',
  templateUrl: './user-pregrancy-due-date.component.html',
  styleUrls: ['./user-pregrancy-due-date.component.scss'],
})
export class UserPregrancyDueDateComponent implements OnInit {
  @Input() pregnancyDueDate!: string | null;
  public readOnly: boolean = true;
  public enableSaveBtn: boolean = false;
  public requesting: boolean = false;
  public localTimezone: string = this._date.localTimezone;
  constructor(
    private _user: UserService,
    private _date: DateService
  ) {}

  ngOnInit() {}

  public async onSave() {
    if (!this.requesting) {
      this.requesting = true;
      const before = await firstValueFrom(this._user.data$);
      if (before) {
        const user = cloneDeep(before);
        user.setting.pregnancyDueDate = user.gender !== 'Male' ? this.pregnancyDueDate : null;
        const updated = await this._user.updateUser(user, before);
        this.readOnly = updated ? true : false;
      }
      this.requesting = false;
    }
  }

  public async reset() {
    this.pregnancyDueDate = null;
    await this.onSave();
  }

  public async onChangeDueDateFormat() {
    if (this.pregnancyDueDate) {
      await this.reset();
    } else {
      const newDate = this._date.transform.formatLocalDateTime(new Date());
      const startOfDay = this._date.startDay(newDate);
      this.pregnancyDueDate = this._date.addDay(startOfDay, 100);
      this.enableSaveBtn = true;
    }
  }

  onChangeDate() {
    this.enableSaveBtn = true;
  }
}
