import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IUser } from 'src/app/interface';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit, OnDestroy {
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
