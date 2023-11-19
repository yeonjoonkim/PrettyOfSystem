import { Component, OnInit } from '@angular/core';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { ShopPackageDocumentType } from 'src/app/interface';
import { PriceListService } from 'src/app/service/reservation/price-list/price-list.service';

@Component({
  selector: 'package-price-list',
  templateUrl: './package-price-list.component.html',
  styleUrls: ['./package-price-list.component.scss'],
})
export class PackagePriceListComponent implements OnInit {
  private _destroy$ = new Subject<void>();
  public packages$!: Observable<ShopPackageDocumentType[]>;
  public timezone: string | undefined;
  constructor(private _priceList: PriceListService) {}

  ngOnInit() {
    this.packages$ = this._priceList.packages$.pipe(
      takeUntil(this._destroy$),
      map(packages => {
        return packages;
      })
    );
    this._priceList.timezone$.pipe(takeUntil(this._destroy$)).subscribe(tz => {
      if (tz) {
        this.timezone = tz;
      }
    });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
