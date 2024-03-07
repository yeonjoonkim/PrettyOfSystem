import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, combineLatestWith, filter, takeUntil } from 'rxjs';
import { ShopConfigurationType } from 'src/app/interface';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.page.html',
  styleUrls: ['./waiting-list.page.scss'],
})
export class WaitingListPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public isValidated: boolean = false;

  public shopConfig$!: Observable<ShopConfigurationType | null>;
  public start$!: Observable<boolean | null>;
  public loading$!: Observable<boolean>;
  public loaded$!: Observable<boolean>;
  constructor(
    private _waitngList: WaitingListService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.loading$ = this._waitngList.isLoading$;
    this.loaded$ = this._waitngList.isLoaded$;
    this.shopConfig$ = this._waitngList.shop.config$;
    this.start$ = this._waitngList.start$;
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    await this._waitngList.validateSession(this.sessionId);
    this._waitngList.start$
      .pipe(combineLatestWith(this._waitngList.client.isLoggedin$), takeUntil(this._destroy$))
      .subscribe(([start, isLogin]) => {
        if (start && isLogin) {
          this._router.navigateByUrl(`waiting-list/${this.sessionId}/update-client-info`);
        }
      });
    this._waitngList.start$
      .pipe(
        takeUntil(this._destroy$),
        filter(start => start !== null && start)
      )
      .subscribe(async () => {
        await this._waitngList.cart.start();
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
