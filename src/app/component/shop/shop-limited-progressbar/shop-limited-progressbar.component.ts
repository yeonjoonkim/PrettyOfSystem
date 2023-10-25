import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ShopLimitedProgpressBarType } from 'src/app/interface';

@Component({
  selector: 'shop-limited-progressbar',
  templateUrl: './shop-limited-progressbar.component.html',
  styleUrls: ['./shop-limited-progressbar.component.scss'],
})
export class ShopLimitedProgressbarComponent implements OnInit, OnDestroy {
  private _onDestroy$ = new Subject<void>();
  @Input() progressbar!: Observable<ShopLimitedProgpressBarType>;

  public value!: ShopLimitedProgpressBarType | undefined;
  constructor() {}

  ngOnInit() {
    this.progressbar.pipe(takeUntil(this._onDestroy$)).subscribe(value => {
      this.value = value;
    });
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
