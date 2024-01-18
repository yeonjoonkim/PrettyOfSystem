import { Injectable } from '@angular/core';
import { ShopConsultRepositoryService } from 'src/app/firebase/shop-repository/shop-consult-repository/shop-consult-repository.service';
import { ShopService } from '../shop.service';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopConsultManagementService {
  constructor(
    private _consultRepo: ShopConsultRepositoryService,
    private _shop: ShopService
  ) {}

  getEmployeeScheduledWithinDays(employeeId: string, days: string[]) {
    return this._shop.config$.pipe(
      switchMap(config => {
        if (config !== null) {
          return this._consultRepo.getEmployeeConsultWithinDays(config.id, employeeId, days);
        } else {
          return of([]);
        }
      })
    );
  }
}
