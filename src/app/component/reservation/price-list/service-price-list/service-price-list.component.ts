import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { ShopServiceDocumentType } from 'src/app/interface';
import { PriceListService } from 'src/app/service/reservation/price-list/price-list.service';

@Component({
  selector: 'service-price-list',
  templateUrl: './service-price-list.component.html',
  styleUrls: ['./service-price-list.component.scss'],
})
export class ServicePriceListComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public services$!: Observable<ShopServiceDocumentType[]>;
  public expandedIndex: number | null = null;
  constructor(private _priceList: PriceListService) {}

  ngOnInit() {
    this.services$ = this._priceList.services$.pipe(
      takeUntil(this._destroy$),
      map(services => {
        return services;
      })
    );
  }

  expandCard(index: number | null) {
    this.expandedIndex = index;
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
