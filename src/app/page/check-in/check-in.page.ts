import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ShopConfigurationType } from 'src/app/interface';
import { CheckInService } from 'src/app/service/check-in/check-in.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.page.html',
  styleUrls: ['./check-in.page.scss'],
})

//http://localhost:8100/internal-api/check-in/84eYc8ZDSvEKwPxv1By9
export class CheckInPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public isValidated: boolean = false;

  public shopConfig$!: Observable<ShopConfigurationType | null>;
  public startCheckIn$!: Observable<boolean | null>;
  public loading$!: Observable<boolean>;
  public loaded$!: Observable<boolean>;

  constructor(
    private _checkIn: CheckInService,
    private _route: ActivatedRoute
  ) {
    this.loading$ = this._checkIn.isLoading$;
    this.loaded$ = this._checkIn.isLoaded$;
    this.shopConfig$ = this._checkIn.shop.config$;
    this.startCheckIn$ = this._checkIn.startCheckIn$;
  }

  async ngOnInit() {
    await this._checkIn.validateCheckInSession(this._sessionId);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
