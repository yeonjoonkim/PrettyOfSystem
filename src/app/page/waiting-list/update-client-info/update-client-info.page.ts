import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, combineLatestWith, firstValueFrom, of, switchMap, takeUntil } from 'rxjs';
import { IUser } from 'src/app/interface';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';
import * as Constant from 'src/app/constant/constant';
import { LanguageService } from 'src/app/service/global/language/language.service';
@Component({
  selector: 'app-update-client-info',
  templateUrl: './update-client-info.page.html',
  styleUrls: ['./update-client-info.page.scss'],
})
export class UpdateClientInfoPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public loaded$!: Observable<boolean>;
  public isLoading$!: Observable<boolean>;
  public client$!: Observable<IUser | null>;
  constructor(
    private _waitingList: WaitingListService,
    private _route: ActivatedRoute,
    private _language: LanguageService,
    private _router: Router
  ) {
    this.loaded$ = this._waitingList.isLoaded$;
    this.isLoading$ = this._waitingList.isLoading$;
    this.client$ = this._waitingList.client.info$;
  }

  ngOnInit() {
    this._waitingList.start$
      .pipe(
        combineLatestWith(this._waitingList.client.isLoggedin$, this._waitingList.client.info$),
        takeUntil(this._destroy$)
      )
      .subscribe(async ([start, login, client]) => {
        const hasSessionId: boolean = typeof this._sessionId === 'string';
        const navigateToWaitingList = !start && !login && hasSessionId;
        const validateSession = !start && login && hasSessionId;
        const currentlanguage = await this._language.management.storage.getCurrentLanguage();
        if (!hasSessionId) {
          this._router.navigateByUrl(`booking`);
        }
        if (navigateToWaitingList) {
          this._router.navigateByUrl(`waiting-list/${this._sessionId}`);
        }
        if (validateSession) {
          await this._waitingList.validateSession(this._sessionId);
        }
        if (client && currentlanguage !== client.setting.preferLanguage) {
          await this._language.onLanguageChange(client.setting.preferLanguage);
        }
      });
  }

  async onClickNext() {
    const observable = this._waitingList.shop.category();
    const category = await firstValueFrom(observable);

    if (category !== null) {
      switch (category.name as Constant.ShopCategoryTitleType) {
        case Constant.ShopCategoryTitle.MassageTheraphy ||
          Constant.ShopCategoryTitle.PersonalTraining ||
          Constant.ShopCategoryTitle.SkinCare:
          await this._router.navigateByUrl(`/waiting-list/${this._sessionId}/update-medical-info`);
          break;
        default:
          await this._router.navigateByUrl(`/waiting-list/${this._sessionId}/cart`);
      }
    } else {
      await this._router.navigateByUrl('booking');
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
