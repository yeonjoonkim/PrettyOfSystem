import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ShopConfigurationType } from 'src/app/interface';
import { WaitingListService } from 'src/app/service/waiting-list/waiting-list.service';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.page.html',
  styleUrls: ['./waiting-list.page.scss'],
})
export class WaitingListPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  private _sessionId: string | null = this._route.snapshot.paramMap.get('id');
  public isValidated: boolean = false;

  public shopConfig$!: Observable<ShopConfigurationType | null>;
  public start$!: Observable<boolean | null>;
  public loading$!: Observable<boolean>;
  public loaded$!: Observable<boolean>;
  constructor(
    private _waitngList: WaitingListService,
    private _route: ActivatedRoute
  ) {
    this.loading$ = this._waitngList.isLoading$;
    this.loaded$ = this._waitngList.isLoaded$;
    this.shopConfig$ = this._waitngList.shop.config$;
    this.start$ = this._waitngList.start$;
  }

  async ngOnInit() {
    await this._waitngList.validateSession(this._sessionId);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
