import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, combineLatestWith, firstValueFrom, take, takeUntil } from 'rxjs';
import { IUser, ShopCategoryType } from 'src/app/interface';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';
import * as Constant from 'src/app/constant/constant';

@Component({
  selector: 'app-update-medical-info',
  templateUrl: './update-medical-info.page.html',
  styleUrls: ['./update-medical-info.page.scss'],
})
export class UpdateMedicalInfoPage implements OnInit {
  private _destroy$ = new Subject<void>();
  private _sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public loaded$!: Observable<boolean>;
  public isLoading$!: Observable<boolean>;
  public client$!: Observable<IUser | null>;
  public shopCategory$!: Observable<ShopCategoryType | null>;
  constructor(
    private _waitingList: WaitingListService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.loaded$ = this._waitingList.isLoaded$;
    this.isLoading$ = this._waitingList.isLoading$;
    this.client$ = this._waitingList.client.info$;
  }

  ngOnInit() {
    this._waitingList.start$
      .pipe(combineLatestWith(this._waitingList.client.isLoggedin$), takeUntil(this._destroy$))
      .subscribe(async ([start, login]) => {
        const hasSessionId: boolean = typeof this._sessionId === 'string';
        const navigateToWaitingList = !start && !login && hasSessionId;
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
      });
  }

  async onClickGoback() {
    await this._router.navigateByUrl(`/waiting-list/${this._sessionId}/update-client-info`);
  }

  async onClickNext() {
    const observable = this._waitingList.shop.category();
    const category = await firstValueFrom(observable);

    if (category !== null) {
      switch (category.name as Constant.ShopCategoryTitleType) {
        case Constant.ShopCategoryTitle.MassageTheraphy:
          await this._router.navigateByUrl(`waiting-list/${this._sessionId}/update-massage-preference`);
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
