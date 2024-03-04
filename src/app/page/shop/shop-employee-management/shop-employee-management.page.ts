import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-shop-employee-management',
  templateUrl: './shop-employee-management.page.html',
  styleUrls: ['./shop-employee-management.page.scss'],
})
export class ShopEmployeeManagementPage implements OnInit, OnDestroy {
  public _start = new BehaviorSubject<boolean>(false);
  public start$ = this._start.asObservable();
  public destroy$ = new Subject<void>();

  constructor() {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.start$
      .pipe(
        takeUntil(this.destroy$),
        filter(start => !start)
      )
      .subscribe(start => {
        if (!start) {
          this._start.next(true);
        }
      });
  }

  ionViewWillLeave() {
    this._start.next(false);
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnDestroy() {
    this._start.next(false);
    this.destroy$.next();
    this.destroy$.complete();
  }
}
