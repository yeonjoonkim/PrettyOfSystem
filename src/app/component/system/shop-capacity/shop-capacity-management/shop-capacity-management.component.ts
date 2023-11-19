import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ShopCapacityType } from 'src/app/interface';
import { SystemShopCapacityService } from 'src/app/service/system/system-shop-capacity/system-shop-capacity.service';

@Component({
  selector: 'shop-capacity-management',
  templateUrl: './shop-capacity-management.component.html',
  styleUrls: ['./shop-capacity-management.component.scss'],
})
export class ShopCapacityManagementComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  public capacities!: ShopCapacityType[];

  constructor(private _capacitySvc: SystemShopCapacityService) {}

  ngOnInit() {
    this._capacitySvc.capacities$.pipe(takeUntil(this._destroy$)).subscribe(cap => {
      this.capacities = cap;
    });
  }

  public async onClickAdd() {
    const modal = await this._capacitySvc.modal.presentNewCapacity();
    await modal.present();
  }

  public async onClickEdit(cap: ShopCapacityType) {
    const modal = await this._capacitySvc.modal.presentEditCapacity(cap);
    await modal.present();
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
