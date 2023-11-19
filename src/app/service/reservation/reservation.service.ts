import { Injectable } from '@angular/core';
import { PriceListService } from './price-list/price-list.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(public priceList: PriceListService) {}
}
