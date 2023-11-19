import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemShopCapacityRepositoryService } from 'src/app/firebase/system-repository/system-shop-capacity/system-shop-capacity-repository.service';
import { ShopCapacityType } from 'src/app/interface';
import { LoadingService } from '../../global/loading/loading.service';
import { SystemShopCapacityModalService } from './system-shop-capacity-modal/system-shop-capacity-modal.service';

@Injectable({
  providedIn: 'root',
})
export class SystemShopCapacityService {
  capacities$!: Observable<ShopCapacityType[]>;

  constructor(
    public modal: SystemShopCapacityModalService,
    private _capacity: SystemShopCapacityRepositoryService,
    private _loading: LoadingService
  ) {
    this.capacities$ = this._capacity.capacitiesValueChangeListener();
  }

  async add(doc: ShopCapacityType) {
    await this._loading.show();
    const result = await this._capacity.addCapacity(doc);
    await this._loading.dismiss();
    return result;
  }

  async update(doc: ShopCapacityType) {
    await this._loading.show();
    const result = await this._capacity.updateCapacity(doc);
    await this._loading.dismiss();
    return result;
  }

  async delete(doc: ShopCapacityType) {
    await this._loading.show();
    const result = await this._capacity.deleteCapacity(doc);
    await this._loading.dismiss();
    return result;
  }
}
