import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, combineLatestWith, filter, firstValueFrom, takeUntil } from 'rxjs';
import { IUser, ShopCategoryType } from 'src/app/interface';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';
import * as Constant from 'src/app/constant/constant';
@Component({
  selector: 'app-update-client-info',
  templateUrl: './update-client-info.page.html',
  styleUrls: ['./update-client-info.page.scss'],
})
export class UpdateClientInfoPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public loaded$: Observable<boolean> = this._waitingList.isLoaded$;
  public isLoading$: Observable<boolean> = this._waitingList.isLoading$;
  public client$: Observable<IUser | null> = this._waitingList.client.info$;
  public category$: Observable<ShopCategoryType | null> = this._waitingList.shop.category();
  public isRelatedToMedicalService$: Observable<boolean> = this._waitingList.shop.isRelatedToMedical();

  constructor(
    private _waitingList: WaitingListService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {}

  async onClickNext(category: ShopCategoryType) {
    if (category !== null) {
      switch (category.name as Constant.ShopCategoryTitleType) {
        case Constant.ShopCategoryTitle.MassageTheraphy:
          await this._router.navigateByUrl(`/waiting-list/${this.sessionId}/update-massage-preference`);
          break;
        default:
          await this._router.navigateByUrl(`/waiting-list/${this.sessionId}/cart`);
      }
    } else {
      await this._router.navigateByUrl('booking');
    }
  }

  async ionViewWillEnter() {
    this._waitingList.start$
      .pipe(combineLatestWith(this._waitingList.client.isLoggedin$), takeUntil(this._destroy$))
      .subscribe(async ([start, login]) => {
        const hasSessionId: boolean = typeof this.sessionId === 'string';
        const navigateToWaitingList = !start && !login && hasSessionId;
        const validateSession = !start && login && hasSessionId;
        if (!hasSessionId) {
          this._router.navigateByUrl(`booking`);
        }
        if (navigateToWaitingList) {
          this._router.navigateByUrl(`waiting-list/${this.sessionId}`);
        }
        if (validateSession) {
          await this._waitingList.validateSession(this.sessionId);
        }
      });
  }

  ionViewWillLeave() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
