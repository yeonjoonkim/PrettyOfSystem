import { Injectable, inject } from '@angular/core';
import { ShopReservationDayQueryService } from './shop-reservation-day-query/shop-reservation-day-query.service';

@Injectable({
  providedIn: 'root',
})
export class ShopReservationManagementService {
  public dayQuery = inject(ShopReservationDayQueryService);
}
