import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cloneDeep } from 'lodash-es';
import { Observable, Subject, combineLatestWith, firstValueFrom, takeUntil } from 'rxjs';
import { IUser, MassageBodySelectorAreaType, ShopCategoryType } from 'src/app/interface';
import { UserService } from 'src/app/service/user/user.service';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';

@Component({
  selector: 'app-update-massage-preference',
  templateUrl: './update-massage-preference.page.html',
  styleUrls: ['./update-massage-preference.page.scss'],
})
export class UpdateMassagePreferencePage implements OnInit {
  private _destroy$ = new Subject<void>();
  private _sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public loaded$!: Observable<boolean>;
  public isLoading$!: Observable<boolean>;
  public client$!: Observable<IUser | null>;
  public massageArea!: MassageBodySelectorAreaType[];
  public pressureLevel!: number;
  public request: boolean = false;
  constructor(
    private _waitingList: WaitingListService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _user: UserService
  ) {
    this.loaded$ = this._waitingList.isLoaded$;
    this.isLoading$ = this._waitingList.isLoading$;
  }

  ngOnInit() {
    this._waitingList.start$
      .pipe(
        combineLatestWith(this._waitingList.client.isLoggedin$, this._waitingList.client.info$),
        takeUntil(this._destroy$)
      )
      .subscribe(async ([start, login, info]) => {
        const hasSessionId: boolean = typeof this._sessionId === 'string';
        const hasInfo = info !== null;
        const navigateToWaitingList = !start && !login && hasSessionId && !hasInfo;
        const validateSession = !start && login && hasSessionId;
        if (!hasSessionId) {
          this._router.navigateByUrl(`booking`);
        }
        if (navigateToWaitingList) {
          this._router.navigateByUrl(`waiting-list/${this._sessionId}`);
        }
        if (validateSession) {
          await this._waitingList.validateSession(this._sessionId);
        }
        if (hasInfo) {
          this.massageArea = info.setting.massage.areas;
          this.pressureLevel = info.setting.massage.pressureLevel;
        }
      });
  }

  async onClickGoback() {
    await this._router.navigateByUrl(`/waiting-list/${this._sessionId}/update-medical-info`);
  }

  async onClickNext() {
    const isLoaded = !this.isLoading();
    const before = await firstValueFrom(this._waitingList.client.info$);
    if (isLoaded && before !== null) {
      const after = cloneDeep(before);
      this.request = true;
      after.setting.massage.areas = this.massageArea;
      after.setting.massage.pressureLevel = this.pressureLevel;
      const result = await this._user.updateUser(after, before);
      if (result) {
        this.request = false;
        await this._router.navigateByUrl(`waiting-list/${this._sessionId}/cart`);
      } else {
        this.request = false;
      }
    }
  }

  public isLoading() {
    return this.massageArea === undefined && this.pressureLevel === undefined;
  }

  public onChangeAreas(areas: MassageBodySelectorAreaType[]) {
    this.massageArea = areas;
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
