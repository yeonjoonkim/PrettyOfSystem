import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IUser } from 'src/app/interface';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user-massage-setting',
  templateUrl: './user-massage-setting.page.html',
  styleUrls: ['./user-massage-setting.page.scss'],
})
export class UserMassageSettingPage implements OnInit {
  private _destroy$ = new Subject<void>();
  public user!: IUser;
  constructor(private _user: UserService) {}

  ngOnInit() {
    this._user.data$.pipe(takeUntil(this._destroy$)).subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
