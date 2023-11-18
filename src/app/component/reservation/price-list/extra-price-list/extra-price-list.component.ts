import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { ShopExtraDocumentType } from 'src/app/interface';
import { PriceListService } from 'src/app/service/reservation/price-list/price-list.service';

@Component({
  selector: 'extra-price-list',
  templateUrl: './extra-price-list.component.html',
  styleUrls: ['./extra-price-list.component.scss'],
})
export class ExtraPriceListComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public extras$!: Observable<ShopExtraDocumentType[]>;
  constructor(private _priceList: PriceListService) {}

  ngOnInit() {
    this.extras$ = this._priceList.extras$.pipe(
      takeUntil(this._destroy$),
      map(extras => {
        return extras;
      })
    );
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
