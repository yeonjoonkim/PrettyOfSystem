import { TestBed } from '@angular/core/testing';

import { ShopReservationDayQueryService } from './shop-reservation-day-query.service';

describe('ShopReservationDayQueryService', () => {
  let service: ShopReservationDayQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopReservationDayQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
