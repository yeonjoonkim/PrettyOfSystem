import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, distinctUntilChanged, filter, pairwise, takeUntil } from 'rxjs';
import { IUser } from 'src/app/interface';
import { LanguageService } from 'src/app/service/global/language/language.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public user!: IUser;
  @Input() isRequiredSignature: boolean = true;
  @Input() isRequiredLoginOption: boolean = true;
  @Input() isRequiredInsurance: boolean = true;
  @Input() onlyUserInfo: boolean = false;
  @Input() onlyMedical: boolean = false;

  constructor(
    private _user: UserService,
    private _language: LanguageService
  ) {}

  ngOnInit() {
    this._user.data$.pipe(takeUntil(this._destroy$)).subscribe(async user => {
      if (user) {
        this.user = user;
      }
    });
    this._user
      .userLanguageChangeListener()
      .pipe(distinctUntilChanged(), takeUntil(this._destroy$))
      .subscribe(async language => {
        if (typeof language === 'string') {
          await this._language.onLanguageChange(language);
        }
      });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
